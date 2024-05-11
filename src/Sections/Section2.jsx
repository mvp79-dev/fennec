import React, { useState, useEffect, useRef } from "react";

export const Section2 = () => {

    const [isVisibleTop, setIsVisibleTop] = useState(false);
    const [isVisibleContainers, setIsVisibleContainers] = useState(false);

    const topRef = useRef(null);
    const containersRef = useRef(null);

    useEffect(() => {
        const observerTop = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisibleTop(true);
                observerTop.disconnect();
            }
        });

        const observerContainers = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisibleContainers(true);
                observerContainers.disconnect();
            }
        });

        if (topRef.current) {
            observerTop.observe(topRef.current);
        }

        if (containersRef.current) {
            observerContainers.observe(containersRef.current);
        }

        return () => {
            if (topRef.current) {
                observerTop.unobserve(topRef.current);
            }
            if (containersRef.current) {
                observerContainers.unobserve(containersRef.current);
            }
        };
    }, []);

    return (
        <section className="two" >
            <div className="two-content" >
                <div className={`two-top-text-content ${isVisibleTop ? 'visible' : ''}`} ref={topRef}>
                    <h1 className="medium-headline two-top-title white" >Unlocking the Potential of Community</h1>
                    <h1 className="small-description two-top-description grey" >At YTFIN, we harness the power of community to revolutionize content monetization. By supporting YouTube creators, our community members enhance revenue generation, which boosts rewards for everyone involved. YTFIN serves as a catalyst, empowering you to drive success and share in the collective profits. Together, we create a sustainable cycle of success.</h1>
                    <button className="button-start-earning" >
                        <h1>Start Earning with YTFIN</h1>
                    </button>
                </div>
                <div className={`two-containers ${isVisibleContainers ? 'visible' : ''}`} ref={containersRef}>
                    <h1 className="medium-headline white" >Steps for Community Success</h1>
                    <div className="two-container-row" >
                        <div className="two-row-one" >
                            <i className="fa-regular fa-credit-card"></i>
                            <div className="row-text-content" >
                                <h1 className="smallest-headline white" >Buying Tokens</h1>
                                <h1 className="small-description grey" >Acquire YTFIN tokens, which will be used to invest a percentage into channels and content creators, amplifying their impact and fostering a thriving digital content community.</h1>
                            </div>
                        </div>
                        <div className="two-row-two" >
                            <div className="row-text-content" >
                                <h1 className="smallest-headline white" >Maximizing Engagement</h1>
                                <h1 className="small-description grey" >Delve into videos and ignite the buzz. Your engagement through likes, shares, and views isn't merely about grabbing attention; it fuels the revenue stream. Increased visibility translates to higher advertising earnings. Easy, isn't it?</h1>
                            </div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="two-container-one" >
                        <i className="fa-solid fa-arrow-trend-up"></i>
                        <div className="row-text-content" >
                            <h1 className="smallest-headline white" >Sustainable Ecosystem</h1>
                            <h1 className="small-description grey" >All advertising revenue is consolidated and distributed monthly in the form of YTFIN tokens. A fraction of this income is then reinvested into both new and established YouTube content, fostering a self-perpetuating loop of investment and yield.</h1>
                        </div>
                    </div>
                    <div className="two-container-two" >
                        <i className="fa-solid fa-globe"></i>
                        <div className="row-text-content" >
                            <h1 className="smallest-headline white" >Empowering Growth</h1>
                            <h1 className="small-description grey" >Each month, we consolidate all the advertising revenue generated and distribute it as YTFIN tokens among our dedicated contributors. But that’s not where the journey ends. We reinvest a portion of these funds to craft even more captivating YouTube content. It's a perpetual cycle of excellence, amplifying our impact with each turn—more videos, broader viewership, and increased prosperity for all involved!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}