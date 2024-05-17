import React, { useEffect, useRef, useState } from "react";

export const Section2 = () => {

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
        <section className="two">
          <div className={`two-content ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
            <h1 className="small-description grey" >Our marketplace offers a wide range of hyper personalized AI-powered products and services designed to:</h1>
            <ul className="two-content-list" >
                <li className="description white" >Enhance Customer experiences</li>
                <li className="description white" >Increase Customer Retention</li>
                <li className="description white" >Drive Growth and Revenue</li>
                <li className="description white" >Streamline Workflows</li>
                <li className="description white" >Boost Operational Efficiency</li>
            </ul>
          </div>
        </section>

      </>
    )
}