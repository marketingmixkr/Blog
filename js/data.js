// ============================================================
// MarketingMix - Data Store
// ============================================================

const MM_DATA = {
  // ── 블로그 포스트 샘플 데이터 ──
  posts: [
    {
      id: 1,
      category: '공지사항',
      title: '마케팅믹스 개발자 포트폴리오 오픈 안내',
      summary: '공식 홈페이지 외, 개발자 블로그 겸 포트폴리오 사이트를 오픈했습니다.',
      content: '마케팅믹스 개발자 포트폴리오 사이트를 오픈했습니다.<br>프로그램/마케팅 자동화/챗봇/홈페이지/랜딩페이지/디자인 등,<br>다양한 포트폴리오와 서비스에 대한 소식을 공유 드릴 예정입니다.<p></p>많은 관심 부탁 드립니다.',
      date: '2025-01-01',
      tags: ['공지사항'],
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    }
  ],

  // ── 포트폴리오 샘플 데이터 ──
  portfolio: [
    {
      id: 1,
      name: '카페라(Cefera) - N사 카페 자동 추출',
      summary: 'N사 카페에서 게시판 기반 ID & EMail 자동 추출 프로그램<br>오랜 기간 문제 없이 운영/판매 중인 프로그램',
      categories: ['개인용', '업무용', '소프트웨어'],
      tags: ['개인용', '업무용', '소상공인','카페', '자동화', '라이선스'], 
      techStack: ['RSA 로그인, .netframework 4.8'],
      achievement: '짧은 시간에 선택한 게시판에서 데이터 추출 및 저장 제공',
      period: '2017.01 - 2026년 현재까지 (대략 9년)',
      price: '1PC / 10만원',
      purchasable: { available: true, type: ['영구'] },
      target: ['누구나'],
      thumbnail: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80',
      isDesign: false
    },
    {
      id: 2,
      name: '엔블(NBLES) - N사 블로그 서로 이웃 추가',
      summary: 'N사 블로그 서로 이웃 추가 프로그램<br>오랜 기간 문제 없이 운영/판매 중인 프로그램',
      categories: ['개인용', '업무용', '소프트웨어'],
      tags: ['개인용', '업무용', '소상공인','블로그', '자동화', '라이선스'], 
      techStack: ['RSA 로그인, .netframework 4.8'],
      achievement: '서로 이웃 추가 및 데이터 추출 및 저장 제공',
      period: '2016.10 - 2026년 현재까지 (대략 10년)',
      price: '1PC / 30만원',
      purchasable: { available: true, type: ['영구'] },
      target: ['누구나'],
      thumbnail: 'https://i.imgur.com/jIZU0Q0.png',
      isDesign: false
    },
    {
      id: 3,
      name: '마케팅믹스 블로그 스타일 랜딩페이지',
      summary: '지금 보고 계신 페이지',
      categories: ['업무용', '홈페이지', '랜딩페이지'],
      tags: ['개인용', '업무용', '소상공인','블로그', '홈페이지', '랜딩페이지', 'Telegram', '디자인'], 
      techStack: ['HTML', 'CSS', 'JavaScript'],
      achievement: '최대 하루면 작업할 수 있는 퀄리티',
      period: '2026.03 (20분)',
      price: '30만원 이상 / 금액 협의',
      purchasable: { available: true, type: ['협의'] },
      target: ['누구나'],
      thumbnail: 'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285',
      isDesign: false
    },
    {
      id: 4,
      name: '텔레그램 광고 차단 봇',
      summary: '실시간 필터링 0.1초 차단/삭제 봇',
      categories: ['챗봇'],
      tags: ['Telegram', '자동화', 'Webhook'],
      techStack: ['Telegram API'],
      achievement: '필터링 감지 후 0.1초 반응 속도로 광고 차단/삭제 제공',
      period: '2024.11 - 2026년 현재까지 (대략 2년)',
      price: '1개월/10만원',
      purchasable: { available: true, type: [] },
      target: ['누구나'],
      thumbnail: 'https://images.unsplash.com/photo-1654764450223-08d4e8a297ce?q=80',
      isDesign: false
    },
    {
      id: 5,
      name: '텔레그램 가격 모니터링 봇',
      summary: '특정 쇼핑몰 가격 모니터링 자동화 프로젝트',
      categories: ['챗봇'],
      tags: ['Telegram', '자동화', 'Webhook', '스케줄링'],
      techStack: ['Telegram API'],
      achievement: '가격 떨어짐과 동시에 신속한 결제 가능',
      period: '2024.07 - 2026년 현재까지 (대략 2년)',
      price: '50만원',
      purchasable: { available: true, type: ['영구'] },
      target: ['누구나'],
      thumbnail: 'https://images.unsplash.com/photo-1654764450223-08d4e8a297ce?q=80',
      isDesign: false
    },
    {
      id: 6,
      name: '텔레그램 자동 매매 & 트레이딩 봇',
      summary: '거래소 API 연동 프로젝트',
      categories: ['챗봇'],
      tags: ['Telegram', '자동화', 'Webhook'],
      techStack: ['Telegram API', '알고리즘 로직 및 보안 강화'],
      achievement: '매수/매도 자동 실행, 전략 적용, 실시간 알림 및 로그',
      period: '2020.01 - 2026년 현재까지 (대략 6년)',
      price: '70 ~ 150만원 / 금액 협의',
      purchasable: { available: true, type: ['영구'] },
      target: ['누구나'],
      thumbnail: 'https://images.unsplash.com/photo-1689732888407-310424e3a372?q=80',
      isDesign: false
    }
  ],

  // ── 문의 목록 (로컬 스토리지에서 관리) ──
  getInquiries() {
    try {
      return JSON.parse(localStorage.getItem('mm_inquiries') || '[]');
    } catch { return []; }
  },
  saveInquiry(data) {
    const list = this.getInquiries();
    list.unshift(data);
    localStorage.setItem('mm_inquiries', JSON.stringify(list));
  }
};

