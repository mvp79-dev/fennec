import React, { useState, useEffect, useRef } from "react";

export const Section3 = () => {

    const [isVisibleTop, setIsVisibleTop] = useState(false);
    const [isVisibleBottom, setIsVisibleBottom] = useState(false);

    const topRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const observerTop = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisibleTop(true);
                observerTop.disconnect();
            }
        });

        const observerBottom = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisibleBottom(true);
                observerBottom.disconnect();
            }
        });

        if (topRef.current) {
            observerTop.observe(topRef.current);
        }

        if (bottomRef.current) {
            observerBottom.observe(bottomRef.current);
        }

        return () => {
            if (topRef.current) {
                observerTop.unobserve(topRef.current);
            }
            if (bottomRef.current) {
                observerBottom.unobserve(bottomRef.current);
            }
        };
    }, []);

    return (
        <section className="three" >
            <div className="three-content" >
                <div className={`three-top-text-content ${isVisibleTop ? 'visible' : ''}`} ref={topRef}>
                    <h1 className="medium-headline three-top-title white" >Unleash the Power of <span className="headline-blue" >YTFIN</span></h1>
                    <h1 className="small-description three-top-description grey" >YTFIN revolutionizes content monetization by harnessing YouTube's ad revenue to directly enrich its token holders. Explore the thriving video streaming market landscape and secure a share in its expansion. With YTFIN, your engagement translates into earnings, fostering a vibrant ecosystem where interactions drive financial gains. Embrace YTFIN investment opportunities to seize the opportunities of the digital content revolution now.</h1>
                </div>
                <div className={`three-bottom-content ${isVisibleBottom ? 'visible' : ''}`} ref={bottomRef}>
                    <h1 className="medium-headline three-top-title white" >The Future of Fintech</h1>
                    <div className="three-bottom-points" >
                        <div className="three-bottom-point" >
                            <div className="three-icon" ><h1 className="small-description bold" >1</h1></div>
                            <h1 className="smallest-headline white" >Effortless Earning</h1>
                        </div>
                        <div className="three-border" />
                        <div className="three-bottom-point" >
                            <div className="three-icon redbackground" ><h1 className="small-description bold" >2</h1></div>
                            <h1 className="smallest-headline white" >Reliable Returns</h1>
                        </div>
                        <div className="three-border" />
                        <div className="three-bottom-point" >
                            <div className="three-icon" ><h1 className="small-description bold" >3</h1></div>
                            <h1 className="smallest-headline white" >Secure Investments</h1>
                        </div>
                    </div>
                    <h1 className="small-description three-bottom-description grey" >YTFIN's unique model aligns the interests of creators, advertisers, and investors</h1>
                </div>
            </div>
        </section>
    )
}