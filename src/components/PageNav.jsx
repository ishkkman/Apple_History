// src/components/PageNav.jsx
import { Link } from "react-router-dom";

export default function PageNav({ prev, next }) {
  return (
    <div className="nav-bottom">
      <div>
        {prev && (
          <Link className="nav-btn" to={`/${prev.slug}`}>
            <span>◀</span><span>{prev.title}</span>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link className="nav-btn" to={`/${next.slug}`}>
            <span>{next.title}</span><span>▶</span>
          </Link>
        )}
      </div>
    </div>
  );
}
