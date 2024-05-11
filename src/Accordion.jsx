import React, { useEffect, useRef, useState } from "react";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion-section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="accordion-top">
          <p className="description bold white">{props.title}</p>
          <div className="accordion-icon" >
            <i className={`fa-solid fa-arrow-down ${active ? "rotate" : ""}`} style={{ transition: "transform 0.5s ease" }} ></i>
          </div>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${height}` }}
          className="accordion-content"
        >
          <div
            className="small-text-accordion white"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;