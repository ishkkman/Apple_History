// src/pages/Research.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function Research() {
  // 이전: Impact on society, 다음: Home (프로젝트 순서 기준)
  const { prev, next } = getNeighbors("research");

  // 공통 스타일
  const h1Center = { textAlign: "center" };

  const blockTitle = {
    textAlign: "center",
    fontSize: 22,
    fontWeight: 700,
    margin: "24px 0 12px",
  };

  // PDF 래퍼/프레임: 중앙 정렬 + 좌우폭 최대(페이지 내부 폭 기준)
  const pdfWrap = {
    display: "flex",
    justifyContent: "center",
    margin: "8px 0 28px",
  };
  const pdfFrame = {
    width: "min(1200px, 95vw)",
    height: "80vh", // 세로 스크롤 여유
    border: "1px solid #e5e5e5",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    background: "#fff",
  };

  const footerText = {
    textAlign: "center",
    lineHeight: 1.7,
    marginTop: 8,
    marginBottom: 8,
  };

  return (
    <div className="page-wrap">
      <div className="page-inner">
        {/* 상단 제목 (이미지 제거) */}
        <h1 className="h1" style={h1Center}>
          Research
        </h1>

        {/* 1) Process Paper - PDF viewer */}
        <div style={blockTitle}>Process Paper</div>
        <div style={pdfWrap}>
          <div style={pdfFrame}>
            <object
              data="/images/Research_paper1.pdf#view=FitH"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p style={{ textAlign: "center", padding: 16 }}>
                PDF viewer를 표시할 수 없습니다.{" "}
                <a href="/images/Research_paper1.pdf" target="_blank" rel="noreferrer">
                  파일 열기
                </a>
              </p>
            </object>
          </div>
        </div>

        {/* 2) Annotated Bibliography - PDF viewer */}
        <div style={blockTitle}>Annotated Bibliography</div>
        <div style={pdfWrap}>
          <div style={pdfFrame}>
            <object
              data="/images/Research_paper2.pdf#view=FitH"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p style={{ textAlign: "center", padding: 16 }}>
                PDF viewer를 표시할 수 없습니다.{" "}
                <a href="/images/Research_paper2.pdf" target="_blank" rel="noreferrer">
                  파일 열기
                </a>
              </p>
            </object>
          </div>
        </div>

        {/* 하단 소개 문구 (교체) */}
        <p style={footerText}>
          Youngseo Hwang, Ijun Lim
          <br />
          sophomore group website
          <br />
          Student Composed Words: 757
          <br />
          Process Paper Words: 1560
          <br />
          Multi-media Length: 42
        </p>

        {/* 좌하단/우하단 네비게이션 (이전=Impact on society, 다음=Home) */}
        <PageNav prev={prev} next={next} />
      </div>
    </div>
  );
}
