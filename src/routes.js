// src/routes.js
export const PAGES = [
    { slug: "",                title: "Home" },
    { slug: "thesis",          title: "Thesis" },
    { slug: "background",      title: "Background" },
    { slug: "reaction",        title: "Reaction" },
    { slug: "revolution",      title: "Revolution" },
    { slug: "impact-on-society", title: "Impact on society" },
    { slug: "research",        title: "Research" },
  ];
  
  // 도우미: 현재 slug 기준으로 이전/다음 페이지 찾기
  export function getNeighbors(slug) {
    const idx = PAGES.findIndex(p => p.slug === slug);
    const prev = idx > 0 ? PAGES[idx - 1] : null;
    const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;
    return { prev, next };
  }