// src/pages/Revolution.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function Revolution() {
  // 이전: reaction, 다음: impact (순서 유지)
  const { prev, next } = getNeighbors("revolution");

  // 공통 레이아웃 스타일
  const row2col = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    alignItems: "center",
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
  const img = { width: "100%", height: "100%", objectFit: "contain", display: "block" };
  const cap = {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    wordBreak: "break-all",
    overflowWrap: "anywhere",
  };
  const centerText = {
    textAlign: "center",
    margin: "12px auto 0",
    maxWidth: 900,
    lineHeight: 1.7,
    fontSize: 18,
  };
  const leftText = { lineHeight: 1.7, fontSize: 18 };
  const rightText = { lineHeight: 1.7, fontSize: 18, textAlign: "left" };

  return (
    <div className="page-wrap">
      <div className="page-inner">
        {/* 상단: 제목(좌측~중앙 사이) + 우측 이미지1 */}
        <section style={row2col} aria-label="revolution header">
          <h1
            className="h1"
            style={{
              justifySelf: "center", // 중앙 쪽으로
              marginRight: "12%",
            }}
          >
            revolution
          </h1>

          <figure style={fig}>
            <div style={imgBox}>
              <img
                src="/images/Revolution_image1.png"
                alt="Steve Jobs holding the iPhone"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={cap}>
              cication : https://www.cbc.ca/radio/day6/episode-343-the-iphone-s-secret-history-prince-s-<br />
              legacy-sustainable-weed-farming-and-more-1.4173019/the-iphone-s-secret-history-<br />
              how-steve-jobs-went-from-rejecting-to-embracing-the-future-1.4173022
            </figcaption>
          </figure>
        </section>

        {/* 중앙 정렬 본문 */}
        <p style={centerText}>
          The creation of the iPhone became a revolution that changed how<br />
          people live and communicate. It not only improved technology but also<br />
          transformed human interaction. The 2007 launch, described by<br />
          History.com as “the beginning of a new era of mobile computing,”<br />
          marked a turning point in how people communicate. People could now<br />
          access the internet, communicate, and create instantly from their<br />
          pockets, turning communication from inconvenient to continuous and<br />
          global.
        </p>

        {/* 이미지2(좌) + 텍스트(우) */}
        <section style={row2col} aria-label="valcanis note">
          <figure style={fig}>
            <div style={imgBox}>
              <img
                src="/images/Revolution_image2.png"
                alt="Twitter to X logo change"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={cap}>
              citation : https://www.digidop.com/<br />
              blog/twitter-x-new-identity-<br />
              logo-challenges-elon-musk
            </figcaption>
          </figure>

          <p style={{ ...rightText, textAlign: "center", fontWeight: 600 }}>
            Media scholar Tom Valcanis writes<br />
            that…
          </p>
        </section>

        {/* 텍스트(좌) + 이미지3(우) */}
        <section style={row2col} aria-label="iran protests">
          <p style={leftText}>
            This transformation appeared clearly during the<br />
            2009 Iranian presidential election protests. When<br />
            the government banned foreign journalists,<br />
            citizens used iPhones and other smartphones to<br />
            film, take photos, and post real-time updates on<br />
            Twitter. This situation demonstrates how the<br />
            iPhone empowered the average folk to break<br />
            restriction and express the truth directly to the<br />
            world
          </p>

          <figure style={fig}>
            <div style={imgBox}>
              <img
                src="/images/Revolution_image3.png"
                alt="Protesters with smartphones"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={cap}>
              citation : https://www.nbcnews.com/news/amp/wbna31238321
            </figcaption>
          </figure>
        </section>

        {/* 이미지4 (우측에만 배치) */}
        <section style={{ ...row2col }} aria-label="extra reference">
          <div /> {/* 좌측 여백 */}
          <figure style={fig}>
            <div style={imgBox}>
              <img
                src="/images/Revolution_image4.png"
                alt="Reference article capture"
                style={img}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <figcaption style={cap}>
              citation : https://<br />
              foreignpolicyblogs.<br />
              com/2012/06/12/<br />
              solidarity-irans-<br />
              green-revolution/<br />
              amp/
            </figcaption>
          </figure>
        </section>

        {/* 마지막 행: 좌측 텍스트 vs 우측 텍스트 (수직선 구분) */}
        <section
          aria-label="bottom texts"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2px 1fr", // 좌 | 수직선 | 우
            gap: "18px",
            alignItems: "stretch",
            margin: "28px 0",
          }}
        >
          <div style={leftText}>
            communication is growing so fast<br />
            as to be in fact immeasurable,<br />
            making human consciousness<br />
            something other than what<br />
            consciousness used to be.”<br />
            <br />- Walter ong
          </div>

          <div style={{ background: "#222" }} aria-hidden="true" />

          <div style={rightText}>
            Valcanis concludes that the iPhone ushered in “a new age of information” and
            cites Walter Ong’s line that “communication is growing so fast as to be in fact
            immeasurable, making human consciousness something other than what
            consciousness used to be.” This is the way that the iPhone shifted the pace
            of how people think and how people relate. And by moving them from
            newspaper or television feeds to instantaneous information accessibility or
            sharing, their ability to respond to any source of information was now also
            real, immediate. The iPhone went from being a symbol of innovation to a
            reflection of how technology can change a culture, identity, and how people
            experience the world.
          </div>
        </section>

        {/* 좌하단/우하단 네비 */}
        <PageNav prev={prev} next={next} />
      </div>
    </div>
  );
}
