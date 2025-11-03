// src/pages/ImpactOnSociety.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function ImpactOnSociety() {
  // 이전: revolution, 다음: research  (페이지 순서 유지)
  const { prev, next } = getNeighbors("impact");

  // 공통 스타일
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
          impact on society
        </h1>

        {/* 중앙 문구 2줄 */}
        <p style={centerBlock}>
          &quot;why the iphorewas nota reform ?&quot;
          <br />
          Even though.
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
              citation : https://www.latimes.com/entertainment-arts/
              <br />
              business/story/2024-10-30/how-apple-plans-to-
              <br />
              explain-new-ai-tools-to-customers
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
              citaation : https://www.youtube.com/watch?v=bUAx7GxOdWU
            </figcaption>
          </figure>
        </section>

        {/* 가장 아래 문장 */}
        <p style={{ ...centerBlock, marginTop: 6 }}>
          The idea of phone developed from being a device...
        </p>

        {/* 좌하단/우하단 네비게이션 (이전: Revolution / 다음: Research) */}
        <PageNav prev={prev} next={next} />
      </div>
    </div>
  );
}
