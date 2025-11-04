// src/pages/Thesis.jsx
import PageNav from "../components/PageNav";
import { getNeighbors } from "../routes";

export default function Thesis() {
  // 이전: Home, 다음: Background (프로젝트 전체 순서 유지)
  const { prev, next } = getNeighbors("thesis");

  // 중앙 이미지 박스/이미지 스타일
  const imgWrapStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "24px 0 8px",
  };
  const imgStyle = {
    width: "min(560px, 90%)",
    height: "auto",
    objectFit: "contain",
    display: "block",
  };

  // 본문 문단 스타일(가운데 정렬 + 적당한 폭)
  const textStyle = {
    textAlign: "center",
    margin: "16px auto 0",
    maxWidth: "900px",
    lineHeight: 1.6,
    fontSize: "18px",
  };

  // 캡션(인용) 스타일
  const captionStyle = {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  };

  // figure 가운데 정렬 컨테이너
  const figureWrap = {
    display: "flex",
    justifyContent: "center",
    margin: "18px 0 0",
  };

  return (
    <div
      className="page-wrap"
      style={{ backgroundImage: "url(/images/Thesis_background_image.jpg)" }}
    >
      <div className="page-inner">
        <h1 className="h1">Thesis</h1>

        {/* 상단 중앙 이미지 (기존 유지: Thesis_image2.png) */}
        <div style={imgWrapStyle}>
          <img
            src="/images/Thesis_image2.png"
            alt="technology"
            style={imgStyle}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Thesis_image1.png + 바로 아래 캡션 */}
        <figure style={figureWrap}>
          <div>
            <img
              src="/images/Thesis_image1.png"
              alt="History of Technology Timeline"
              style={imgStyle}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <figcaption style={captionStyle}>
              citation : Image of “History of Technology Timeline”, 2025, Encyclopaedia Britannica
            </figcaption>
          </div>
        </figure>

        {/* 캡션 아래에 본문 4줄 출력 (요청대로 위치 변경) */}
        <p className="lead" style={textStyle}>
          Apple&apos;s invention of the iPhone served as a turning<br />
          point by allowing people to connect with the world in<br />
          an instant, marking a powerful moment of revolution<br />
          and reaction in technological history
        </p>

        {/* 좌하단: 이전(Home) / 우하단: 다음(Background) */}
        <PageNav prev={prev} next={next} />
      </div>
    </div>
  );
}
