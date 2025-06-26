import React from 'react';

const Orders = () => {
  // Sample orders data - in a real app, this would likely come from an API or state management
  const orders = [
    {
      id: '#12345',
      date: '15 May 2025',
      status: 'Delivered',
      statusClass: 'text-delivered',
      total: '$690 / 3 items'
    },
    {
      id: '#23154',
      date: '16 May 2025',
      status: 'Delivered',
      statusClass: 'text-delivered',
      total: '$460 / 2 items'
    },
    {
      id: '#12467',
      date: '17 May 2025',
      status: 'On the way',
      statusClass: 'text-on-the-way',
      total: '$920 / 4 items'
    }
  ];

  // State to track if user has orders (for demo purposes)
  const [hasOrders, setHasOrders] = React.useState(true);

  const toggleOrders = () => {
    setHasOrders(!hasOrders);
  };

  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Orders</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="index.php">Home</a>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Orders</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}
      
      {/* Main Content */}
      <div className="flat-spacing-13">
        <div className="container-7">
          {/* sidebar-account */}
          <div className="btn-sidebar-mb d-lg-none">
            <button 
              className="btn" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#mbAccount"
              onClick={(e) => {
                // In React, we'd typically manage this with state rather than data attributes
                e.preventDefault();
                console.log("Sidebar toggle clicked - implement sidebar state");
              }}
            >
              <i className="icon icon-sidebar" />
            </button>
          </div>
          {/* /sidebar-account */}
          
          {/* Section-acount */}
          <div className="main-content-account">
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li>
                  <a href="account-page.php" className="text-sm link fw-medium my-account-nav-item">Dashboard</a>
                </li>
                <li>
                  <a href="account-orders.php" className="text-sm link fw-medium my-account-nav-item active">My Orders</a>
                </li>
                <li>
                  <a href="wish-list.php" className="text-sm link fw-medium my-account-nav-item">My Wishlist</a>
                </li>
                <li>
                  <a href="account-addresses.php" className="text-sm link fw-medium my-account-nav-item">Addresses</a>
                </li>
                <li>
                  <a href="account-details.php" className="text-sm link fw-medium my-account-nav-item">Account Details</a>
                </li>
                <li>
                  <a href="index.php" className="text-sm link fw-medium my-account-nav-item">Log Out</a>
                </li>
              </ul>
            </div>
            
            <div className="my-acount-content account-orders">
              {/* For demo purposes, adding a toggle button to switch between views */}
              <button 
                onClick={toggleOrders} 
                className="btn btn-sm btn-secondary mb-3"
                style={{display: 'none'}} // Hidden by default, can be enabled for testing
              >
                Toggle Orders View
              </button>
              
              {!hasOrders ? (
                <div className="account-no-orders-wrap">
                  <img 
                    className="lazyload" 
                    data-src="images/account-no-order.png" 
                    src="images/account-no-order.png" 
                    alt="No orders" 
                  />
                  <div className="display-sm fw-medium title">You haven't placed any order yet</div>
                  <div className="text text-sm">It's time to make your first order</div>
                  <a href="shop-fullwidth.php" className="tf-btn animate-btn d-inline-flex bg-dark-2 justify-content-center">
                    Shop Now
                  </a>
                </div>
              ) : (
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
                        {orders.map((order, index) => (
                          <tr key={index} className="tf-order-item">
                            <td className="text-md">{order.id}</td>
                            <td className="text-md">{order.date}</td>
                            <td className={`text-md ${order.statusClass}`}>{order.status}</td>
                            <td className="text-md">{order.total}</td>
                            <td>
                              <a 
                                href="#order_detail" 
                                data-bs-toggle="modal" 
                                className="view-detail"
                                onClick={(e) => {
                                  // In React, we'd typically use state or a modal component
                                  e.preventDefault();
                                  console.log(`View details for order ${order.id}`);
                                }}
                              >
                                Detail
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* /Account */}
        </div>
      </div>
      {/* /Main Content */}
    </div>
  );
};

export default Orders;