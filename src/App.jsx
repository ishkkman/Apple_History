// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Thesis from "./pages/Thesis";
import Background from "./pages/Background";
import Reaction from "./pages/Reaction";
import Revolution from "./pages/Revolution";
import ImpactOnSociety from "./pages/ImpactOnSociety";
import Research from "./pages/Research";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thesis" element={<Thesis />} />
      <Route path="/background" element={<Background />} />
      <Route path="/reaction" element={<Reaction />} />
      <Route path="/revolution" element={<Revolution />} />
      <Route path="/impact-on-society" element={<ImpactOnSociety />} />
      <Route path="/research" element={<Research />} />
      {/* 안전장치: 존재하지 않는 경로는 Home으로 */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
