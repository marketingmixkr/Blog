// ============================================================
// MarketingMix - Data Store
// ============================================================

const MM_DATA = {
  // ── 블로그 포스트 샘플 데이터 ──
  posts: [
    {
      id: 1,
      category: '공지사항',
      title: 'MarketingMix 사이트 오픈 안내',
      summary: '마케팅믹스 공식 사이트가 오픈되었습니다. 앞으로 다양한 프로젝트와 소식을 공유할 예정입니다.',
      content: 'MarketingMix 공식 사이트가 드디어 오픈했습니다! 앞으로 다양한 마케팅 자동화, 챗봇 개발, 홈페이지 제작 프로젝트 사례와 유용한 정보들을 공유해 나갈 예정입니다. 많은 관심 부탁드립니다.',
      date: '2025-03-01',
      tags: ['공지'],
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      views: 128
    },
    {
      id: 2,
      category: '업데이트',
      title: '포트폴리오 카테고리 분류 업데이트',
      summary: '포트폴리오 페이지에 상세 카테고리와 태그 필터 기능이 추가되었습니다.',
      content: '이번 업데이트로 포트폴리오 페이지에서 카테고리와 태그를 이용해 원하는 프로젝트를 더욱 쉽게 찾을 수 있게 되었습니다. 중복 선택도 가능하니 편하게 이용해 보세요.',
      date: '2025-03-05',
      tags: ['업데이트', '기능'],
      thumbnail: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80',
      views: 84
    },
    {
      id: 3,
      category: '새소식',
      title: '텔레그램 자동화 봇 신규 프로젝트 완료',
      summary: '소상공인을 위한 텔레그램 주문 접수 자동화 봇 프로젝트가 성공적으로 완료되었습니다.',
      content: '이번 프로젝트는 소상공인 고객을 위한 텔레그램 기반 주문 접수 자동화 봇입니다. 주문 접수부터 결제 안내, 배송 알림까지 모두 자동화되어 업무 효율이 크게 향상되었습니다.',
      date: '2025-03-08',
      tags: ['텔레그램', '자동화', '챗봇'],
      thumbnail: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80',
      views: 213
    },
    {
      id: 4,
      category: '사용 가이드',
      title: '챗봇 사용 가이드 - 기본 명령어 안내',
      summary: '마케팅믹스에서 개발한 챗봇의 기본 명령어 사용법을 안내합니다.',
      content: '챗봇을 처음 사용하시는 분들을 위해 기본 명령어 사용법을 정리했습니다. /start로 시작하고, /help로 도움말을 확인하세요. 자세한 내용은 본문을 참고해 주세요.',
      date: '2025-03-10',
      tags: ['가이드', '챗봇'],
      thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
      views: 156
    },
    {
      id: 5,
      category: '프로젝트',
      title: '1인 마케터를 위한 올인원 마케팅 대시보드 개발기',
      summary: '복잡한 마케팅 데이터를 한눈에 볼 수 있는 대시보드 개발 프로젝트 후기입니다.',
      content: '1인 마케터분들이 여러 채널의 데이터를 통합해서 볼 수 있는 대시보드를 개발했습니다. 구글 애널리틱스, 네이버 검색광고, 카카오 모먼트 등의 데이터를 한 곳에서 확인할 수 있습니다.',
      date: '2025-03-12',
      tags: ['마케팅', '대시보드', 'API'],
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      views: 302
    },
    {
      id: 6,
      category: '프로젝트',
      title: '랜딩페이지 A/B 테스트 결과 공유',
      summary: '다양한 랜딩페이지 디자인 요소를 A/B 테스트한 결과를 공유합니다.',
      content: '3개월간 진행한 랜딩페이지 A/B 테스트 결과를 공유합니다. CTA 버튼 색상, 헤드라인 문구, 이미지 배치 등 다양한 요소를 테스트해서 전환율 최적화에 성공했습니다.',
      date: '2025-03-15',
      tags: ['랜딩페이지', '마케팅'],
      thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
      views: 187
    }
  ],

  // ── 포트폴리오 샘플 데이터 ──
  portfolio: [
    {
      id: 1,
      name: '스마트 주문 관리 봇',
      summary: '텔레그램 기반 소상공인 주문 자동화 솔루션',
      categories: ['챗봇', '업무용'],
      tags: ['Telegram', '자동화', '결제', '소상공인'],
      techStack: ['Python', 'Telegram Bot API', 'SQLite', 'Webhook'],
      achievement: '주문 처리 시간 80% 단축, 월 200+ 주문 자동화',
      period: '2025.01 - 2025.02 (2개월)',
      price: '120만원',
      purchasable: { available: true, type: ['영구'] },
      target: ['소상공인', '1인 마케터'],
      thumbnail: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80',
      isDesign: false
    },
    {
      id: 2,
      name: 'SaaS 구독 관리 플랫폼',
      summary: '라이선스 발급 및 구독 갱신 자동화 웹서비스',
      categories: ['소프트웨어', '업무용'],
      tags: ['SaaS', '라이선스', '결제', 'API 연동', '자동화'],
      techStack: ['Node.js', 'Vue.js', 'MySQL', 'Stripe API'],
      achievement: '구독 관리 공수 90% 절감, 라이선스 위변조 0건',
      period: '2024.10 - 2024.12 (3개월)',
      price: '350만원',
      purchasable: { available: true, type: ['월간', '연간'] },
      target: ['회사', '프리랜서'],
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      isDesign: false
    },
    {
      id: 3,
      name: '마케터 포트폴리오 랜딩페이지',
      summary: '1인 마케터를 위한 고전환율 랜딩페이지 템플릿',
      categories: ['랜딩페이지', '디자인'],
      tags: ['랜딩페이지', '마케팅', '디자인', '1인 마케터'],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      achievement: '전환율 평균 12.3% (업계 평균 대비 3배)',
      period: '2025.02 (1개월)',
      price: '45만원',
      purchasable: { available: true, type: ['영구'] },
      target: ['1인 마케터', '프리랜서'],
      thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
      isDesign: false
    },
    {
      id: 4,
      name: '카카오채널 CS 자동화 봇',
      summary: '카카오톡 비즈니스 채널 고객응대 자동화 챗봇',
      categories: ['챗봇', '업무용'],
      tags: ['KakaoTalk', '자동화', 'Webhook', '업무용'],
      techStack: ['Python', 'KakaoTalk API', 'FastAPI', 'Redis'],
      achievement: 'CS 응답 시간 평균 2분 → 즉시, 야간 문의 100% 커버',
      period: '2024.11 - 2025.01 (3개월)',
      price: '280만원',
      purchasable: { available: false, type: [] },
      target: ['회사', '소상공인'],
      thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
      isDesign: false
    },
    {
      id: 5,
      name: '브랜드 카페 디자인 패키지',
      summary: '네이버 카페 전용 프리미엄 UI 디자인 템플릿',
      categories: ['디자인'],
      tags: ['디자인', '홈페이지', '개인용'],
      designType: ['카페'],
      purchasable: { available: true, customizable: true, negotiable: false },
      thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80',
      isDesign: true,
      summary2: '커스텀 가능 · 5가지 컬러 버전 제공'
    },
    {
      id: 6,
      name: '디스코드 커뮤니티 관리 봇',
      summary: '게임 · IT 커뮤니티를 위한 올인원 디스코드 봇',
      categories: ['챗봇', '개인용'],
      tags: ['Discord', '자동화', '개인용', 'API 연동'],
      techStack: ['Python', 'Discord.py', 'PostgreSQL'],
      achievement: '5개 서버 운영 중, 총 DAU 1,200+',
      period: '2024.09 - 2024.10 (2개월)',
      price: '85만원',
      purchasable: { available: true, type: ['월간', '영구'] },
      target: ['누구나', '개인'],
      thumbnail: 'https://images.unsplash.com/photo-1614680376408-16afefa3332b?w=600&q=80',
      isDesign: false
    },
    {
      id: 7,
      name: '프리랜서 업무 자동화 툴킷',
      summary: '견적서·계약서·인보이스 자동 생성 개인용 SaaS',
      categories: ['소프트웨어', '개인용'],
      tags: ['개인용', '자동화', 'SaaS', '프리랜서'],
      techStack: ['React', 'Node.js', 'PDF.js', 'Notion API'],
      achievement: '문서 작성 시간 70% 절감, 월 사용자 50+',
      period: '2025.01 - 2025.03 (3개월)',
      price: '월 9,900원',
      purchasable: { available: true, type: ['월간', '연간'] },
      target: ['프리랜서', '1인 마케터'],
      thumbnail: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80',
      isDesign: false
    },
    {
      id: 8,
      name: '스타트업 기업 홈페이지',
      summary: '브랜딩 중심의 반응형 기업 홈페이지 제작',
      categories: ['홈페이지'],
      tags: ['홈페이지', '마케팅', '디자인'],
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      achievement: '론칭 후 월 방문자 3,000+ 달성',
      period: '2024.12 - 2025.01 (2개월)',
      price: '200만원',
      purchasable: { available: false, type: [] },
      target: ['회사'],
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
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
