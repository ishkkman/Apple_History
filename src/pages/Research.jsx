// src/pages/Research.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function Research() {
  // 이전 페이지는 impact, 다음은 없음(마지막 페이지)
  const { prev } = getNeighbors("research");

  // 공통 스타일
  const heroWrap = {
    maxWidth: 1100,
    margin: "0 auto 12px",
    textAlign: "center",
  };
  const heroImg = { width: "100%", height: "auto", display: "block" };

  const twoCol = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    alignItems: "start",
    margin: "28px 0",
  };

  const sectionTitle = {
    textAlign: "center",
    fontWeight: 600,
    marginBottom: 8,
    fontSize: 18,
  };

  const fig = { textAlign: "center" };

  // 논문 캡처 이미지를 올릴 검정 배경 박스
  const docStage = {
    width: "100%",
    height: 340,
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  };

  const docImg = {
    width: "88%",
    height: "88%",
    objectFit: "contain",
    display: "block",
    boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
  };

  const caption = {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  };

  const footerText = {
    textAlign: "center",
    lineHeight: 1.9,
    marginTop: 18,
    color: "#5a4d3f",
  };

  return (
    <div className="page-wrap">
      <div className="page-inner">
        {/* 상단 히어로 이미지(중앙 정렬) + citation */}
        <figure style={heroWrap}>
          <img
            src="/images/Research_image1.png"
            alt="Research hero"
            style={heroImg}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <figcaption style={caption}>citation :</figcaption>
        </figure>

        {/* 좌: Process Paper  /  우: Annotated Bibliography */}
        <section style={twoCol} aria-label="process paper and annotated bibliography">
          {/* Left: Process Paper */}
          <div>
            <div style={sectionTitle}>Process Paper</div>
            <figure style={fig}>
              <div style={docStage}>
                <img
                  src="/images/Research_image2.png"
                  alt="Process paper document"
                  style={docImg}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              {/* 좌측 이미지는 citation 출력 없음 (요청 반영) */}
            </figure>
          </div>

          {/* Right: Annotated Bibliography */}
          <div>
            <div style={sectionTitle}>Annotated Bibliography</div>
            <figure style={fig}>
              <div style={docStage}>
                <img
                  src="/images/Research_image3.png"
                  alt="Annotated bibliography document"
                  style={docImg}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              {/* 우측 이미지도 citation 요구 없음 */}
            </figure>
          </div>
        </section>

        {/* 하단 중앙 정보 텍스트 */}
        <div style={footerText}>
          Amy Du, Antonia Kwan, and Brietta Yi<br />
          Senior Division<br />
          Group Website<br />
          Student Composed Words: 1199<br />
          Process Paper Words: 500<br />
          Media Length: 1:40
        </div>

        {/* 마지막 페이지: 이전 버튼만 표시 */}
        <PageNav prev={prev} />
      </div>
    </div>
  );
}
