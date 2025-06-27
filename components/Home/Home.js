import React, { useEffect, useState } from "react";

import Image from "next/image";
import Sal from "sal.js";
import DecryptedText from "../DecryptedText";

import SpotlightCard from "../SpotlightCard/SpotlightCard";

import FaqAccordion from "../Accordion/FaqAccordion";
import AccordionData from "../../data/dashboard.json";

import SplitImg from "../../public/images/split/split-2.png";
import SplitLogo from "../../public/images/split/split-2-logo.png";
import DarkSplitImg from "../../public/images/light/split/split-2.png";
import DarkSplitLogo from "../../public/images/light/split/split-2-logo.png";

import bgShape from "../../public/images/bg/split-bg-shape.png";

import BrandList from "../Brands/BrandList";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";

import { useAppContext } from "@/context/Context";
import HashLink from "../Common/HashLink"; // Use HashLink instead of Next.js Link

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { isLightTheme } = useAppContext();

  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape" style={{ backgroundColor: "#0a0a0a", color: "white" }}
        data-black-overlay="2"
      >

        <div
  className="container-fluid"
  style={{
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  {/* Video Background */}
  <video
    className="background-video"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    }}
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/images/bg/DeBros_Videos_Website_cube.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Inner Text */}
  <div
    className="text-content text-center"
    style={{
      position: "relative",
      zIndex: 1,
      color: "#fff",
      padding: "20px",
      maxWidth: "max-content",
    }}
  >
    <h1 className="title2">
      <DecryptedText
        text="A Brotherhood"
        animateOn="view"
        revealDirection="center"
        speed={80}
      />
      <br />
      <DecryptedText
        text="Pioneering a New Era"
        animateOn="view"
        revealDirection="center"
        speed={80}
        delay={500}
      />
      <br />
      <DecryptedText
        text="In Decentralized Development"
        animateOn="view"
        revealDirection="center"
        speed={80}
        delay={1000}
      />
      <span className="header-caption">
      </span>{" "}
    </h1>
  </div>
