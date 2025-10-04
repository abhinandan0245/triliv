import React from "react";
import SocialIcons from "./SocialIcons";
import Marquee from "./Marquee";

const TopBar = ({ isHomePage }) => (
  <div
    className={`tf-topbar ${
      isHomePage ? "bg-light-blue" : "bg-dark-5"
    } topbar-bg`}
  >
    <div className="container">
      <div className="topbar-wraper">
        {isHomePage && (
          <div className="d-none d-xl-block flex-shrink-0">
            {/* <SocialIcons /> */}
          </div>
        )}
        <Marquee />
      </div>
    </div>
  </div>
);

export default TopBar;
