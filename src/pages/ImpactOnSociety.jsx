// src/pages/ImpactOnSociety.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function ImpactOnSociety() {
  // 이전: revolution, 다음: research  (페이지 순서 유지)
  // 🔧 수정: 라우트 키를 'impact-on-society'로 지정
  const { prev, next } = getNeighbors("impact-on-society");

  // 공통 스타일 (기존 유지)
  const centerTitle = { textAlign: "center" };
  const centerBlock = {
    textAlign: "center",
    margin: "12px auto 0",
    maxWidth: 900,
    lineHeight: 1.7,
    fontSize: 18,
  };

  const twoCol = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    alignItems: "start",
    margin: "26px 0",
  };

  const fig = { textAlign: "center" };

  const imgBox = {
    width: "100%",
    height: 260,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    border: "none",
    outline: "none",
  };

  const img = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  };

  const cap = {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    wordBreak: "break-all",
    overflowWrap: "anywhere",
  };

  // 비디오 래퍼 (반응형 16:9)
  const videoFrameBox = {
    width: "100%",
    aspectRatio: "16 / 9",
    background: "#000",
  };

  return (
    <div className="page-wrap">
      <div className="page-inner">
        {/* 상단 중앙 제목 */}
        <h1 className="h1" style={centerTitle}>
          Impact on society
        </h1>

        {/* 중앙 문구 (요청한 새 텍스트로 교체) */}
        <p style={centerBlock}>
          &quot;why the iphone was not a reform?&quot;
          <br />
          <br />
          Even though the iPhone made society change, it was not considered as a
          reform. The word reform means gradual improvement within an original,
          such as adjusting laws or developing a product’s efficiency could be
          examples. The iPhone went over the existing system. It did not simply
          “improve” phones or computers. Instead of that, it replaced the system
          all together.
        </p>

        {/* 좌: 이미지1(+캡션)  /  우: 유튜브(+캡션) */}
        <section style={twoCol} aria-label="impact image and video">
          {/* left: image */}
          <figure style={fig}>
            <div style={imgBox}>
              <img
                src="/images/Impact_image1.png"
                alt="Impact on society image 1"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={cap}>
              citation : Image of Apple company logo, 2024, Los Angeles Times
            </figcaption>
          </figure>

          {/* right: youtube video */}
          <figure style={fig}>
            <div style={videoFrameBox}>
              <iframe
                title="impact video"
                src="https://www.youtube.com/embed/bUAx7GxOdWU"
                style={{ width: "100%", height: "100%", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figcaption style={cap}>
              citaation : Video of person using Social Media by scrolling, 2025, Youtube
            </figcaption>
          </figure>
        </section>

        {/* 가장 아래 문장 (요청한 새 텍스트로 교체) */}
        <p style={{ ...centerBlock, marginTop: 6 }}>
          The idea of a phone developed from being a device for calling and
          texting to a digital central that has multiple functions to everyday
          life. Reform implies continuity, but revolution implies replacement,
          and the iPhone’s impact was so huge that it is known as the beginning
          of a new technological period. Its creation fundamentally altered
          industries, communication, and even human behavior, so that something
          far exceeding the bounds of reform was possible.
        </p>

        {/* 좌하단/우하단 네비게이션 (이전: Revolution / 다음: Research) */}
        <PageNav prev={prev} next={next} />
      </div>
    </div>
  );
}
