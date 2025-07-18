import { useEffect, useState } from "react";
import Image from "next/image";
import HashLink from "../Common/HashLink";

import { useAppContext } from "@/context/Context";

import logo from "../../public/images/logo/logo.png";
import logoDark from "../../public/images/light/logo/logo-dark.png";
import Nav from "./Nav";
import DarkSwitch from "./dark-switch";

const Header = ({ headerTransparent, headerSticky, btnClass }) => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme, toggleTheme } =
    useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-2 col-md-6 col-6">
              <div className="logo">
                <HashLink href="/">
                  {isLightTheme ? (
                    <Image
                      className="logo-light"
                      src={logo}
                      width={135}
                      height={35}
                      priority={true}
                      alt="ChatBot Logo"
                    />
                  ) : (
                    <Image
                      className="logo-light"
                      src={logoDark}
                      width={135}
                      height={35}
                      priority={true}
                      alt="ChatBot Logo"
                    />
                  )}
                </HashLink>
              </div>
            </div>

            <div className="col-lg-8 d-none d-lg-block">
              <nav className="mainmenu-nav d-none d-lg-flex justify-content-center">
                <Nav />
              </nav>
            </div>

            <div className="col-lg-2 col-md-6 col-6 position-static">
              <div className="header-right">
                <div className="header-btn">
                <a className={`${btnClass}`} href="https://hub.debros.io" target="_blank" rel="noopener noreferrer">
                    <span>Enter HUB</span>
                  </a>
                </div>

                <div className="mobile-menu-bar ml--5 d-flex justify-content-end d-lg-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button"
                      onClick={() => {
                        setActiveMobileMenu(!activeMobileMenu);
                      }}
                    >
                      ☰
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

