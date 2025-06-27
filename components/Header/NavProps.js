import HashLink from "../Common/HashLink";
import { useHashRouter } from "../../utils/hashRouter";
import React from "react";

const NavProps = ({ list }) => {
  const router = useHashRouter();
  const isActive = (href) => router.pathname === href;
  return (
    <>
      <div className="col-lg-3 single-mega-item">
        <ul className="mega-menu-item">
          {list &&
            list.map((item, i) => (
              <li key={i}>
                {item.heading ? (
                  <h3 className="rbt-short-title">{item.heading}</h3>
                ) : (
                  <HashLink
                    className={`${item.isComing ? "disabled" : ""} ${
                      isActive(item.link) ? "active" : ""
                    }`}
                    href={item.link}
                  >
                    <span>{item.text}</span>
                    {item.badge ? (
                      <div className="rainbow-badge-card badge-sm ml--5">
                        {item.badge}
                      </div>
                    ) : (
                      ""
                    )}
                  </HashLink>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default NavProps;