</div>


      </div>

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
            <h4 className="subtitle mt--40">
                  <span className="theme-gradient">
                  We Build On 
                  </span>
                </h4>
                
              </div>
              <BrandList />
            </div>
          </div>

        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center pb--60"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                  The Dawn of Web3: Empowering a Decentralized Future
                  </span>
                </h4>

                {/* Using SpotlightCard for the Web3 description */}
                <SpotlightCard
                  className="mb-5"
                  spotlightColor="rgba(58, 106, 207, 0.3)"
                >
                  <h3 className="title5 mb--0" style={{textAlign: "justify", fontSize: "1.8rem"}}>
                    <span style={{color: "#3A6ACF"}}>Web3 </span>signifies a pivotal shift in the digital landscape, empowering individuals and collectives alike. Through the adoption of <span style={{color: "#3A6ACF"}}>Blockchain </span> technology, it constructs a <span style={{color: "#3A6ACF"}}>decentralized </span>, <span style={{color: "#3A6ACF"}}>trustless</span>, and <span style={{color: "#3A6ACF"}}>transparent internet</span>. This environment empowers users with control over their data, financial autonomy, and the quality of their digital interactions. <span style={{color: "#3A6ACF"}}><br></br><br></br>Web3 </span> catalyzes <span style={{color: "#3A6ACF"}}>innovation</span>, democratizes financial services, and fosters new avenues for <span style={{color: "#3A6ACF"}}>cooperation</span> and <span style={{color: "#3A6ACF"}}>creativity</span>. With its capacity to redefine industries and societies, <span style={{color: "#3A6ACF"}}>Web3 </span> promises a vibrant <span style={{color: "#3A6ACF"}}>future</span> for the internet. <span style={{color: "#3A6ACF"}}>DeBros </span> is at the forefront, bringing you applications and technologies that look <span style={{color: "#3A6ACF"}}>beyond</span> the <span style={{color: "#3A6ACF"}}>horizon</span>, redefining the digital experience through <span style={{color: "#3A6ACF"}}>Web3</span>.
                  </h3>
                </SpotlightCard>
              </div>
            </div>
          </div>
          <TabStyleOne />
        </div>
      </div>

      {/* DeBros Developer DAO Vision Section Start */}
      <div className="rainbow-service-area rainbow-section-gap" style={{ backgroundColor: '#0a0a0a', color: 'white', paddingBottom: '80px' }}>
        <div className="container mt--40">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">The DeBros Vision</span>
                </h4>
                <h2 className="title mb--20">Building the Future: A Developer-Centric DAO</h2>
                <p className="description" style={{ maxWidth: '700px', margin: '0 auto 20px', fontSize: '1.6rem' }}>
                  Our vision is to create a thriving ecosystem where developers collaborate, innovate, and grow. The DeBros DAO empowers developers through cutting-edge tools and community-driven governance.
                </p>
              </div>
                        {/* CTA Button */}
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center mt-5 pt-3" data-sal="slide-up" data-sal-duration="700" data-sal-delay="500">
              <HashLink href="https://hub.debros.io" target="_blank" className="btn-default btn-large" style={{
                background: 'linear-gradient(95deg, #3A6ACF 15%, #5533ff 45%, #5533ff 75%, #3A6ACF 100%)',
                border: 'none',
                padding: '1px 35px',
                borderRadius: '8px', // Matched to card rounding
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 15px rgb(19 31 67) 1px 2px 13px 11px'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
              >
                Become a DeBros DEV!
              </HashLink>
            </div>
          </div>
            </div>
          </div>

          <div className="row justify-content-center g-5 mt--20 mb--40"> {/* g-5 for gap between cards */}
            {/* Step 1 Card */}
            <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="200">
              <SpotlightCard
                className="h-100" // Ensure cards have same height if content varies
                spotlightColor="rgba(58, 106, 207, 0.3)"
                padding="p-6" // Adjusted padding
                borderRadius="rounded-2xl" // Slightly less rounded
              >
                <div className="text-center">
                  <div className="mb-4">
                    {/* You can add an icon here if you have one */}
                    <span style={{ fontSize: '5rem', color: '#3A6ACF' }}>🌐</span>
                  </div>
                  <h3 className="mb-3">
                    <span style={{color: "#3A6ACF"}}>DeBros HUB</span>
                  </h3>
                  <p className="fs-5" style={{ color: '#ccc' }}>
                    Access our intuitive dashboard to publish your projects or discover and join exciting ventures from other developers and teams. A central hub for Web3 collaboration.
                  </p>
                </div>
              </SpotlightCard>
            </div>
            
            {/* Step 2 Card */}
            <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="300">
              <SpotlightCard
                className="h-100"
                spotlightColor="rgba(58, 106, 207, 0.3)"
                padding="p-6"
                borderRadius="rounded-2xl"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <span style={{ fontSize: '5rem', color: '#3A6ACF' }}>🗳️</span>
                  </div>
                  <h3 className="mb-3">
                    <span style={{color: "#3A6ACF"}}>Governance</span>
                  </h3>
                  <p className="fs-5" style={{ color: '#ccc' }}>
                    Utilize DeBros NFTs and tokens for governance rights within the DAO. Participate in decision-making and earn staking rewards for your contributions to the ecosystem.
                  </p>
                </div>
              </SpotlightCard>
            </div>
            
            {/* Step 3 Card */}
            <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-duration="700" data-sal-delay="400">
              <SpotlightCard
                className="h-100"
                spotlightColor="rgba(58, 106, 207, 0.3)"
                padding="p-6"
                borderRadius="rounded-2xl"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <span style={{ fontSize: '5rem', color: '#3A6ACF' }}>🎁</span>
                  </div>
                  <h3 className="mb-3">
                    <span style={{color: "#3A6ACF"}}>Exclusive Rewards</span>
                  </h3>
                  <p className="fs-5" style={{ color: '#ccc' }}>
                    Benefit from airdrops from new, innovative projects successfully launched via our dashboard. Get rewarded for being an active and early member of the DeBros community.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </div>


        </div>
      </div>
      {/* DeBros Developer DAO Vision Section End */}

      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src={bgShape} width={630} height={879} alt="Bg Shape" />
        </div>
      </div>

      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">DeBros Ecosystem and Software</span>
                </h4>
                <h2 className="title mb--20">
                  Together We Can Build
                  <br /> A Better WEB 3.0
                </h2>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <div className="collabration-image-section">
                <Image
                  src={isLightTheme ? SplitImg : DarkSplitImg}
                  width={1305}
                  height={712}
                  alt="collabration-image"
                  className="w-full h-auto sm:w-auto"
                />
                <div className="logo-section">
                  <div className="center-logo">
                    <Image
                      src={isLightTheme ? SplitLogo : DarkSplitLogo}
                      width={104}
                      height={143}
                      alt="Small Logo"
                      style={{ position: 'relative', zIndex: 2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="rainbow-accordion-area rainbow-section-gap" style={{ backgroundColor: '#0a0a0a', paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--40">
                <h2 className="title" style={{ color: 'white' }}>FAQ</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="rainbow-accordion-style accordion rainbow-section-gapBottom">
                <div className="accordion" id="accordionExamplea">
                  {AccordionData &&
                    AccordionData.accordion.map((data, index) => (
                      <FaqAccordion
                        {...data}
                        key={index}
                        acc={data}
                        num={index}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
