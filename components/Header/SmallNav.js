import Image from "next/image";
import HashLink from "../Common/HashLink";
import { useHashRouter } from "../../utils/hashRouter";

import SmallNavItem from "../../data/header.json";

const SmallNav = () => {
  const router = useHashRouter();

  const isActive = (href) => router.pathname === href;
  return (
    <>
      <nav className="mainmenu-nav">
        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
          <li>
            <HashLink href="/dashboard">
              <i className="feather-monitor"></i>
              <span>Welcome</span>
            </HashLink>
          </li>
          <li>
            <HashLink href="/plans-billing">
              <i className="feather-briefcase"></i>
              <span>Manage Subsription</span>
            </HashLink>
          </li>
        </ul>
        <div className="rbt-sm-separator"></div>
        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
          {SmallNavItem &&
            SmallNavItem.smallNavItem.slice(0, 7).map((data, index) => (
              <li key={index}>
                <HashLink
                  className={
                    isActive(data.link)
                      ? "active"
                      : "" || data.isDisable
                      ? "disabled"
                      : ""
                  }
                  href={data.link}
                >
                  <Image
                    src={data.img}
                    width={35}
                    height={35}
                    alt="AI Generator"
                  />
                  <span>{data.text}</span>
                  {data.badge !== "" ? (
                    <div className="rainbow-badge-card badge-sm ml--10">
                      {data.badge}
                    </div>
                  ) : (
                    ""
                  )}
                </HashLink>
              </li>
            ))}
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
                  {SmallNavItem &&
                    SmallNavItem.smallNavItem
                      .slice(7, 14)
                      .map((data, index) => (
                        <li key={index}>
                          <HashLink href={data.link}>
                            <i className={`feather-${data.icon}`}></i>
                            <span>{data.text}</span>
                          </HashLink>
                        </li>
                      ))}
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                <i className="feather-award"></i>
                <span>Help & FAQ</span>
              </a>
            </li>
          </ul>

          <div className="rbt-sm-separator"></div>
          <ul className="dashboard-mainmenu rbt-default-sidebar-list">
            <li>
              <HashLink href="/release-notes">
                <i className="feather-bell"></i>
                <span>Release notes</span>
              </HashLink>
            </li>
            <li>
              <HashLink href="/terms-policy">
                <i className="feather-briefcase"></i>
                <span>Terms & Policy</span>
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SmallNav;
