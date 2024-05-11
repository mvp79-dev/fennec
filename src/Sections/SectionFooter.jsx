
export const SectionFooter = () => {

    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

    return (
        <section className="footer" >
            <div className="footer-content" >
                <div className="footer-column footer-column-main" >
                    <h1 className="smallest-headline footer-title white" >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/roadmap.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/litepaper.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/toke.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/tech.pdf")} >Lorem Ipsum</h1>
                </div>
                <div className="footer-column footer-column-main" >
                    <h1 className="smallest-headline footer-title white" >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/roadmap.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/litepaper.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/toke.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/tech.pdf")} >Lorem Ipsum</h1>
                </div>
                <div className="footer-column footer-column-main" >
                    <h1 className="smallest-headline footer-title white" >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/roadmap.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/litepaper.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/toke.pdf")} >Lorem Ipsum</h1>
                    <h1 className="small-description footer-text footer-description grey" onClick={() => handleClick("/tech.pdf")} >Lorem Ipsum</h1>
                </div>
            </div>
        </section>
    )
}