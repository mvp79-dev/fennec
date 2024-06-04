import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";

export const Section2 = () => {

  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [isVisibleFive, setIsVisibleFive] = useState(false);
  const [isVisibleSix, setIsVisibleSix] = useState(false);
  const [isVisibleSeven, setIsVisibleSeven] = useState(false);

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);
  const sixRef = useRef(null);
  const sevenRef = useRef(null);

  useEffect(() => {

    const observerOne = new IntersectionObserver(([entry]) => {
      setIsVisibleOne(entry.isIntersecting);
    });

    const observerTwo = new IntersectionObserver(([entry]) => {
      setIsVisibleTwo(entry.isIntersecting);
    });


    const observerFour = new IntersectionObserver(([entry]) => {
      setIsVisibleFour(entry.isIntersecting);
    });

    const observerFive = new IntersectionObserver(([entry]) => {
      setIsVisibleFive(entry.isIntersecting);
    });

    const observerSix = new IntersectionObserver(([entry]) => {
      setIsVisibleSix(entry.isIntersecting);
    });


    observerOne.observe(oneRef.current);
    observerTwo.observe(twoRef.current);
    observerFour.observe(fourRef.current);
    observerFive.observe(fiveRef.current);
    observerSix.observe(sixRef.current);

    return () => {
      observerOne.unobserve(oneRef.current);
      observerTwo.unobserve(twoRef.current);
      observerFour.unobserve(fourRef.current);
      observerFive.unobserve(fiveRef.current);
      observerSix.unobserve(sixRef.current);
    };
  }, []);

    return (
      <>
        <section className="two">
          <div className="mobile-scroll" />
          <div className="experience">
            <CanvasContainer />
          </div>
          <div className="two-content">
            <div className="two-content-left">
              <div className={`two-content-slide-left ${isVisibleOne ? 'visible' : ''}`} ref={oneRef} > 
                <h1 className="medium-headline white" >Discover</h1>
              </div>
              <div className={`two-content-slide-left ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef} > 
                <h1 className="medium-headline white" >Elevate</h1>
              </div>
            </div>
            <div className={`two-content-center ${isVisibleFour ? 'visible' : ''}`} ref={fourRef}>
              <img src="/phone.png" className="two-center-image" />
            </div>
            <div className="two-content-right">
              <div className={`two-content-slide-right ${isVisibleFive ? 'visible' : ''}`} ref={fiveRef} > 
                <h1 className="medium-headline white" >Connect</h1>
              </div>
              <div className={`two-content-slide-right ${isVisibleSix ? 'visible' : ''}`} ref={sixRef} > 
                <h1 className="medium-headline white" >Simplify</h1>
              </div>
            </div>
          </div>
        </section>

      </>
    )
}

            // <h1 className="small-description grey" >Our marketplace offers a wide range of hyper personalized AI-powered products and services designed to:</h1>
            // <ul className="two-content-list" >
            //     <li className="description white" >Enhance Customer experiences</li>
            //     <li className="description white" >Increase Customer Retention</li>
            //     <li className="description white" >Drive Growth and Revenue</li>
            //     <li className="description white" >Streamline Workflows</li>
            //     <li className="description white" >Boost Operational Efficiency</li>
            // </ul> 