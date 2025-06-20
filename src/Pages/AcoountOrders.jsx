import React from "react";
import { Link } from "react-router-dom";
import noOrderImg from "../assets/images/account-no-order.png"; // adjust path as needed

const MyOrders = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Orders</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Orders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flat-spacing-13">
        <div className="container-7">
          {/* Sidebar button for mobile */}
          <div className="btn-sidebar-mb d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
              <i className="icon icon-sidebar" />
            </button>
          </div>

          <div className="main-content-account">
            {/* Sidebar navigation */}
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li><Link to="/account" className="text-sm link fw-medium my-account-nav-item">Dashboard</Link></li>
                <li><Link to="/orders" className="text-sm link fw-medium my-account-nav-item active">My Orders</Link></li>
                <li><Link to="/wishlist" className="text-sm link fw-medium my-account-nav-item">My Wishlist</Link></li>
                <li><Link to="/addresses" className="text-sm link fw-medium my-account-nav-item">Addresses</Link></li>
                <li><Link to="/details" className="text-sm link fw-medium my-account-nav-item">Account Details</Link></li>
                <li><Link to="/" className="text-sm link fw-medium my-account-nav-item">Log Out</Link></li>
              </ul>
            </div>

            {/* Orders Content */}
            <div className="my-acount-content account-orders">
              {/* No Orders Notice (toggle display based on data) */}
              <div className="account-no-orders-wrap">
                <img className="lazyload" src={noOrderImg} alt="No Orders" />
                <div className="display-sm fw-medium title">You haven’t placed any order yet</div>
                <div className="text text-sm">It’s time to make your first order</div>
                <Link to="/shop" className="tf-btn animate-btn d-inline-flex bg-dark-2 justify-content-center">
                  Shop Now
                </Link>
              </div>

              {/* Order History Table */}
              <div className="account-orders-wrap">
                <h5 className="title">Order History</h5>
                <div className="wrap-account-order">
                  <table>
                    <thead>
                      <tr>
                        <th className="text-md fw-medium">Order ID</th>
                        <th className="text-md fw-medium">Date</th>
                        <th className="text-md fw-medium">Status</th>
                        <th className="text-md fw-medium">Total</th>
                        <th className="text-md fw-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: "#12345", date: "15 May 2025", status: "Delivered", total: "$690 / 3 items" },
                        { id: "#23154", date: "16 May 2025", status: "Delivered", total: "$460 / 2 items" },
                        { id: "#12467", date: "17 May 2025", status: "On the way", total: "$920 / 4 items" },
                      ].map((order, index) => (
                        <tr key={index} className="tf-order-item">
                          <td className="text-md">{order.id}</td>
                          <td className="text-md">{order.date}</td>
                          <td className={`text-md ${order.status === "Delivered" ? "text-delivered" : "text-on-the-way"}`}>
                            {order.status}
                          </td>
                          <td className="text-md">{order.total}</td>
                          <td>
                            <a href="#order_detail" data-bs-toggle="modal" className="view-detail">Detail</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> {/* End .main-content-account */}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
