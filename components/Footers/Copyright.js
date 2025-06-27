import HashLink from "../Common/HashLink";
import React from "react";

const Copyright = () => {
  return (
    <>
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                 
                 
                  <li>
                    <HashLink
                      href="/files/DeBros_Whitepaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whitepaper
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="copyright-right text-center text-lg-end">
                <p className="copyright-text">
                  Copyright © 2025{" "}
                  <HashLink
                    href="https://debros.io"
                    className="btn-read-more"
                    target="_blank"
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