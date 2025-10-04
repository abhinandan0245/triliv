import React, { useState } from "react";
import { Collapse, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetContactusQuery } from "../../../services/contact/contactusApi";
import { LogOut, User } from "lucide-react";

const MobileMenu = ({ show, handleClose, toggleLogin, categories, isLoading , isAuthenticated,
  user,  
  handleLogout }) => {
  const [openCategories, setOpenCategories] = useState(false);

  
 // ✅ Fetch contact info
  const { data: contactData, isLoading: isContactLoading } = useGetContactusQuery();
  const contact = contactData?.data;


  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" backdrop={false} className="canvas-mb">

      {/* Close button */}
      <button
        className="icon-close icon-close-popup"
        onClick={handleClose}
        aria-label="Close"
      ></button>

      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb">
              <li className="nav-mb-item">
                <Link to="/" className="item-link mb-menu-link" onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className="nav-mb-item">
                <Link to="/shop" className="item-link mb-menu-link" onClick={handleClose}>
                  Shop
                </Link>
              </li>

              {/* Categories Dropdown */}
              <li className="nav-mb-item">
                <button
                  className="item-link mb-menu-link d-flex justify-content-between align-items-center"
                  onClick={() => setOpenCategories(!openCategories)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "0",
                  }}
                >
                  Categories
                  <i className={`icon ${openCategories ? "icon-minus" : "icon-plus"}`}></i>
                </button>

                <Collapse in={openCategories}>
                  <ul className="submenu list-unstyled ps-2">
                    {isLoading ? (
                      <li>Loading...</li>
                    ) : categories?.length > 0 ? (
                      categories.map((cat) => (
                        <li key={cat.id} className="nav-mb-item">
                          <Link
                            to={`/shop/category/${cat.id}`}
                            className="item-link mb-menu-link"
                            onClick={handleClose}
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No categories</li>
                    )}
                  </ul>
                </Collapse>
              </li>

              <li className="nav-mb-item">
                <Link to="/aboutus" className="item-link mb-menu-link" onClick={handleClose}>
                  Our Story
                </Link>
              </li>
              <li className="nav-mb-item">
                <Link to="/contact" className="item-link mb-menu-link" onClick={handleClose}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer area */}
          <div className="mb-other-content">
            <div className="group-icon">
              <Link to="/wish-list" className="site-nav-icon" onClick={handleClose}>
                <i className="icon icon-heart"></i>
                Wishlist
              </Link>

      

                {isAuthenticated ? (
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    handleClose();
                    handleLogout();
                  }}
                  // style={{ background: "none", border: "none", padding: 0 }}
                >
                  <LogOut className="" size={16}/> 
                   LogOut
                </button>
              ) : (
                <button
                  className="site-nav-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                    toggleLogin();
                  }}
                  // style={{ background: "none", border: "none", padding: 0 }}
                >
                 <User/>
                  Login
                </button>
              )}
               
        

            </div>

            <div className="mb-notice">
              <Link to="/contact-us" className="text-need" onClick={handleClose}>
                Need Help?
              </Link>
            </div>

           {/* Dynamic Contact Info */}
            <div className="mb-contact">
              {isContactLoading ? (
                <p>Loading contact info...</p>
              ) : (
                <>
                  {contact?.address && <p>Address: {contact.address}</p>}
                  <ul className="mb-info">
                    {contact?.email && (
                      <li>
                        Email: <b className="fw-medium">{contact.email}</b>
                      </li>
                    )}
                    {contact?.mobile && (
                      <li>
                        Phone: <b className="fw-medium">{contact.mobile}</b>
                      </li>
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Offcanvas>
  );
};

export default MobileMenu;
