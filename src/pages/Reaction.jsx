// src/pages/Reaction.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function Reaction() {
  // 이전: Background, 다음: Revolution (페이지 순서 유지)
  const { prev, next } = getNeighbors("reaction");

  // 공통 스타일
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

        {/* 영상 아래 문단 (줄바꿈 명시, 중앙 정렬) */}
        <p style={centerBlock}>
          The iPhone was a reaction to the<br />
          technological incompetence of<br />
          the early 2000s. In his 2007<br />
          iPhone presentation, Jobs<br />
          pointed out this ineﬃciency,<br />
          introducing the iPhone as the
        </p>

        {/* 다음 문단 (중앙 정렬) */}
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
              citation :<br />
              Vhttps://unsplash.com/ko/s/%EC%82%AC%EC%A7%84/ipod,
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
              citation :<br />
              https://unsplash.com/ko/<br />
              Vhttps://unsplash.com/ko/s/%EC%82%AC%EC%A7%84/black-rotary-dial-phone-on-white-surface-8gWEAAXJjtI
            </figcaption>
          </figure>

          {/* arrow between 2 and 3 */}
          <div aria-hidden="true" style={arrow}>
            ▶
          </div>

          {/* image 3 (움짤 느낌 효과: .gifish) */}
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
            {/* 요청에 image3의 citation 표기는 없어서 생략 */}
          </figure>
        </section>

        {/* 하단 우측 정렬 문단 */}
        <div style={{ maxWidth: 900, margin: "10px auto 0" }}>
          <p style={{ textAlign: "right", lineHeight: 1.7, fontSize: 18 }}>
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
