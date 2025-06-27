import React from "react";

const FaqAccordion = ({ title, desc, num }) => {
  return (
    <div className="card">
      <div className="card-header" id={`heading${num}`}>
        <button
          className={`${num === 0 ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${num}`}
          aria-expanded={num === 0 ? "true" : "false"}
          aria-controls={`collapse${num}`}
        >
          {title}
        </button>
      </div>
      <div
        id={`collapse${num}`}
        className={`collapse ${num === 0 ? "show" : ""}`}
        aria-labelledby={`heading${num}`}
        data-bs-parent="#accordionExamplea"
      >
        <div className="card-body">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
