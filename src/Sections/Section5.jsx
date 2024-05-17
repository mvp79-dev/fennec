import React, { useEffect, useRef, useState } from "react";

export const Section5 = () => {

    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  
    const oneRef = useRef(null);
    const twoRef = useRef(null);
  
    useEffect(() => {
  
      const observerOne = new IntersectionObserver(([entry]) => {
        setIsVisibleOne(entry.isIntersecting);
      });

      const observerTwo = new IntersectionObserver(([entry]) => {
        setIsVisibleTwo(entry.isIntersecting);
      });
  
      observerOne.observe(oneRef.current);
      observerTwo.observe(twoRef.current);
  
      return () => {
        observerOne.unobserve(oneRef.current);
        observerTwo.unobserve(twoRef.current);
      };
    }, []);

    return (
      <>
        <section className="five">
          <div className="five-content">
            <div className={`five-content-texts ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
                <h1 className="description white" > Sign up for early access to know more about all the features Fennec has to offer you for the best hospitality and nightlife experience you can ever imagine!</h1>
                <div className="form-content" >
                    <form className={`form-form ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef} >  
                        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
                        <input name="email" type="text" class="feedback-input" placeholder="Email Address" />
                        <input type="submit" value="SUBMIT"/>
                    </form>
                </div>
            </div>
          </div>
        </section>

      </>
    )
}