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
    width: "min(560px, 90%)", // 필요하면 수치만 조정
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

  return (
    <div
      className="page-wrap"
      style={{ backgroundImage: "url(/images/Thesis_background_image.jpg)" }}
    >
      <div className="page-inner">
        <h1 className="h1">Thesis</h1>

        {/* 텍스트 위, 중앙에 표시하는 이미지 */}
        <div style={imgWrapStyle}>
          <img
            src="/images/Thesis_image2.png"
            alt="technology"
            style={imgStyle}
            onError={(e) => {
              // 이미지가 없을 때 레이아웃 깨짐 방지
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* 줄바꿈을 명시적으로 넣은 본문 텍스트 (가운데 정렬) */}
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
