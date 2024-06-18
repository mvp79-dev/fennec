import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { SectionFooter } from "./Sections/SectionFooter";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";
import { Section4 } from "./Sections/Section4";
import { SectionJoin } from "./Sections/SectionJoin";
import { Section5 } from "./Sections/Section5";

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

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const sectionJoinRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.section === "section1" || entry.target.dataset.section === "section2") {
            setCurrentSection(entry.target.dataset.section);
          } else if (entry.target.dataset.section === "sectionjoin") {
            setCurrentSection("sectionjoin");
          } else {
            setCurrentSection("explore");
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);
    if (sectionJoinRef.current) observer.observe(sectionJoinRef.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
      if (section5Ref.current) observer.unobserve(section5Ref.current);
      if (sectionJoinRef.current) observer.unobserve(sectionJoinRef.current);
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Ref is null:', ref);
    }
  };

  return (
    <>
      <LoadingScreen />

      <div className="nav">
        <div className="right-content">
          <h1 className={`small-text navigation-text ${currentSection === 'section1' ? 'gold' : 'grey'}`} onClick={() => scrollToSection(section1Ref)}>Home</h1>
          <h1 className={`small-text navigation-text ${currentSection === 'section2' ? 'gold' : 'grey'}`} onClick={() => scrollToSection(section2Ref)}>Why</h1>
          <h1 className={`small-text navigation-text ${currentSection === 'explore' ? 'gold' : 'grey'}`} onClick={() => scrollToSection(section3Ref)}>Explore</h1>
          <h1 className={`small-text navigation-text ${currentSection === 'sectionjoin' ? 'gold' : 'grey'}`} onClick={() => scrollToSection(sectionJoinRef)}>Sign Up</h1>
        </div>
      </div>

      <div ref={section1Ref} data-section="section1">
        <Section1 />
      </div>
      <div ref={section2Ref} data-section="section2">
        <Section2 />
      </div>
      <div ref={section3Ref} data-section="section3">
        <Section3 />
      </div>
      <div ref={section4Ref} data-section="section4">
        <Section4 />
      </div>
      <div ref={section5Ref} data-section="section5">
        <Section5 />
      </div>
      <div ref={sectionJoinRef} data-section="sectionjoin">
        <SectionJoin />
      </div>
    </>
  );
}

export default App;

