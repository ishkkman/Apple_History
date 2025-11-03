// src/components/HomeTopNav.jsx
import { Link } from "react-router-dom";
import { PAGES } from "../routes";

export default function HomeTopNav() {
  // Home을 제외한 나머지 페이지 텍스트 탭
  const tabs = PAGES; // [Thesis, Background, ... Research]
  return (
    <nav className="top-nav" aria-label="Home top navigation">
      {tabs.map(p => {
        const to = p.slug ? `/${p.slug}` : "/"; // Home은 '/'
        return (
            <Link key={p.slug || "home"} to={to}>
        {p.title}
        </Link>
  );
})}
    </nav>
  );
}
