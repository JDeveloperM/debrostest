import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/Context";

import logoLight from "../../public/images/logo/logo.png";
import logoDark from "../../public/images/light/logo/logo-dark.png";

import Nav from "./Nav";

const PopupMobileMenu = () => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme } =
    useAppContext();

  // Force close mobile menu on component mount and when window size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setActiveMobileMenu(false);
      }
    };

    // Close mobile menu on initial load
    setActiveMobileMenu(false);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setActiveMobileMenu]);

  return (
    <div
      className={`popup-mobile-menu ${activeMobileMenu ? "active" : ""}`}
    >
      <div className="inner">
        <div className="header-top">
          <div className="logo">
            <Link href="/">
              <Image
                src={isLightTheme ? logoLight : logoDark}
                width={135}
                height={35}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="close-menu">
            <button
              className="close-button"
              onClick={() => setActiveMobileMenu(false)}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dashboard Button - Moved right after logo */}
        <div className="header-btn">
          <a className="btn-default" href="https://hub.debros.io" target="_blank" rel="noopener noreferrer" onClick={() => setActiveMobileMenu(false)}>
            <span>Enter HUB</span>
          </a>
        </div>

        <Nav />
      </div>
    </div>
  );
};

export default PopupMobileMenu;






