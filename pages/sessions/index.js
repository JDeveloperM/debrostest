import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";

const SessionsPage = () => {
  return (
    <>
      <PageHead title="Sessions" />

      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftDashboardSidebar />

            <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content center-width">
                <div className="rbt-dashboard-content rainbow-section-gap">
                  <div className="banner-area">
                    <div className="settings-area">
                      <h3 className="title">Sessions</h3>
                    </div>
                  </div>
                  <div className="content-page pb--50">
                    <div className="chat-box-list">
                      <div className="content">
                        <p>Sessions will be available soon.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Context>
      </main>
    </>
  );
};

export default SessionsPage;
