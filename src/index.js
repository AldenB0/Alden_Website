import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Coverage from "./Pages/Projects/CoverageChecker";
import RePicturePro from "./Pages/Projects/RePicturePro";
import OutsidePro from "./Pages/Projects/OutsidePro";
import Playground from "./Pages/Playground";

console.log(
  `%c ____________
  < v1.0.2 >
 ------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
  "font-family:monospace"
);

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Dev-only animation sandbox: localhost:3000/#/playground */}
          {process.env.NODE_ENV === "development" && (
            <Route path="playground" element={<Playground />} />
          )}

          <Route
            path="About"
            element={
              <ScrollToTop>
                <About />
              </ScrollToTop>
            }
          />
          <Route
            path="Coverage_CaseStudy"
            element={
              <ScrollToTop>
                <Coverage />
              </ScrollToTop>
            }
          />
          <Route
            path="RePicture_CaseStudy"
            element={
              <ScrollToTop>
                <RePicturePro />
              </ScrollToTop>
            }
          />
          <Route
            path="Outside_CaseStudy"
            element={
              <ScrollToTop>
                <OutsidePro />
              </ScrollToTop>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
