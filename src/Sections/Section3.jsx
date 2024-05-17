import React, { useEffect, useRef, useState } from "react";

export const Section3 = () => {

    const [isVisibleOne, setIsVisibleOne] = useState(false);
  
    const oneRef = useRef(null);
  
    useEffect(() => {
  
      const observerOne = new IntersectionObserver(([entry]) => {
        setIsVisibleOne(entry.isIntersecting);
      });
  
      observerOne.observe(oneRef.current);
  
      return () => {
        observerOne.unobserve(oneRef.current);
      };
    }, []);

    return (
      <>
        <section className="three">
          <div className={`three-content ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
            <h1 className="description white" >Ever felt, promoters and individuals close to nightlife businesses get rewarded for their loyalty a lot more than you? Fennec AI provides all hospitality and nightlife customers with an all in one mobile app which synchronizes with the fennec ecosystem to provide every customer the best service.</h1>
          </div>
        </section>

      </>
    )
}