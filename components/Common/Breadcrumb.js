import HashLink from "./HashLink";
import HexagonBanner from "./HexagonBanner";
import React from "react";

const Breadcrumb = ({ title, text, videoSrc, useHexagonBanner = false }) => {
  return (
    <>
      <div className="breadcrumb-area breadcrumb-style-1">

        {useHexagonBanner ? (
          <HexagonBanner height="33.5vh" />
        ) : (
          <>
            {!videoSrc && (
              <div style={{
                backgroundImage: "url(images/bg/breadcrumb-bg.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0
              }} />
            )}
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
          </>
        )}

        <div className="breadcrumb-inner">
          <h3 className="title">{title}</h3>
          <ul className="page-list">
            <li className="rainbow-breadcrumb-item">
              <HashLink href="/">Home</HashLink>
            </li>
            <li className="rainbow-breadcrumb-item active">{text}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
