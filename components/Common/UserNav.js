import React from "react";
import HashLink from "./HashLink";
import { useHashRouter } from "../../utils/hashRouter";

const UserNav = ({ title }) => {
  const router = useHashRouter();

  const isActive = (href) => router.pathname === href;

  // Define dashboard items directly since they're missing from header.json
  const dashboardItems = [
    { link: "/profile-details", text: "Profile Details" },
    { link: "/appearance", text: "Appearance" },
    { link: "/sessions", text: "Sessions" },
    { link: "/plans-billing", text: "Plans & Billing" },
    { link: "/application", text: "Applications" },
    { link: "/notification", text: "Notifications" },
    { link: "/help", text: "Help & FAQ" }
  ];

  return (
    <>
      <div className="banner-area">
        <div className="settings-area">
          <h3 className="title">{title}</h3>

          <ul className="user-nav">
            {dashboardItems.map((data, index) => (
              <li key={index}>
                <HashLink
                  href={data.link}
                  className={isActive(data.link) ? "active" : ""}
                >
                  <span>{data.text}</span>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserNav;
