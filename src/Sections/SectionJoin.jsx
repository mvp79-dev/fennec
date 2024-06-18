import React, { useEffect, useRef, useState } from "react";

export const SectionJoin = () => {

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
        <section className="join">
          <div className="join-content">
            <div className={`join-content-texts ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
                <h1 className="small-headline margin-top white" >Sign Up</h1>
                <h1 className="description margin-center white" >Join us to gain early access to all of Fennec’s features and elevate your hospitality and nightlife experience!</h1>
                <div className="form-content" >
                    <form className={`form-form ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef} >  
                        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
                        <input name="email" type="text" class="feedback-input" placeholder="Email Address" />
                        <input type="submit" value="GET EARLY ACCESS"/>
                    </form>
                </div>
            </div>
          </div>
        </section>

      </>
    )
}