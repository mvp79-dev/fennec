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
            <div className="three-left">
              <img src="/scr1.png" className="three-left-images" />
              <img src="/scr2.png" className="three-left-images" />
              <img src="/scr3.png" className="three-left-images" />
            </div>
            <div className="three-right">
              <h1 className="small-headline margin-top white" >Unlock the Best Nights Out</h1>
              <p className="description white margin-center" > Discover top events and venues with our comprehensive ticketing and guestlist platform. From live crowd updates to exclusive table bookings, every night is perfectly planned.</p>
              <ul className="content-list margin-bottom" >
                <li className="small-description grey" >Stay in the loop with what's hot - from bustling spots to budget-friendly drinks.</li>
                <li className="small-description grey" >Make informed choices with ratings and reviews from past events.</li>
                <li className="small-description grey" >Know before you go with real-time updates on how lively each venue is</li>
                <li className="small-description grey" >Choose your perfect spot with our interactive club layouts and direct communication with venues.</li>
            </ul> 
            </div>
          </div>
        </section>

      </>
    )
}