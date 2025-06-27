import React, { useState } from "react";
import { useHashRouter } from "../../utils/hashRouter";
import Image from "next/image";
import HashLink from "../Common/HashLink";

import MenuData from "../../data/header.json";

import NavProps from "./NavProps";
import menuImg from "../../public/images/menu-img/menu-img-2.png";

const Nav = () => {
  const router = useHashRouter();

  // Log menu data to verify it's updated
  console.log('Menu Data:', MenuData.nav);

  const [sectionStates, setSectionStates] = useState({
    Tools: true,
    Pages: true,
  });

  const toggleSection = (subTitle) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [subTitle]: !prevState[subTitle],
    }));
  };

  const isActive = (href) => router.pathname === href;

  return (
    <>
      <ul className="mainmenu">
  {MenuData &&
    MenuData.nav.map((data, index) => (
      <li
        className={`${
          data.dropdown
            ? "has-dropdown has-menu-child-item position-relative"
            : ""
        } ${data.megamenu ? "with-megamenu has-menu-child-item" : ""}`}
        key={index}
      >
        {data.link === "#" ? (
          <a
            href="#"
            className={` ${!sectionStates[data.text] ? "open" : ""}`}
            onClick={() => toggleSection(data.text)}
          >
            {data.text}
            {data.isIcon ? (
              <i className="fa-regular fa-chevron-down"></i>
            ) : (
              ""
            )}
          </a>
        ) : (
          <HashLink
            href={data.link}
            target={data.targetBlank ? "_blank" : "_self"} // Add target based on targetBlank
            rel={data.targetBlank ? "noopener noreferrer" : undefined} // Security best practice for _blank
            className={isActive(data.link) ? "active" : ""}
          >
            {data.text}
            {data.isIcon ? (
              <i className="fa-regular fa-chevron-down"></i>
            ) : (
              ""
            )}
          </HashLink>
        )}

        {data.isMenu &&
        !data.inner &&
        !data.dashboard &&
        !data.upcoming ? (
          <ul
            className={`submenu ${
              !sectionStates[data.text] ? "d-block" : ""
            }`}
          >
            {data.subItem &&
              data.subItem.map((innerData, innerIndex) => (
                <li key={innerIndex}>
                  <HashLink
                    className={`${
                      isActive(innerData.link) ? "active" : ""
                    } ${innerData.isDisable ? "disabled" : ""}`}
                    href={!innerData.isDisable ? innerData.link : "#"}
                    target={innerData.targetBlank ? "_blank" : "_self"} // Add target for sub-items
                    rel={
                      innerData.targetBlank ? "noopener noreferrer" : undefined
                    }
                  >
                    <span>{innerData.title}</span>
                    {innerData.badge ? (
                      <div className="rainbow-badge-card badge-sm ml--5">
                        {innerData.badge}
                      </div>
                    ) : (
                      ""
                    )}
                  </HashLink>
                </li>
              ))}
          </ul>
        ) : data.isMenu ? (
          <div
            className={`rainbow-megamenu ${
              !sectionStates[data.text] ? "d-block active" : ""
            }`}
          >
            <div className="wrapper">
              <div className="row row--0">
                <NavProps list={data.inner} />
                <NavProps list={data.dashboard} />
                <NavProps list={data.upcoming} />
                <div className="col-lg-3 single-mega-item">
                  <div className="header-menu-img">
                    <Image
                      src={menuImg}
                      width={326}
                      height={458}
                      alt="Menu Split Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </li>
    ))}
</ul>

    </>
  );
};

export default Nav;
