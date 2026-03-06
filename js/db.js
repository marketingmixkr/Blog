// ============================================================
// MarketingMix — JSONBin.io DB Layer
// ============================================================

const JSONBIN_API_KEY = '$2a$10$B4Ugk1XpxS4ZTAjrOtNFT.0CDE7myTX8iD6y.PVEPbpRhTBW2KyA2';

const BINS = {
  inquiries: '69aab80ad0ea881f40f4f0ec',
  projects:  '69aab835d0ea881f40f4f183',
  stats:     '69aab84a43b1c97be9b98784',
};

const JB_BASE = 'https://api.jsonbin.io/v3/b';
const JB_HDR  = { 'Content-Type': 'application/json', 'X-Access-Key': JSONBIN_API_KEY };

// ── 읽기 — 응답에서 .data 키 추출 ──
async function jbGet(binKey) {
  try {
    const r = await fetch(`${JB_BASE}/${BINS[binKey]}/latest`, {
      headers: { 'X-Access-Key': JSONBIN_API_KEY, 'X-Bin-Meta': 'false' }
    });
    if(!r.ok) throw new Error(`GET ${binKey} failed: ${r.status}`);
    const json = await r.json();
    // JSONBin은 저장한 값을 그대로 반환
    // {"data":[]} 형태로 저장했으므로 .data 키 반환, 없으면 전체 반환
    return json.data !== undefined ? json.data : json;
  } catch(e) {
    console.warn('[DB] GET 실패 — localStorage 폴백:', e.message);
    return null;
  }
}

// ── 쓰기 — 항상 {"data": ...} 래퍼로 저장 ──
async function jbPut(binKey, data) {
  try {
    // stats는 래퍼 없이 객체 그대로 저장
    const body = (binKey === 'stats') ? data : { data };
    const r = await fetch(`${JB_BASE}/${BINS[binKey]}`, {
      method: 'PUT', headers: JB_HDR,
      body: JSON.stringify(body)
    });
    if(!r.ok) throw new Error(`PUT ${binKey} failed: ${r.status}`);
    return true;
  } catch(e) {
    console.warn('[DB] PUT 실패 — localStorage에만 저장됨:', e.message);
    return false;
  }
}

// ============================================================
// DB 래퍼 — 읽기/쓰기 실패 시 localStorage로 자동 폴백
// ============================================================
const DB = {

  // ── 문의 ──
  async getInquiries() {
    const remote = await jbGet('inquiries');
    if(remote !== null && Array.isArray(remote)) {
      localStorage.setItem('mm_inquiries', JSON.stringify(remote));
      return remote;
    }
    try { return JSON.parse(localStorage.getItem('mm_inquiries') || '[]'); } catch { return []; }
  },

  async saveInquiry(record) {
    const list = await this.getInquiries();
    list.unshift(record);
    await jbPut('inquiries', list);
    localStorage.setItem('mm_inquiries', JSON.stringify(list));
  },

  async updateInquiries(list) {
    await jbPut('inquiries', list);
    localStorage.setItem('mm_inquiries', JSON.stringify(list));
  },

  // ── 프로젝트 ──
  async getProjects() {
    const remote = await jbGet('projects');
    if(remote !== null && Array.isArray(remote)) {
      localStorage.setItem('mm_projects', JSON.stringify(remote));
      return remote;
    }
    try { return JSON.parse(localStorage.getItem('mm_projects') || '[]'); } catch { return []; }
  },

  async saveProjects(list) {
    await jbPut('projects', list);
    localStorage.setItem('mm_projects', JSON.stringify(list));
  },

  // ── 기준값 통계 ──
  async getStats() {
    const remote = await jbGet('stats');
    const defaults = { pj_base: 0, pj_base_done: 0, pj_base_ing: 0, inq_base: 0 };
    if(remote !== null && typeof remote === 'object' && !Array.isArray(remote)) {
      const merged = { ...defaults, ...remote };
      localStorage.setItem('mm_stats', JSON.stringify(merged));
      return merged;
    }
    try {
      const cached = JSON.parse(localStorage.getItem('mm_stats') || '{}');
      return { ...defaults, ...cached };
    } catch { return defaults; }
  },

  async saveStats(stats) {
    await jbPut('stats', stats);
    localStorage.setItem('mm_stats', JSON.stringify(stats));
  },

  // ── 기준값 개별 getter (캐시에서 동기 읽기) ──
  _getCachedStats() {
    try { return JSON.parse(localStorage.getItem('mm_stats') || '{}'); } catch { return {}; }
  },
  _getStatVal(key) {
    const s = this._getCachedStats();
    return s[key] !== undefined ? parseInt(s[key]) : 0;
  },
  async _setStatVal(key, val) {
    const s = await this.getStats();
    s[key] = val;
    await this.saveStats(s);
  },

  getBaseCount() { return this._getStatVal('pj_base'); },
  getBaseDone()  { return this._getStatVal('pj_base_done'); },
  getBaseIng()   { return this._getStatVal('pj_base_ing'); },
  getBaseInq()   { return this._getStatVal('inq_base'); },
  async setBaseCount(n) { await this._setStatVal('pj_base', n); },
  async setBaseDone(n)  { await this._setStatVal('pj_base_done', n); },
  async setBaseIng(n)   { await this._setStatVal('pj_base_ing', n); },
  async setBaseInq(n)   { await this._setStatVal('inq_base', n); },

  // ── 초기 로딩 ──
  async init() {
    try {
      await Promise.all([
        this.getInquiries(),
        this.getProjects(),
        this.getStats(),
      ]);
      console.info('[DB] JSONBin 초기화 완료 ✓');
    } catch(e) {
      console.warn('[DB] 초기화 중 오류:', e.message);
    }
  }
};
