import React from 'react';

const AnnouncementBar = () => {
  const announcements = [
    "Return extended to 60 days",
    "Life-time Guarantee",
    "Limited-Time Offer"
  ];

  return (
    <div className="tf-topbar bg-light-blue topbar-bg">
      <div className="container">
        <div className="topbar-wraper">
          <div className="overflow-hidden">
            <div className="topbar-center marquee-wrapper">
              <div className="initial-child-container">
                {[...Array(5)].map((_, i) => (
                  <React.Fragment key={i}>
                    {announcements.map((text, idx) => (
                      <React.Fragment key={idx}>
                        <div className="marquee-child-item">
                          <p>{text}</p>
                        </div>
                        {idx < announcements.length - 1 && (
                          <div className="marquee-child-item">
                            <span className="dot"></span>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;