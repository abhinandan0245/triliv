import React from "react";

const Marquee = () => (
  <div className="overflow-hidden">
    <div className="topbar-center marquee-wrapper">
      <div className="initial-child-container">
        {[...Array(5)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="marquee-child-item">
              <p>Celebrate Our Launch With Us ! Get 10% Off on Every Order. Use Copuon: Launch10</p>
            </div>
            
            {/* <div className="marquee-child-item">
              <p></p>
            </div>
            
            <div className="marquee-child-item">
              <p></p>
            </div> */}
            <div className="marquee-child-item">
              <span className="dot" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default Marquee;
