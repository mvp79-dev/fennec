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
            <div className="four-right">
              <h1 className="small-headline margin-top white" >Elevate your Experience</h1>
              <p className="description white margin-center" >Unlock exclusive rewards! Experience nightlife like never before with challenges that earn you perks from express entry to free drinks.</p>
              <ul className="content-list margin-bottom" >
                <li className="small-description grey" >Invite friends and build your guestlist to earn points and prestige.</li>
                <li className="small-description grey" >Engage in fun challenges set by venues to earn even more rewards - be early, try something new, or just show up!</li>
                <li className="small-description grey" >Use your points for VIP treatment like express entry, complimentary drinks, and discounts on event tickets</li>
                <li className="small-description grey" >Foster unique relationships with venues and enjoy benefits that enhance every night out.</li>
            </ul> 
            </div>
            <div className="four-left">
              <img src="/scr7.png" className="four-left-images" />
              <img src="/scr8.png" className="four-left-images" />
              <img src="/scr9.png" className="four-left-images" />
            </div>
          </div>
        </section>

      </>
    )
}