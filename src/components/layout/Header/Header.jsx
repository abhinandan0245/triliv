import React from 'react';

const TopBar = () => {
  const announcements = [
    "Return extended to 60 days",
    "Life-time Guarantees",
    "Limited-Time Offer"
  ];

  return (
    <div className="tf-topbar bg-light-blue topbar-bg">
      <div className="container">
        <div className="topbar-wraper">
          <div className="d-none d-xl-block flex-shrink-0">
            <ul className="tf-social-icon topbar-left">
              <li><a href="https://www.facebook.com/" className="social-item social-facebook"><i className="icon icon-fb"></i></a></li>
              <li><a href="https://www.instagram.com/" className="social-item social-instagram"><i className="icon icon-instagram"></i></a></li>
              <li><a href="https://x.com/" className="social-item social-x"><i className="icon icon-x"></i></a></li>
              <li><a href="https://www.snapchat.com/" className="social-item social-snapchat"><i className="icon icon-snapchat"></i></a></li>
            </ul>
          </div>
          <div className="overflow-hidden">
            <div className="topbar-center marquee-wrapper">
              <div className="initial-child-container">
                {[...Array(5)].map((_, i) => (
                  <React.Fragment key={`announcement-group-${i}`}>
                    {announcements.map((text, j) => (
                      <React.Fragment key={`announcement-${i}-${j}`}>
                        <div className="marquee-child-item">
                          <p>{text}</p>
                        </div>
                        {j < announcements.length - 1 && (
                          <div className="marquee-child-item"><span className="dot"></span></div>
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

const MainHeader = () => {
  const navItems = [
    { path: "index.php", label: "Home" },
    { path: "product.php", label: "Shop" },
    { path: "about-us.php", label: "Our Story" },
    { path: "contact.php", label: "Contact US" }
  ];


  
  const iconItems = [
    { id: "search", icon: "search", action: "#search", dataToggle: "modal" },
    { id: "account", icon: "user", action: "#login", dataToggle: "offcanvas" },
    { id: "wishlist", icon: "heart", action: "wish-list.php", count: 0 },
    { id: "cart", icon: "cart", action: "#shoppingCart", dataToggle: "offcanvas", count: 2, pl: true }
  ];

  return (
    <header id="header" className="header-default header-absolute header-white header-uppercase">
      <div className="container">
        <div className="row wrapper-header align-items-center">
          <div className="col-md-4 col-3 d-xl-none">
            <a href="#mobileMenu" className="mobile-menu" data-bs-toggle="offcanvas" aria-controls="mobileMenu">
              <i className="icon icon-categories1"></i>
            </a>
          </div>
          <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
            <nav className="box-navigation text-center style-space">
              <ul className="box-nav-menu justify-content-start">
                {navItems.map((item, index) => (
                  <li key={index} className="menu-item">
                    <a href={item.path} className="item-link">
                      {item.label}
                      <i className="icon"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 col-md-4 col-6 text-xxl-center">
            <a href="index.php" className="logo-header">
              <img src="/images/logo1.png" alt="logo" className="logo" />
            </a>
          </div>
          <div className="col-xxl-5 col-xl-4 col-md-4 col-3">
            <ul className="nav-icon d-flex justify-content-end align-items-center">
              {iconItems.map((item) => (
                <li key={item.id} className={`nav-${item.id} ${item.pl ? 'pl' : ''}`}>
                  <a 
                    href={item.action} 
                    className="nav-icon-item"
                    {...(item.dataToggle ? { "data-bs-toggle": item.dataToggle } : {})}
                  >
                    <i className={`icon icon-${item.icon}`}></i>
                    {item.count !== undefined && <span className="count-box">{item.count}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header = () => {
  return (
    <>
      <TopBar />
      <MainHeader />
    </>
  );
};

export default Header;