import React, { useEffect, useRef, useState } from "react";

export const Section5 = () => {

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
            <div className="three-right">
              <h1 className="small-headline margin-top white" ><span className="gold" >Connect</span> and plan effortlessly with friends</h1>
              <p className="description white margin-center" >Create your party, split bills effortlessly, and order directly from your phone. Skip the lines, not the fun!</p>
            </div>
            <div className="three-left">
              <img src="/scr7.png" className="three-left-images" />
              <img src="/scr8.png" className="three-left-images" />
            </div>
          </div>
        </section>

      </>
    )
}