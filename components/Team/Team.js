import React, { useEffect } from "react";
import Image from "next/image";
import Sal from "sal.js";

import TeamData from "../../data/team.json";

const Team = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <>
      <div className="rbt-team-area bg-color-1 mt--40 pb--0">
      <div className="container text-justify">
      <h3 className="theme-gradient w-600 mb--40">Mission and Vision</h3>
      <h4 className="title mb--4" style={{ textAlign: "justify", fontSize: "17px" }}>
  DeBros is not just a team; it's a collective of like-minded "brothers" — developers, engineers, and researchers — united by a common vision to craft decentralized applications and solutions in the realms of blockchain, AI, and Web3. We believe in equality among us, collaborating without geographical boundaries or nationality, driven by a shared goal of equitable and decentralized provision of technology and applications.
  <br></br>
  <br></br>The DeBros concept is an invitation to collaboration, where individuals come together to turn ideas into reality within the decentralized tech landscape. Whether it's pioneering blockchain solutions, enhancing AI with ethical considerations, or exploring the vast possibilities of Web3, our aim is to make technology accessible and fair for all.
  <br></br>
  <br></br>If you're curious to learn more about how you can join this movement or explore our projects, connect with us on <a href="https://t.me/debrosportal" target="_blank" style={{color:"#2196f3"}} rel="noopener noreferrer">Telegram</a>. Together, we're not just building technology; we're shaping the future of a decentralized world.
  
</h4>

                <h3 className="theme-gradient w-600 mb--40 mt--40">A Small Brief About Us</h3>
 <h4 className="title mb--4" style={{ textAlign: "justify", fontSize: "17px" }}>
 Our team is a powerhouse of Blockchain and Web3 expertise, committed to delivering innovative, secure, and transformative solutions. With an extensive knowledge of decentralized technologies, we excel in developing smart contracts, crafting user-friendly decentralized applications (dApps), and architecting robust blockchain infrastructure. Our technical mastery combined with a passion for innovation ensures we push the boundaries, delivering cutting-edge solutions that leverage the full potential of decentralization.
                </h4>
                <h3 className="theme-gradient w-600 mb--40 mt--40">The Team</h3>
      </div>
      <div className="container">
  <div className="row row--15 mt_dec--30 mb--40" style={{ display: "flex", justifyContent: "center" }}>
    {TeamData &&
      TeamData.team.slice(0, 3).map((data, index) => (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
          key={index}
          style={{ maxWidth: "300px" }}
        >
          <div className="team" style={{ padding: "10px" }}>
            <div className="thumbnail" style={{ width: "100%", height: "auto" }}>
              <Image
                src={data.img}
                width={300}
                height={250}
                alt="Team Images"
              />
            </div>
            <div className="content">
              <h4 className="title">{data.name}</h4>
              <p className="designation">{data.profission}</p>
            </div>
            <ul className="social-icon">
              
              
              {data.socials.twitter && (
                <li>
                  <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <img src="/images/logo/x.png" alt="X" style={{ width: "50px" }} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
  </div>
</div>

      </div>

    </>
  );
};

export default Team;
