import React from "react";
import Context from "@/context/Context";

import PageHead from "../Head"; // ✅ Ensure correct import path

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Roadmap from "@/components/Roadmap/Roadmap";
import BackToTop from "@/pages/backToTop"; // ✅ Fix import path if needed

const RoadmapPage = () => {
  // ✅ SEO-Optimized Metadata
  const meta = {
    title: "DeBros | Roadmap",
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

          {/* ✅ Fix Video Path: Use absolute URL or public/ folder */}
          <Breadcrumb
            title="Our Roadmap"
            text="Roadmap"
            useHexagonBanner={true}
          />

          <Roadmap />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default RoadmapPage;
