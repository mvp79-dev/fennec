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
            <div className="three-right">
              <h1 className="small-headline margin-top white" ><span className="gold" >Discover</span> new adventures</h1>
              <p className="description white margin-center" >Discover top events and venues with our comprehensive ticketing and guestlist platform. From live crowd updates to exclusive table bookings, every night is perfectly planned.</p>
            </div>
            <div className="three-left">
              <img src="/scr3.png" className="three-left-images" />
              <img src="/scr9.png" className="three-left-images" />
            </div>
          </div>
        </section>

      </>
    )
}