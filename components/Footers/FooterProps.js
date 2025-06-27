import HashLink from "../Common/HashLink";
import React from "react";

const FooterProps = ({ list }) => {
  return (
    <>
      {list.map((item, itemIndex) => (
        <div className="widget-menu-bottom" key={itemIndex}>
          <h4 className="title">{item.title}</h4>
          <div className="inner">
            <ul className="footer-link">
              {item.innerItem.map((inner, i) => (
                <li key={i}>
                  <HashLink href={inner.link} className="footer-link-item">
                    <img
                      src={inner.imgSrc}
                      alt={inner.alt || "Footer Icon"}
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "8px",
                        width: "auto",
                        height: "auto",
                        maxWidth: "90px",
                        maxHeight: "90px",
                      }}
                    />
                    <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                      {inner.alt}
                    </span>
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterProps;

