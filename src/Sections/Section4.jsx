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
            <div className="four-left">
              <img src="/r1.png" className="four-left-images" />
              <img src="/r2.png" className="four-left-images" />
            </div>
            <div className="four-right">
              <h1 className="small-headline margin-top white" ><span className="gold" >Elevate</span> your night with exclusive rewards</h1>
              <p className="description white margin-center" >Unlock exclusive rewards! Experience nightlife like never before with challenges that earn you perks from express entry to free drinks.</p>
            </div>
          </div>
        </section>

      </>
    )
}