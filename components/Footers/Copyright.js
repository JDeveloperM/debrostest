import HashLink from "../Common/HashLink";
import React from "react";

const Copyright = () => {
  return (
    <>
      <div
        className="copyright-area copyright-style-one"
        style={{
          background: 'rgba(6, 6, 6, 0.9)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(58, 106, 207, 0.1)',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5), 0 -1px 8px rgba(58, 106, 207, 0.1)',
          position: 'relative'
        }}
      >
        {/* Top glow line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(58, 106, 207, 0.4), transparent)',
            boxShadow: '0 0 15px rgba(58, 106, 207, 0.3)'
          }}
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover" style={{ margin: 0, padding: 0 }}>
                  <li>
                    <HashLink
                      href="/files/DeBros_Whitepaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        padding: '8px 16px',
                        background: 'rgba(26, 26, 26, 0.4)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(58, 106, 207, 0.2)',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.5)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(58, 106, 207, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.borderColor = 'rgba(58, 106, 207, 0.2)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0px)';
                      }}
                    >
                      Whitepaper
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="copyright-right text-center text-lg-end">
                <p
                  className="copyright-text"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: '400'
                  }}
                >
                  Copyright © 2025{" "}
                  <HashLink
                    href="https://debros.io"
                    className="btn-read-more"
                    target="_blank"
                    style={{
                      color: 'rgba(58, 106, 207, 0.9)',
                      textDecoration: 'none',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      textShadow: '0 0 10px rgba(58, 106, 207, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgba(58, 106, 207, 1)';
                      e.currentTarget.style.textShadow = '0 0 15px rgba(58, 106, 207, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(58, 106, 207, 0.9)';
                      e.currentTarget.style.textShadow = '0 0 10px rgba(58, 106, 207, 0.3)';
                    }}
                  >
                    <span>DeBros</span>
                  </HashLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;