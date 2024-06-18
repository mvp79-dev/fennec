import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import AnimText from "../AnimText";
import Typewriter from 'typewriter-effect';
import { Sparkles } from "@react-three/drei";

export const Section2 = () => {

  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  const oneRef = useRef(null);
  const twoRef = useRef(null);

  useEffect(() => {

    const observerOne = new IntersectionObserver(([entry]) => {
      setIsVisibleOne(entry.isIntersecting);
    });

    observerOne.observe(oneRef.current);

    return () => {
      observerOne.unobserve(oneRef.current);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <>
        {isMobile && (
          <>
          <div className="two-content-right-mobile" >
            <div className="mobile-scroll" />
            <h1 className="small-headline margin-top white" >We are <span className="gold" >Fennec AI</span></h1>
            <p className="description white margin-center" > A marketplace of AI and ML products and services specifically designed to grow the hospitality and nightlife industry</p>
            <div className="typewriter-box" >
                <h1 className="description white" >With the BEST solutions powered by Fennec AI:</h1>
                <Typewriter
                  options={{
                  strings: ["Discover", "Connect", "Elevate", "Simplify"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typing-text",
                  }}
                />
              </div>
          </div>
          </>
        )}
        <section className="two">
          <div className="mobile-scroll" />
          <div className="experience">
            <CanvasContainer />
          </div>
          <div className={`two-content ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
            <div className="two-content-left" >
              {/* <img src="/phone.png" className="two-center-image" /> */}
            </div>
            <div className="two-content-right" >
              <h1 className="small-headline margin-top white" >We are <span className="gold" >Fennec AI</span></h1>
              <p className="description white margin-center" > A marketplace of AI and ML products and services specifically designed to grow the hospitality and nightlife industry with the BEST solutions powered by Fennec AI:</p>
              <div className="typewriter-box" >
                <h1 className="description white" >With the BEST solutions powered by Fennec AI:</h1>
                <span className="inline" >
                <Typewriter
                  options={{
                  strings: ["Discover", "Connect", "Elevate", "Simplify"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typing-text",
                  }}
                />
                </span>
              </div>
            </div>
          </div>
        </section>

      </>
    )
}