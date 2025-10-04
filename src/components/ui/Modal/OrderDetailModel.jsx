import React from "react";
import { useGetMyOrderByIdQuery } from "../../../services/order/orderApi";

const OrderDetailModal = ({ id, onClose }) => {
  const { data: order, isLoading, error } = useGetMyOrderByIdQuery(id);

  if (isLoading) {
    return (
      <div className="modal-backdrop fade show d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) return null;

  return (
    <>
      {/* backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      {/* modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        onClick={onClose} // background click
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()} // prevent close inside
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order #{order.id}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>
                Status: <strong>{order.status}</strong>
              </p>

              <h6 className="mt-4">Products</h6>
              <div className="order-items-list">
                {order.orderItems.map((item) => (
                  <div key={item.id} className="d-flex align-items-center border p-2 mb-2 rounded">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-thumbnail me-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <div>
                      <p className="mb-1 fw-semibold">{item.title}</p>
                      <p className="mb-1 text-muted">Size: {item.size || "N/A"}</p>
                      <p className="mb-1 text-muted">Qty: {item.quantity}</p>
                      <p className="mb-0">
                        ₹{item.price} × {item.quantity} ={" "}
                        <strong>₹{item.total}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <div className="me-auto">
                <p className="mb-1">Total Items: {order.orderItems.length}</p>
                <h5 className="mb-0">Grand Total: ₹{order.totalAmount}</h5>
              </div>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailModal;