// 태그 색상 및 아이콘 맵
const TAG_CONFIG = {
  '개인용':    { color: '#6366f1', bg: '#eef2ff', icon: '👤' },
  '업무용':    { color: '#0ea5e9', bg: '#e0f2fe', icon: '💼' },
  '마케팅':    { color: '#f59e0b', bg: '#fffbeb', icon: '📣' },
  '자동화':    { color: '#10b981', bg: '#ecfdf5', icon: '⚡' },
  'SaaS':      { color: '#8b5cf6', bg: '#f5f3ff', icon: '☁️' },
  'Telegram':  { color: '#0088cc', bg: '#e8f4fd', icon: '✈️' },
  'Discord':   { color: '#5865f2', bg: '#eef0ff', icon: '🎮' },
  'KakaoTalk': { color: '#f9e000', bg: '#fffde7', textColor: '#333', icon: '💛' },
  '결제':      { color: '#ef4444', bg: '#fef2f2', icon: '💳' },
  'API 연동':  { color: '#06b6d4', bg: '#ecfeff', icon: '🔗' },
  'Webhook':   { color: '#64748b', bg: '#f8fafc', icon: '🪝' },
  '라이선스':  { color: '#d97706', bg: '#fef3c7', icon: '🔑' },
  '랜딩페이지':{ color: '#ec4899', bg: '#fdf2f8', icon: '🚀' },
  '홈페이지':  { color: '#14b8a6', bg: '#f0fdfa', icon: '🌐' },
  '디자인':    { color: '#f43f5e', bg: '#fff1f2', icon: '🎨' },
  '기타':      { color: '#94a3b8', bg: '#f8fafc', icon: '📌' }
};

function renderTag(tag) {
  const cfg = TAG_CONFIG[tag] || { color: '#94a3b8', bg: '#f8fafc', icon: '•' };
  const textColor = cfg.textColor || cfg.color;
  return `<span class="tag-badge" style="background:${cfg.bg};color:${textColor};border:1px solid ${cfg.color}30;">${cfg.icon} ${tag}</span>`;
}
