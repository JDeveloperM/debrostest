import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";

const TermsPolicyPage = () => {
  return (
    <>
      <PageHead title="Privacy Policy" />

      <main className="page-wrapper">
        <Context>
        <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
           
            <PrivacyPolicy />
          
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
