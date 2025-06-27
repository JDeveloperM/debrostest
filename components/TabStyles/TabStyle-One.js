import HashLink from "../Common/HashLink";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import TabData from "../../data/tabStyle.json";
import { useAppContext } from "@/context/Context";

const TabStyleOne = () => {
  const { isLightTheme } = useAppContext();
  const tabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (tabsElement) {
      checkScrollPosition();
      tabsElement.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
    }

    return () => {
      if (tabsElement) {
        tabsElement.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      }
    };
  }, []);

  return (
    <>
      <div className="row row--30 align-items-center">
        <div className="col-lg-12">
          <div className="rainbow-default-tab style-three generator-tab-defalt">
            <div className="tabs-navigation-container">
              {showLeftArrow && (
                <button className="tab-arrow tab-arrow-left" onClick={scrollLeft}>
                  <FaChevronLeft />
                </button>
              )}

              <ul className="nav nav-tabs tab-button" role="tablist" ref={tabsRef}>
                {TabData &&
                  TabData.TabStyleOne.map((data, index) => (
                    <li
                      className="nav-item tabs__tab "
                      role="presentation"
                      key={index}
                    >
                      <button
                        className={`nav-link rainbow-gradient-btn without-shape-circle ${
                          data.isSelect ? "active" : ""
                        }`}
                        id={`${data.menuId}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${data.target}`}
                        type="button"
                        role="tab"
                        aria-controls={data.target}
                        aria-selected="false"
                      >
                        <span className="generator-icon">
                          <Image
                            src={data.iconImg}
                            width={24}
                            height={24}
                            alt="Vedio Generator Icon"
                          />
                          {data.text}
                        </span>
                        <span className="border-bottom-style"></span>
                      </button>
                    </li>
                  ))}
              </ul>

              {showRightArrow && (
                <button className="tab-arrow tab-arrow-right" onClick={scrollRight}>
                  <FaChevronRight />
                </button>
              )}
            </div>

            <div className="rainbow-tab-content tab-content">
              {TabData &&
                TabData.TabStyleOne.map((tab, index) => (
                  <div
                    className={`tab-pane fade ${
                      tab.isSelect ? "show active" : ""
                    }`}
                    id={tab.target}
                    role="tabpanel"
                    aria-labelledby={`${tab.menuId}-tab`}
                    key={index}
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">{tab.title}</h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                {tab.subItem.map((item, i) => (
                                  <li key={i}>
                                    {item.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="read-more">
  {tab.button ? (
    <HashLink
      className={`btn-default color-blacked ${!tab.button.href ? "disabled" : ""}`}
      href={tab.button.href || "#"} // Use "#" if no href is present
      target={tab.button.targetBlank ? "_blank" : "_self"} // Added target
      rel={tab.button.targetBlank ? "noopener noreferrer" : undefined} // Added rel
      style={{ pointerEvents: tab.button.href ? "auto" : "none", opacity: tab.button.href ? 1 : 0.5 }} // Disable styling
    >
      {tab.button.href ? tab.button.label : "Coming Soon"}
    </HashLink>
  ) : null}

  {tab.button2 ? (
    <HashLink
      className={`btn-default color-blacked pr-4 margin-left-20 ${!tab.button2.href ? "disabled" : ""}`}
      href={tab.button2.href || "#"} // Use "#" if no href is present
      target={tab.button2.targetBlank ? "_blank" : "_self"} // Added target
      rel={tab.button2.targetBlank ? "noopener noreferrer" : undefined} // Added rel
      style={{ pointerEvents: tab.button2.href ? "auto" : "none", opacity: tab.button2.href ? 1 : 0.5 }} // Disable styling
    >
      {tab.button2.href ? tab.button2.label : "Coming Soon"}
    </HashLink>
  ) : null}
</div>


                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div className="export-img img-bg-shape">
                                <Image
                                  src={isLightTheme ? tab.img : tab.imgLight}
                                  width={569}
                                  height={483}
                                  alt="Chat example Image"
                                  className="responsive-image"
                                />
                                <div className="image-shape"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabStyleOne;
