
const NavIcons = () => (
  
  <ul className="nav-icon d-flex justify-content-end align-items-center">
    <li className="nav-search">
      <a href="D:\Coding\React\Intern-Vidhaalay\Triliv\src\components\ui\Modal\Search.jsx" data-bs-toggle="modal" className="nav-icon-item">
        <i className="icon icon-search" />
      </a>
    </li>
    <li className="nav-account">
      <a href="#login" data-bs-toggle="offcanvas" className="nav-icon-item">
        <i className="icon icon-user" />
      </a>
    </li>
    <li className="nav-wishlist">
      <a href="wish-list" className="nav-icon-item">
        <i className="icon icon-heart" />
        <span className="count-box">{wishlistCount}</span>
      </a>
    </li>
    <li className={`nav-cart ${isHomePage ? 'pl' : ''}`}>
      <a href="#shoppingCart" data-bs-toggle="offcanvas" className="nav-icon-item">
        <i className="icon icon-cart" />
        <span className="count-box">{isHomePage ? 2 : cartCount}</span>
      </a>
    </li>
  </ul>
);

export default NavIcons;