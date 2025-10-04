import React, { useState } from "react";
import { useCancelOrderMutation, useGetMyOrdersQuery } from "../../services/order/orderApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MobileMenuHeader from "../../components/ui/Modal/mobileMenuHeader";

const Orders = () => { 
    const { data: orders = [], isLoading, isError } = useGetMyOrdersQuery();
     const [cancelOrder, { isLoading: isCancelling }] = useCancelOrderMutation();

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleCancelClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

   const confirmCancel = async () => {
    if (!selectedOrder) return;
    try {
     const response = await cancelOrder({ id: selectedOrder.id }).unwrap(); 
      console.log("Order cancelled:", selectedOrder.id);
      toast.success(response.message || "Order Cancelled !")
      // yahan tum toast ya notification dikha sakte ho
    } catch (error) {
      console.error("Cancel failed:", error);
      const errorMessage =
    error?.data?.message || 
    error?.error || 
    "Cancel failed, please try again!";

  toast.error(errorMessage);
      // yahan bhi toast ya error msg dikha sakte ho
    } finally {
      setShowModal(false);
      setSelectedOrder(null);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };
  
    const hasOrders = orders.length > 0;


  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Orders</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span />
              </div>
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
        
          {/* /sidebar-account */}

          {/* Section-acount */}
          <div className="main-content-account">
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li>
                  <a
                    href="myaccount"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="orders"
                    className="text-sm link fw-medium my-account-nav-item active"
                  >
                    My Orders
                  </a>
                </li>
                
                <li>
                  <a
                    href="addresses"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Addresses
                  </a>
                </li>
                <li>
                  <a
                    href="accountdetails"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Account Details
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </div>


               {/* menu for mobile */}
                           <MobileMenuHeader/>

            <div className="my-acount-content account-orders">
            {isLoading ? (
              <div></div>
            ) : isError ? (
              <div></div>
            ) : !hasOrders ? (
              <div className="account-no-orders-wrap">
                <img className="lazyload" data-src="images/account-no-order.png" src="images/account-no-order.png" alt="No orders" />
                <div className="display-sm fw-medium title">You haven't placed any order yet</div>
                <div className="text text-sm">It's time to make your first order</div>
                <a href="shop" className="tf-btn animate-btn d-inline-flex bg-dark-2 justify-content-center">Shop Now</a>
              </div>
            ) : (
              <div className="account-orders-wrap">
                <h5 className="title">Order History</h5>
                <div className="wrap-account-order">
                  <table>
                    <thead>
                      <tr>
                        <th className="text-md fw-medium">Image</th>
                        <th className="text-md fw-medium">Order ID</th>
                        <th className="text-md fw-medium">Date</th>
                        <th className="text-md fw-medium">Status</th>
                        <th className="text-md fw-medium">Total</th>
                        <th className="text-md fw-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="tf-order-item">
<td className="text-md">
  <img
    src={order.orderItems?.[0]?.product?.imageVariants?.[0]?.imageUrl || 'placeholder.png'}
    alt={order.orderItems?.[0]?.product?.title || 'Product Image'}
    style={{ width: "60px", height: "80px", objectFit: "cover" }}
    className="rounded-2"
  />
</td>
<td className="text-md">{order.orderId}</td>
<td className="text-md">{new Date(order.createdAt).toLocaleDateString()}</td>
<td className={`text-md ₹{order.orderStatus === 'Delivered' ? 'text-delivered' : ''}`}>
  {order.orderStatus}
</td>
<td className="text-md">{`₹${order.grandTotal} / ${order.orderItems.length} items`}</td>

                          <td>
                            <div className="d-flex gap-2">
                              <Link
                              to={`/orders/${order._id || order.orderId}`}
                              // data-bs-toggle="modal"
                              className="view-detail"
                            
                            >
                              Detail
                            </Link>

                            {/* cancel popup  */}
  {/* Cancel button sirf tab dikhana jab status Ordered/Cancelled na ho */}
    {!["Ordered", "Cancelled"].includes(order.orderStatus) && (
      <button
        className="view-detail btn btn-outline-secondary"
        onClick={() => handleCancelClick(order)}
      >
        Cancel
      </button>
    )}
                            </div>
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
      {/* confirmation popup order  */}

      {showModal && (
  <div
    className="modal fade show"
    style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
    onClick={closeModal}   // 🔑 backdrop click -> modal close
  >
    <div
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()} // 🔑 andar click pe modal band na ho
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm Cancel</h5>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body">
          Are you sure you want to cancel order{" "}
          <strong>{selectedOrder?.orderId}</strong>?
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={closeModal}>
            No
          </button>
          <button className="btn btn-danger" onClick={confirmCancel} disabled={isCancelling}>
            {isCancelling ? "Cancelling..." : "Yes, Cancel"}
          </button>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default Orders;
