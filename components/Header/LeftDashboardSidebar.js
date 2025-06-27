import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import avatar from "../../public/images/team/team-01sm.jpg";
import light from "../../public/images/light/switch/sun-01.svg";
import dark from "../../public/images/light/switch/vector.svg";

import { useAppContext } from "@/context/Context";

const LeftSidebar = () => {
  const router = useRouter();
  const { shouldCollapseLeftbar, isLightTheme, toggleTheme } = useAppContext();

  const isActive = (href) => router.pathname === href;
  return (
    <>
      <div
        className={`rbt-left-panel popup-dashboardleft-section ${
          shouldCollapseLeftbar ? "collapsed" : ""
        }`}
      >
        <div className="rbt-default-sidebar">
          <div className="inner">
            <div className="content-item-content">
              <div className="rbt-default-sidebar-wrapper">
                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    <li>
                      <Link
                        className={isActive("/profile-details") ? "active" : ""}
                        href="/profile-details"
                      >
                        <i className="feather-user"></i>
                        <span>Profile Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isActive("/appearance") ? "active" : ""}
                        href="/appearance"
                      >
                        <i className="feather-settings"></i>
                        <span>Appearance</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isActive("/sessions") ? "active" : ""}
                        href="/sessions"
                      >
                        <i className="feather-clock"></i>
                        <span>Sessions</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="rbt-sm-separator"></div>
                  <div className="mainmenu-nav">
                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                      <li className="has-submenu">
                        <a
                          className="collapse-btn collapsed"
                          data-bs-toggle="collapse"
                          href="#collapseExampleMenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExampleMenu"
                        >
                          <i className="feather-plus-circle"></i>
                          <span>Setting</span>
                        </a>
                        <div className="collapse" id="collapseExampleMenu">
                          <ul className="submenu rbt-default-sidebar-list">
                            <li>
                              <Link
                                href="/plans-billing"
                                className={isActive("/plans-billing") ? "active" : ""}
                              >
                                <i className="feather-credit-card"></i>
                                <span>Plans & Billing</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/application"
                                className={isActive("/application") ? "active" : ""}
                              >
                                <i className="feather-grid"></i>
                                <span>Applications</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/notification"
                                className={isActive("/notification") ? "active" : ""}
                              >
                                <i className="feather-bell"></i>
                                <span>Notifications</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/help">
                          <i className="feather-award"></i>
                          <span>Help & FAQ</span>
                        </Link>
                      </li>
                    </ul>

                    <div className="rbt-sm-separator"></div>
                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                      <li>
                        <Link
                          href="/release-notes"
                          className={isActive("/release-notes") ? "active" : ""}
                        >
                          <i className="feather-bell"></i>
                          <span>Release notes</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/terms-policy"
                          className={isActive("/terms-policy") ? "active" : ""}
                        >
                          <i className="feather-briefcase"></i>
                          <span>Terms & Policy</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="subscription-box">
            <div className="inner">
              <Link href="/profile-details" className="autor-info">
                <div className="author-img active">
                  <Image
                    className="w-100"
                    width={49}
                    height={48}
                    src={avatar}
                    alt="Author"
                  />
                </div>
                <div className="author-desc">
                  <h6>RainbowIT</h6>
                  <p>trentadam@net</p>
                </div>
                <div className="author-badge">Free</div>
              </Link>
              <div className="btn-part">
                <Link href="/pricing" className="btn-default btn-border">
                  Upgrade To Pro
                </Link>
              </div>
            </div>
          </div>
          <div className="switcher-btn-gr inner-switcher">
            <button
              className={`${isLightTheme ? "active" : ""}`}
              onClick={toggleTheme}
            >
              <Image src={dark} alt="Switcher Image" />
              <span className="text">Dark</span>
            </button>
            <button
              className={`${!isLightTheme ? "active" : ""}`}
              onClick={toggleTheme}
            >
              <Image src={light} alt="Switcher Image" />
              <span className="text">Light</span>
            </button>
          </div>
          <p className="subscription-copyright copyright-text text-center b3  small-text">
            © 2024
            <Link
              className="ps-2"
              href="https://themeforest.net/user/rainbow-themes/portfolio"
            >
              Rainbow Themes
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
