import React from 'react';

const Marquee = () => (
  <div className="overflow-hidden">
    <div className="topbar-center marquee-wrapper">
      <div className="initial-child-container">
        {[...Array(5)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="marquee-child-item">
              <p>Return extended to 60 days</p>
            </div>
            <div className="marquee-child-item"><span className="dot" /></div>
            <div className="marquee-child-item">
              <p>Life-time Guarantes</p>
            </div>
            <div className="marquee-child-item"><span className="dot" /></div>
            <div className="marquee-child-item">
              <p>Limited-Time Offer</p>
            </div>
            <div className="marquee-child-item"><span className="dot" /></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default Marquee;