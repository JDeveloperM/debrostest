import Image from "next/image";
import HashLink from "../Common/HashLink";
import React from "react";

import FooterData from "../../data/footer.json";

import logo from "../../public/images/logo/logo.png";
import FooterProps from "./FooterProps";

const Footer = () => {
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget mobile-center">
  <div className="logo">
    <HashLink href="/">
      <Image
        className="logo-light"
        src={logo}
        width={190}
        height={80}
        alt="ChatBot Logo"
      />
    </HashLink>
  </div>
  <p className="b1 desc-text">
    Decentralized Development <br />
    Delivering the Future
  </p>
  <div className="social-icons">
    <a href="https://x.com/debrosofficial" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "40px", height: "40px", marginRight: "7px" }}>
      <img
        src="/images/logo/x.png"
        alt="X"
        className="social-icon"
      />
    </a>
    <a href="https://t.me/debrosportal" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "40px", height: "40px", marginRight: "7px" }}>
      <img
        src="/images/logo/telegram.png"
        alt="Talegram"
        className="social-icon"
      />
    </a>
    <a href="https://www.youtube.com/@DeBrosOfficial" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "40px", height: "40px", marginRight: "7px" }}>
      <img
        src="/images/logo/youtube.png"
        alt="Youtube"
        className="social-icon"
      />
    </a>
    <a href="https://github.com/debrosofficial" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "40px", height: "40px", marginRight: "7px" }}>
      <img
        src="/images/logo/github.png"
        alt="Github"
        className="social-icon"
      />
    </a>
    <a href="https://git.debros.io/explore/repos" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "40px", height: "40px", marginRight: "7px" }}>
      <img
        src="/images/logo/gitbros.png"
        alt="GitBros"
        className="social-icon"
      />
    </a>
    <a href="mailto:info@debros.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "40px", height: "40px", marginRight: "7px" }}>
      <img
        src="/images/logo/email.png"
        alt="Email"
        className="social-icon"
      />
    </a>
  </div>
</div>
              </div>

             

              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
  {FooterData &&
    FooterData.footer.map((data, index) => (
      <div className="rainbow-footer-widget" key={index}>
        {data.services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="widget-menu-bottom">
            <h4 className="title">{service.title}</h4>
            <h4 className="title">Projects</h4>
            <div className="footer-image-container">
              {service.innerItem.map((inner, innerIndex) => (
                <a
                  href={inner.link}
                  key={innerIndex}
                  className="service-link"
                  target="_blank" // Added target for opening in a new tab
                  rel="noopener noreferrer" // Added rel for security
                >
                  <img
                    src={inner.imgSrc}
                    alt={inner.alt}
                    className="service-image"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "60px",
                      margin: "0 8px",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
</div>






            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
