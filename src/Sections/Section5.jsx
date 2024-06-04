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
            <div className="three-left">
              <img src="/scr1.png" className="three-left-images" />
              <img src="/scr2.png" className="three-left-images" />
              <img src="/scr3.png" className="three-left-images" />
            </div>
            <div className="three-right">
              <h1 className="small-headline margin-top white" >Seamless Party Planning and Payments</h1>
              <p className="description white margin-center" >Create your party, split bills effortlessly, and order directly from your phone. Skip the lines, not the fun!</p>
              <ul className="content-list margin-bottom" >
                <li className="small-description grey" >Set up your night out in advance and keep everyone on the same page.</li>
                <li className="small-description grey" >Decide how you want to split expenses and get instant approval from friends - no more payment hassles!</li>
                <li className="small-description grey" >Order your favorite drinks and products right from the app. Enjoy faster service and more time with your friends.</li>
            </ul> 
            </div>
          </div>
        </section>

      </>
    )
}