import NavigationMenu from './NavigationMenu';
import NavIcons from './NavIcons';

const MainHeader = () => (
  <header id="header" className="header-default header-absolute header-white header-uppercase">
    <div className="container">
      <div className="row wrapper-header align-items-center">
        <div className="col-md-4 col-3 d-xl-none">
          <a href="#mobileMenu" className="mobile-menu" data-bs-toggle="offcanvas" aria-controls="mobileMenu">
            <i className="icon icon-categories1" />
          </a>
        </div>
        
        <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
          <nav className="box-navigation text-center style-space">
            <NavigationMenu />
          </nav>
        </div>
        <div className="col-xl-2 col-md-4 col-6 text-xxl-center">
          <a href="/" className="logo-header">
            <img src="images/logo1.png" alt="logo" className="logo" />
          </a>
        </div>
        <div className="col-xxl-5 col-xl-4 col-md-4 col-3">
          <NavIcons cartCount={2} wishlistCount={0} />
        </div>
      </div>
    </div>
  </header>
);

export default MainHeader;