import HashLink from "./HashLink";
import React from "react";

const Breadcrumb = ({ title, text, videoSrc }) => {
  return (
    <>
     <div className="breadcrumb-area breadcarumb-style-1" style={{ backgroundColor: "#1a2029" }}>
  {videoSrc && (
    <video
      autoPlay
      muted
      playsinline
      playsInline
      loop
      className="breadcrumb-video"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )}
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb-inner text-center">
          <h3 className="title h3">{title}</h3>
          <ul className="page-list">
            <li className="rainbow-breadcrumb-item">
              <HashLink href="/">Home</HashLink>
            </li>
            <li className="rainbow-breadcrumb-item active">{text}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Breadcrumb;
