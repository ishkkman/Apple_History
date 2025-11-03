// src/pages/Background.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function Background() {
  // 이전: thesis, 다음: reaction (순서 유지)
  const { prev, next } = getNeighbors("background");

  // 공통 스타일
  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    alignItems: "center",
    margin: "28px 0",
  };
  const imgBoxStyle = {
    width: "100%",
    height: 300,            // 두 이미지 동일 박스 높이
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    border: "none",
    outline: "none",
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",   // 잘리지 않게
    display: "block",
  };
  const captionStyle = {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  };
  const textStyle = {
    lineHeight: 1.7,
    fontSize: 18,
  };

  return (
    <div className="page-wrap">
      <div className="page-inner">
        {/* 상단 중앙 제목 */}
        <h1 className="h1" style={{ textAlign: "center" }}>background</h1>

        {/* 1행: (좌) 이미지1  (우) 텍스트 */}
        <section style={rowStyle} aria-label="before the iPhone">
          <figure>
            <div style={imgBoxStyle}>
              <img
                src="/images/Background_image1.png"
                alt="Background context image 1"
                style={imgStyle}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <figcaption style={captionStyle}>citation : </figcaption>
          </figure>

          <p style={textStyle}>
            Before the iPhone, several phones like PDAs<br />
            and BlackBerry were already rolled out, but they<br />
            were far from “smart.” They had small<br />
            keyboards, poor internet, and limited functions,<br />
            which made most people to rely on large<br />
            computers for onlineseperatelthough Apple was<br />
            not the first to make a phone, it was the first to<br />
            design a smartphone that combined the<br />
            functions of seperate devices.
          </p>
        </section>

        {/* 2행: (좌) 텍스트  (우) 이미지2 */}
        <section style={rowStyle} aria-label="in 2007 apple aimed to reinvent">
          <p style={textStyle}>
            In 2007, Apple aimed to “reinvent the<br />
            mobile phone.” Steve Jobs<br />
            introduced the iPhone as “a<br />
            widescreen iPod with touch controls,<br />
            a revolutionary mobile phone, and a<br />
            groundbreaking Internet<br />
            communicator.” Even in the<br />
            blackberry&apos;s oﬃcial announcement,<br />
            it is defined as a device for<br />
            ‘corporate customers and prosumers<br />
            who focus on communication and<br />
            productivity. His innovations made<br />
            advanced technology simple and<br />
            accessible for everyone.
          </p>

          <figure>
            <div style={imgBoxStyle}>
              <img
                src="/images/Background_image2.png"
                alt="Background context image 2"
                style={imgStyle}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <figcaption style={captionStyle}>citation : </figcaption>
          </figure>
        </section>

        {/* 좌하단/우하단 네비게이션 */}
        <PageNav prev={prev} next={next} />
      </div>
    </div>
  );
}
