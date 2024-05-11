import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { SectionFAQ } from "./Sections/SectionFAQ";
import { SectionFooter } from "./Sections/SectionFooter";
import CanvasContainer from "./CanvasContainer";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title animated-text">FENNEC</h1>
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 0.5,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <Router>
      <>
        <LoadingScreen />

        <div className="experience" >
          <CanvasContainer />
        </div>

        <div className="nav">
          <div className="left-content">
            <img className="left-content-image" src="/ref.png" />
          </div>
          <div className="right-content">
            <Link to="/" className="small-text navigation-text white">
              <h1 className="small-text navigation-text white" >Home</h1>
            </Link>
            {/* <Link to="/faq" className="small-text navigation-text white">
              <h1 className="small-text navigation-text white" >FAQ</h1>
            </Link> */}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Section1 />} />
          {/* <Route path="/faq" element={<SectionFAQ />} /> */}
        </Routes>

        <SectionFooter />
      </>
    </Router>
  );
}

export default App;