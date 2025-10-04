import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetMyOrderByIdQuery, useCancelOrderMutation } from "../../services/order/orderApi";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetailPage = () => {
  const { id } = useParams();
  const { data: order, isLoading, error, refetch } = useGetMyOrderByIdQuery(id);
const [cancelOrder, { isLoading: isCancelling }] = useCancelOrderMutation();
const [showModal, setShowModal] = useState(false);

const handleCancelClick = () => {
  setShowModal(true);
};

const confirmCancel = async () => {
  try {
    const response = await cancelOrder({ id: order.id }).unwrap();
    toast.success(response.message || "Order Cancelled!");
    await refetch(); // cancel ke baad latest status fetch karo
  } catch (error) {
    console.error("Cancel failed:", error);

    // 🔑 Specific error handling for "Order not found"
    const errorMessage =
      error?.data?.message?.toLowerCase().includes("not found")
        ? "Order not found!"
        : error?.data?.message ||
          error?.error ||
          "Cancel failed, please try again!";

    toast.error(errorMessage);
  } finally {
    setShowModal(false);
  }
};


  // shipment tracking
 

  if (error)
    return (
      <div className="container py-5">
        <div className="text-center py-5 text-danger">
          <Link to="/orders" className="btn btn-primary">Back to Orders</Link>
        </div>
      </div>
    );

  if (!order)
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <Link to="/orders" className="btn btn-primary">Back to Orders</Link>
        </div>
      </div>
    );

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/orders">My Orders</Link></li>
          <li className="breadcrumb-item active">Order Details</li>
        </ol>
      </nav>

      {/* Order Header */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h1 className="h4 mb-3">Order #{order.orderId || order._id}</h1>
              <p className="mb-1">
                <strong>Order Date:</strong>{" "}
                {new Date(order.createdAt || order.orderDate).toLocaleDateString()}
              </p>
             <div className="">
               <div className="mb-0">
                <strong>Status:</strong>
                <span
                  className={`  ms-2 text-md fw-medium ${
                    order.orderStatus === "Delivered"
                    ? "text-success"
                    : order.orderStatus === "Ordered"
                    ? "text-secondary"
                    : order.orderStatus === "Picked Up"
                    ? "text-info"
                    : order.orderStatus === "Out For Delivery"
                    ? "text-warning"
                    : order.orderStatus === "Cancelled"
                    ? "text-danger"
                    : "text-secondary"
                  }`}
                  >
                  {order.orderStatus}
                </span>
              </div>
              <div className="pt-1 d-flex ">
                  <strong className="">Shipment ID:</strong>

                  <strong className="text-dark ms-1">{order.shipments?.[0]?.waybill}</strong>


              </div>
             </div>



            
            </div>

            <div className="col-md-6 text-md-end">
              <Link to="/orders" className="btn btn-outline-secondary me-2">
                ← Back to My Orders
              </Link>

              {/* Cancel Button (agar status Cancelled/Delivered nahi hai) */}
              {!["Ordered", "Cancelled"].includes(order?.orderStatus) && (
  <button
    className="btn btn-outline-dark"
    onClick={handleCancelClick}
    disabled={isCancelling}
  >
    {isCancelling ? "Cancelling..." : "Cancel Order"}
  </button>
)}

            </div>
          </div>
          
        </div>
      </div>

      {/* Order Items */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Order Items</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="table-active">
                  <th>Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems?.map((item) => (
                  <tr key={item._id || item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.product?.imageVariants?.[0]?.imageUrl}
                          alt={item.product?.title}
                          className="me-3"
                          style={{ width: "60px", height: "60px", objectFit: "cover" }}
                        />
                        <div>
                          <h6 className="mb-0 text-capitalize fs-5">
                            {item.name || item.title}
                          </h6>
                          {item.selectedSize && (
                            <small className="text-muted">Size: {item.selectedSize}</small>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="text-center fw-bold">₹{item.price}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center fw-bold">₹{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header"><h6>Shipping Address</h6></div>
            <div className="card-body">
              {order ? (
                <>
                  <p className="mb-1">{order.shippingName}</p>
                  <p className="mb-1">{order.shippingAddress}</p>
                  <p className="mb-1">
                    {order.shippingCity}, {order.shippingState} {order.shippingPostalCode}
                  </p>
                  <p className="mb-0">{order.shippingCountry}</p>
                  <p className="mb-0 mt-2"><strong>Phone:</strong> {order.shippingPhone}</p>
                </>
              ) : (
                <p>No shipping address available</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header"><h6>Order Summary</h6></div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>₹{order.subtotal || order.totalAmount - (order.shippingPrice || 0)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Discount:</span>
                <span>₹{order.discount}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping-Rate:</span>
                <span>₹{order.shippingRate || 0}</span>
              </div>
              {order.tax && (
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax:</span>
                  <span>₹{order.tax}</span>
                </div>
              )}
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>₹{order.grandTotal || order.totalAmount}</span>
              </div>
              <div className="mt-3">
                <small className="text-muted">
                  Total Items: {order.orderItems?.length || 0}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
     {showModal && (
  <div
    className="modal fade show"
    style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
    onClick={() => setShowModal(false)}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm Cancel</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body">
          Are you sure you want to cancel order <strong>{order?.orderId}</strong>?
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
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

export default OrderDetailPage;
