import React, { useEffect, useRef, useState } from "react";

export const Section4 = () => {

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
        <section className="four">
          <div className={`four-content ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
            <h1 className="small-description grey text-top" >Get rewarded to Party!</h1>
            <h1 className="description white text-bottom" > Fennec AI uses advanced analytics and algorithms to ensure you are rewarded every time you go out.</h1>
          </div>
        </section>

      </>
    )
}