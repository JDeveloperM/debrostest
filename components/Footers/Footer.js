import Image from "next/image";
import HashLink from "../Common/HashLink";
import React from "react";

import FooterData from "../../data/footer.json";

import logo from "../../public/images/logo/logo.png";
import FooterProps from "./FooterProps";

const Footer = () => {
  return (
    <>
      <footer
        className="rainbow-footer footer-style-default footer-style-3 position-relative"
        style={{
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(58, 106, 207, 0.15)',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none',
          boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.4), 0 -2px 16px rgba(58, 106, 207, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle glow effect at the top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(58, 106, 207, 0.6), transparent)',
            boxShadow: '0 0 20px rgba(58, 106, 207, 0.3)'
          }}
        />

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
  <div className="social-icons" style={{ marginTop: '30px' }}>
    <a
      href="https://x.com/debrosofficial"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        width: "44px",
        height: "44px",
        marginRight: "12px",
        background: 'rgba(26, 26, 26, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(58, 106, 207, 0.2)',
        borderRadius: '12px',
        padding: '8px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 106, 207, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img
        src="/images/logo/x.png"
        alt="X"
        className="social-icon"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </a>
    <a
      href="https://t.me/debrosportal"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        width: "44px",
        height: "44px",
        marginRight: "12px",
        background: 'rgba(26, 26, 26, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(58, 106, 207, 0.2)',
        borderRadius: '12px',
        padding: '8px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 106, 207, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img
        src="/images/logo/telegram.png"
        alt="Telegram"
        className="social-icon"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </a>
    <a
      href="https://www.youtube.com/@DeBrosOfficial"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        width: "44px",
        height: "44px",
        marginRight: "12px",
        background: 'rgba(26, 26, 26, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(58, 106, 207, 0.2)',
        borderRadius: '12px',
        padding: '8px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 106, 207, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img
        src="/images/logo/youtube.png"
        alt="Youtube"
        className="social-icon"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </a>
    <a
      href="https://github.com/debrosofficial"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        width: "44px",
        height: "44px",
        marginRight: "12px",
        background: 'rgba(26, 26, 26, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(58, 106, 207, 0.2)',
        borderRadius: '12px',
        padding: '8px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 106, 207, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img
        src="/images/logo/github.png"
        alt="Github"
        className="social-icon"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </a>
    <a
      href="https://git.debros.io/explore/repos"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        width: "44px",
        height: "44px",
        marginRight: "12px",
        background: 'rgba(26, 26, 26, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(58, 106, 207, 0.2)',
        borderRadius: '12px',
        padding: '8px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 106, 207, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img
        src="/images/logo/gitbros.png"
        alt="GitBros"
        className="social-icon"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </a>
    <a
      href="mailto:info@debros.io"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        width: "44px",
        height: "44px",
        marginRight: "12px",
        background: 'rgba(26, 26, 26, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(58, 106, 207, 0.2)',
        borderRadius: '12px',
        padding: '8px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 106, 207, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
      }}
    >
      <img
        src="/images/logo/email.png"
        alt="Email"
        className="social-icon"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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
                          <h4 className="title" style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1.1rem',
                            marginBottom: '12px',
                            textShadow: '0 0 10px rgba(58, 106, 207, 0.3)'
                          }}>
                            {service.title}
                          </h4>
                          <h4 className="title" style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1.3rem',
                            marginBottom: '15px',
                            textShadow: '0 0 10px rgba(58, 106, 207, 0.3)',
                            textAlign: 'center',
                            fontWeight: '600'
                          }}>
                            Projects
                          </h4>
                          <div
                            className="footer-image-container"
                            style={{
                              background: 'rgba(26, 26, 26, 0.3)',
                              backdropFilter: 'blur(10px)',
                              WebkitBackdropFilter: 'blur(10px)',
                              borderRadius: '12px',
                              padding: '12px',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                              display: 'grid',
                              gridTemplateColumns: 'repeat(2, 1fr)',
                              gridTemplateRows: 'repeat(2, 1fr)',
                              gap: '10px',
                              maxWidth: '140px',
                              margin: '0 auto'
                            }}
                          >
                            {service.innerItem.map((inner, innerIndex) => (
                              <a
                                href={inner.link}
                                key={innerIndex}
                                className="service-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  display: "inline-block",
                                  background: 'rgba(58, 106, 207, 0.1)',
                                  border: '1px solid rgba(58, 106, 207, 0.2)',
                                  borderRadius: '8px',
                                  padding: '6px',
                                  transition: 'all 0.3s ease',
                                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                                  flex: '0 0 auto'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                  e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
                                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 106, 207, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                                  e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
                                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
                                }}
                              >
                                <img
                                  src={inner.imgSrc}
                                  alt={inner.alt}
                                  className="service-image"
                                  style={{
                                    display: "block",
                                    width: "45px",
                                    height: "45px",
                                    objectFit: 'contain'
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
