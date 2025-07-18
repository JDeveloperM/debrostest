import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { useRef } from "react";
import styles from "./SpotlightCard.module.css";

import ServiceData from "../../data/serviceStyle.json";

import bg from "../../public/images/service/bg.png";
import bgHover from "../../public/images/service/bg-hover.png";

import darkBg from "../../public/images/light/service/bg.png";
import darkBgHover from "../../public/images/light/service/bg-hover.png";
import { useAppContext } from "@/context/Context";

const ServiceStyleOne = () => {
  const { isLightTheme } = useAppContext();

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider
              {...settings}
              className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows"
            >
              {ServiceData &&
                ServiceData.serviceOne.map((data, index) => (
                  <div className="slide-single-layout" key={index}>
                    <SpotlightCard className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                      <div className="inner">
                        <div className="icon">
                          <Image
                            src={data.img}
                            width={48}
                            height={48}
                            alt="Servece Icon"
                          />
                        </div>
                        <div className="description centered-shape">
                          <h5 className="title">{data.title}</h5>
                          <p className="desc">{data.desc}</p>
                        </div>
                      </div>
                      <div className="bg-shaped">
                        <Image
                          src={isLightTheme ? bg : darkBg}
                          width={415}
                          height={344}
                          alt="shape"
                          className="bg"
                        />
                        <Image
                          src={isLightTheme ? bgHover : darkBgHover}
                          width={415}
                          height={344}
                          alt="shape"
                          className="bg-hover"
                        />
                      </div>
                    </SpotlightCard>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`${styles.cardSpotlight} ${className}`}
    >
      {children}
    </div>
  );
};

export default ServiceStyleOne;

