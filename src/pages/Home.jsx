// src/pages/Home.jsx
import { Link } from "react-router-dom";
import HomeTopNav from "../components/HomeTopNav";
import { PAGES } from "../routes";

export default function Home() {
  const thesis = PAGES[1];

  // 이미지 박스/이미지/캡션 공통 스타일
  const boxStyle = {
    width: "100%",
    height: 360,            // 필요 시 320~420 등으로 조정
    background: "#fff",
    border: "none",         // 테두리 제거
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",   // 잘리지 않게
  };
  const capStyle = {
    position: "static",     // 기존 CSS에 absolute가 있어도 무시하고 아래에 고정
    marginTop: 6,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  };

  return (
    <div className="page-wrap home" style={{ background: "white" }}>
      <div className="page-inner" style={{ textAlign: "center" }}>
        {/* 타이틀 */}
        <h1 className="h1">The iPhone : A Reaction & Revolution</h1>

        {/* Home 전용 상단 네비(스크롤 고정) */}
        <HomeTopNav />

        {/* 본문 이미지 2장: 같은 크기 + 캡션을 각 이미지 바로 아래에 출력 */}
        <section className="grid-2" aria-label="intro images">
          <figure className="img-stack">
            <div className="img-box" style={boxStyle}>
              <img
                src="/images/Home_image1.png"
                alt="First iPhone"
                style={imgStyle}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <figcaption className="img-caption" style={capStyle}>
              citation : https://www.cnbc.com/2017/06/29/ <br />
              every-iphone-released-in-order.html
            </figcaption>
          </figure>

          <figure className="img-stack">
            <div className="img-box" style={boxStyle}>
              <img
                src="/images/Home_image2.png"
                alt="iPhone 17 Pro"
                style={imgStyle}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <figcaption className="img-caption" style={capStyle}>
              citation : https://www.apple.com/iphone-17-pro/
            </figcaption>
          </figure>
        </section>

        <div className="footer-line"></div>

        {/* 인용문 */}
        <blockquote
          className="lead home-quote"
          aria-label="steve jobs quote"
          style={{ textAlign: "center" }}
        >
          “An ipod,a phone, and an internet communicator... these<br />
          are not three seperate devices. This is one device,<br />
          and we are calling it iPhone”
          <br />
          <br />- Steve Jobs, 2007
        </blockquote>
         {/* 하단 정보 */}
         <div style={{ marginTop: 24 }}>
          <p>Youngseo Hwang, Ijun Lim</p>
          <p>sophomore group website</p>
          <p>Student Composed Words:</p>
          <p>Process Paper Words:</p>
          <p>Multi-media Length:</p>
        </div>

        {/* 오른쪽 하단: Thesis로 이동 버튼 */}
        <div className="nav-bottom" style={{ justifyContent: "flex-end" }}>
          <Link className="nav-btn" to={`/${thesis.slug}`}>
            <span>{thesis.title}</span><span>▶</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
