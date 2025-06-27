import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import TermsPolicy from "@/components/TermsPolicy/TermsPolicy";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";

const TermsPolicyPage = () => {
  return (
    <>
      <PageHead title="Terms of Use" />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
           
          <TermsPolicy />
          
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
