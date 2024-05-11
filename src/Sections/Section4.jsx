import React, { useState, useEffect, useRef } from "react";

export const Section4 = () => {

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
        <section className="four" >
            <div className="four-content" >
                <div className={`four-top-text-content ${isVisibleTop ? 'visible' : ''}`} ref={topRef}>
                    <h1 className="medium-headline four-title white" >Unleash the Power of Passive Income</h1>
                    <h1 className="small-description four-top-description grey" >YTFIN is spearheading a transformative approach to securing your financial future. Through the direct reinvestment of YouTube's advertising revenue into the token, YTFIN offers an unparalleled opportunity for investors to generate passive income while actively contributing to the expansion of the video streaming sector.</h1>
                </div>
                <div className={`four-bottom ${isVisibleBottom ? 'visible' : ''}`} ref={bottomRef}>
                    <h1 className="medium-headline four-title white" >Invest In YTFIN Today</h1>
                    <div className="four-bottom-list" >
                        <div className="four-bottom-left" >
                            <h1 className="small-description four-bottom-description grey" >YTFIN's groundbreaking approach is set to revolutionize the fintech scene. Through leveraging the immense potential of YouTube's advertising revenue, YTFIN presents an unparalleled chance for investors to generate passive income while actively engaging in the thriving video ecosystem.</h1>
                        </div>
                        <div className="four-bottom-right" >
                            <div className="four-bottom-point" >
                                <div className="three-icon redbackground" ><i className="fa-solid fa-coins"></i></div>
                                <h1 className="description four-bottom-text white" >Invest & Earn</h1>
                            </div>
                            <div className="four-bottom-point" >
                                <div className="three-icon" ><i className="fa-solid fa-hand-holding-dollar"></i></div>
                                <h1 className="description four-bottom-text  white" >Grow & Hold</h1>
                            </div>
                            <div className="four-bottom-point" >
                                <div className="three-icon redbackground" ><i className="fa-solid fa-wallet"></i></div>
                                <h1 className="description four-bottom-text  white" >Start Now & Hold</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}