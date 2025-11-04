// src/pages/Reaction.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function Reaction() {
  // 이전: Background, 다음: Revolution (페이지 순서 유지)
  const { prev, next } = getNeighbors("reaction");

  // === 기존 스타일 그대로 유지 ===
  const centerBlock = {
    textAlign: "center",
    margin: "12px auto 0",
    maxWidth: 900,
    lineHeight: 1.7,
    fontSize: 18,
  };

  const videoWrap = {
    display: "flex",
    justifyContent: "center",
    margin: "18px 0 10px",
  };

  const frameBox = {
    width: "min(900px, 95%)",
    aspectRatio: "16 / 9",
    background: "#000",
  };

  const gridImgs = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr auto 1fr", // img1 | img2 | arrow | img3
    columnGap: "20px",
    alignItems: "center",
    margin: "26px 0",
  };

  const fig = { textAlign: "center" };
  const figTitle = { fontWeight: 600, marginBottom: 6 };

  const box = {
    width: "100%",
    height: 260, // 세 이미지 동일 박스 높이
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
    objectFit: "contain", // 잘리지 않게
    display: "block",
  };

  const caption = {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    wordBreak: "break-all",
    overflowWrap: "anywhere",
  };

  const arrow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 38,
    userSelect: "none",
  };

  // === 추가: 박스용 경량 래퍼(레이아웃 영향 최소화) ===
  const quoteBoxRow = {
    display: "flex",
    justifyContent: "center",
    marginTop: 12, // 기존 centerBlock의 top margin 유지
  };
  const quoteBox = {
    border: "2px solid #000",
    background: "transparent",
    padding: "16px 24px",
  };

  return (
    <div className="page-wrap">
      <div className="page-inner">
        {/* 상단 중앙 제목 */}
        <h1 className="h1" style={{ textAlign: "center" }}>
          Reaction
        </h1>

        {/* 유튜브 플레이어 (반응형) */}
        <div style={videoWrap}>
          <div style={frameBox}>
            <iframe
              title="Reaction video"
              src="https://www.youtube.com/embed/26RQLfgi0DU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>

         {/* ✅ 추가: 유튜브 영상 바로 아래 citation */}
         <p style={{ ...caption, marginTop: 8 }}>
          citation : Video of Steve Jobs introducing iPhone <br />
        </p>

        {/* 영상 아래 문단 -> 사각형 테두리 박스(배경 투명) */}
        <div style={quoteBoxRow}>
          <div style={quoteBox}>
            <p style={{ ...centerBlock, margin: 0 }}>
              The iPhone was a reaction to the<br />
              technological incompetence of<br />
              the early 2000s. In his 2007<br />
              iPhone presentation, Jobs<br />
              pointed out this ineﬃciency,<br />
              introducing the iPhone as the solution.
            </p>
          </div>
        </div>

        {/* 다음 문단 (중앙 정렬) - 기존 유지 */}
        <p style={centerBlock}>
          In a 2007 interview with CNBC, Steve Jobs explained<br />
          that his goal was not simply adding more features,<br />
          but to create a simpler, human-based device. He<br />
          discussed that Apple is aiming to create a phone<br />
          “that works like magic,”
        </p>

        {/* 이미지 3장: 1, 2, (화살표), 3 */}
        <section style={gridImgs} aria-label="ipod phone iphone trio">
          {/* image 1 */}
          <figure style={fig}>
            <div style={figTitle}>An ipod</div>
            <div style={box}>
              <img
                src="/images/Reaction_image1.png"
                alt="iPod"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={caption}>
              citation : Image of an iPod, 2023, Unsplash
            </figcaption>
          </figure>

          {/* image 2 */}
          <figure style={fig}>
            <div style={figTitle}>A phone</div>
            <div style={box}>
              <img
                src="/images/Reaction_image2.png"
                alt="A phone"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={caption}>
              citation : Image of a black rotary-dial phone on white surface, 2018, Unsplash
            </figcaption>
          </figure>

          {/* arrow between 2 and 3 */}
          <div aria-hidden="true" style={arrow}>
            ▶
          </div>

          {/* image 3 (움짤 느낌 효과: .gifish 유지) */}
          <figure style={fig}>
            <div style={figTitle}>iphone</div>
            <div className="gifish" style={box}>
              <img
                src="/images/Reaction_image3.png"
                alt="iPhone"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={caption}>
              citation : Image of the evolution of the iPhone, 2014, TIME
            </figcaption>
          </figure>
        </section>

        {/* 하단 문단: 중앙 정렬로 변경 (기존 크기·여백 유지) */}
        <div style={{ maxWidth: 900, margin: "10px auto 0" }}>
          <p style={{ textAlign: "center", lineHeight: 1.7, fontSize: 18 }}>
            which can reduce<br />
            complexity that had been indicated by the diﬃculties<br />
            of earlier devices. The iPhone’s multitouch interface,<br />
            light design, and intuitive user experience replaced<br />
            complex buttons and complicated systems with a<br />
            user-friendly environment. By designing the iPhone,<br />
            Apple responded to users&apos; discomfort with intricate<br />
            technology and tried to make life easier through
          </p>
        </div>

        {/* 좌하단/우하단 네비게이션 */}
        <PageNav prev={prev} next={next} />
      </div>
    </div>
  );
}
