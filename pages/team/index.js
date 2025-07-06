import React from "react";
import Context from "@/context/Context";

import PageHead from "../Head";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import Team from "@/components/Team/Team";

const TeamPage = () => {

  const meta = {
    title: "DeBros | About Us",
      description: "A Brotherhood Pioneering a New Era In Decentralized Development",
      ogImage: "https://debros.io/images/debrospreview.png",
      url: "https://debros.io",
  };


  return (
    <>
      <PageHead
         title={meta.title}
        description={meta.description}
        ogImage={meta.ogImage}
        url={meta.url}
      />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb
            title="About Us"
            text="About"
            useHexagonBanner={true}
          />

          <Team />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default TeamPage;
