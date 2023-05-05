import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Coverage from "./Pages/Projects/CoverageChecker";
import RePicturePro from "./Pages/Projects/RePicturePro";
import VFCPro from "./Pages/Projects/VFCProg";
import OutsidePro from "./Pages/Projects/OutsidePro";

export default function App() {
  return (
    <Router basename="/Alden-Website/#">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Coverage_CaseStudy" element={<Coverage />} />
          <Route path="RePicture_CaseStudy" element={<RePicturePro />} />
          <Route path="VFC_CaseStudy" element={<VFCPro />} />
          <Route path="Outside_CaseStudy" element={<OutsidePro />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
