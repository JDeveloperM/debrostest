import { useEffect, useState } from "react";
import Head from "next/head";
import { HashRouterProvider, useHashRouter, useHashRouterLoading } from "../utils/hashRouter";
import RouteRenderer from "../components/Common/RouteRenderer";
import Loading from "./loading";

import "bootstrap/scss/bootstrap.scss";
// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/fontawesome-all.min.css";
import "../public/css/plugins/animation.css";
import "../node_modules/sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
// ========= Plugins CSS END =========

import "../public/scss/style.scss";
import "../public/css/brotherhood.css";
import "../public/css/custom-tabs.css";
import "../public/css/publish-project.css";
import "../public/css/project-card.css";
import "../public/css/loading-screen.css";
import "../public/css/custom-accordion.css";
import "../public/css/policy-pages.css";

// Inner App component that uses hash router
function AppContent() {
  const router = useHashRouter();
  const loading = useHashRouterLoading();

  // Add this effect to detect homepage and add a class
  useEffect(() => {
    // Check if current route is homepage
    const isHomePage = router.pathname === '/' || router.pathname === '';

    // Add or remove the class based on whether we're on the homepage
    if (isHomePage) {
      document.body.classList.add('homepage-view');
    } else {
      document.body.classList.remove('homepage-view');
    }

    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('homepage-view');
    };
  }, [router.pathname]);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        {/* Default Head Metadata (can be overridden per page) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DeBros - Decentralized Development</title>
        <meta name="description" content="DeBros - A Brotherhood Pioneering a New Era In Decentralized Development" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      {loading ? <Loading /> : <RouteRenderer />}
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <HashRouterProvider>
      <AppContent />
    </HashRouterProvider>
  );
}
