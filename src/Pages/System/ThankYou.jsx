import React, { useState } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { useGetMyOrderByIdQuery } from "../../services/order/orderApi";
// import successimg2 from "../../assets/images/successimg2.png"
import successimg from "../../assets/images/success.svg"

const OrderSuccess = () => {
  const { id } = useParams();   // gets ORD382311
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetMyOrderByIdQuery(id);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "1",
    message: "",
  });

  const status = searchParams.get("status");

  if (!id) {
    navigate("/");
    return null;
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading order</p>;

  const order = data;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    // TODO: Send feedback API
  };

  const getVariant = (item) => {
  if (!item.product?.priceVariants) return {};

  let variants = item.product.priceVariants;

  // parse if it is string
  if (typeof variants === "string") {
    try {
      variants = JSON.parse(variants);
    } catch (err) {
      console.error("Error parsing priceVariants JSON:", err);
      return {};
    }
  }

  // If size matches, return variant, otherwise fallback to first variant
  const variant =
    variants.find((v) => v.size === item.size) || variants[0] || {};

  return {
    size: variant.size || item.size,
    price: variant.price || item.qtyPrice,
    originalPrice: variant.originalPrice || variant.price || item.qtyPrice,
    discountAmount: variant.discountAmount || 0,
    discountPercentage: variant.discountPercentage || 0,
  };
};

  return (
    <div>
      {/* Page Title */}
      <div className="flat-spacing pb-0">
        <div className="container">
          <div className="title-success-order text-center">
            {/* <img className="icon" src={successimg2} alt={successimg2} /> */}
            <img className="icon" src={successimg} alt={successimg} />
            <div className="box-title">
              <h3 className="title">
                {status === "success"
                  ? "Thank you for your order!"
                  : "Payment Failed"}
              </h3>
              <p className="text-md text-main">
                {status === "success" ? (
                  <>
                    You are awesome, {order?.shippingName || "Customer"}! Thank
                    you so much for your purchase.
                  </>
                ) : (
                  <>Oops! Something went wrong with your payment.</>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Info */}
      {status === "success" && order && (
        <div className="flat-spacing-29">
          <div className="container">
            <div className="row">
              {/* Left */}
              <div className="col-xl-8">
                <div className="tf-main-success">
                  {/* Order Summary */}
                  <div className="box-progress-order">
                    <div className="order-progress-item order-code text-center">
                      <div className="title text-sm fw-medium">Order number</div>
                      <div className="text-md fw-medium code">#{order.orderId}</div>
                    </div>
                    <div className="order-progress-item order-date text-center">
                      <div className="title text-sm fw-medium">Order date</div>
                      <div className="text-md fw-medium date">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="order-progress-item order-total text-center">
                      <div className="title text-sm fw-medium">Order total</div>
                      <div className="text-md fw-medium total">₹{order.grandTotal}</div>
                    </div>
                    <div className="order-progress-item payment-method text-center">
                      <div className="title text-sm fw-medium">Payment method</div>
                      <div className="text-md fw-medium metod">{order.paymentMethod}</div>
                    </div>
                  </div>
                  <div className="box-timeline-order">
                  <div className="timeline-item active text-center">
                    <div className="box-icon">
                      <span className="icon icon-confirm"></span>
                    </div>
                    <div className="content">
                      <div className="title fw-medium text-md">Confirmed</div>
                      <span className="date fw-medium text-sm text-main">
                        10 Oct 2025
                      </span>
                    </div>
                  </div>
                  <div className="line-time"></div>
                  <div className="timeline-item text-center">
                    <div className="box-icon">
                      <span className="icon icon-shipped"></span>
                    </div>
                    <div className="content">
                      <div className="title fw-medium text-md">Shipped</div>
                      <span className="date fw-medium text-sm text-main">
                        20 Oct 2025
                      </span>
                    </div>
                  </div>
                  <div className="line-time"></div>
                  <div className="timeline-item text-center">
                    <div className="box-icon">
                      <span className="icon icon-location"></span>
                    </div>
                    <div className="content">
                      <div className="title fw-medium text-md">Delivered</div>
                      <span className="date fw-medium text-sm text-main">
                        22 Oct 2025
                      </span>
                    </div>
                  </div>
                </div>

                  {/* Shipping */}
                  <div className="box-ship-address mt-4">
                    <div className="row justify-content-between">
                      <div className="col-12 col-sm-5">
                        <div className="ship-address-item">
                          <div className="text-lg fw-medium title">Shipping address</div>
                          <ul className="list-address">
                            <li className="text-sm text-main">{order.shippingName}</li>
                            <li className="text-sm text-main">{order.shippingAddress}</li>
                            <li className="text-sm text-main">
                              {order.shippingCity}, {order.shippingState}
                            </li>
                            <li className="text-sm text-main">{order.shippingCountry}</li>
                            <li className="text-sm text-main">{order.shippingPostalCode}</li>
                            <li className="text-sm text-main">{order.shippingEmail}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="col-xl-4">
                <div className="tf-page-cart-sidebar sidebar-order-success">
                  {/* Order Items */}
                  <div className="cart-box order-box">
                    <div className="title text-lg fw-medium">Order Details</div>
                    <ul className="list-order-product">
                      {order.orderItems?.map((item) => {
                        const variant = getVariant(item);
                        return (
                          <li key={item.id} className="order-item">
                            <figure className="img-product">
                              <img
                                src={item.product?.imageVariants?.[0]?.imageUrl}
                                alt={item.product?.title}
                              />
                              <span className="quantity">{item.quantity}</span>
                            </figure>
                            <div className="content">
                              <div className="info">
                                <p className="name text-sm fw-medium">{item.product?.title}</p>
                                {variant.size && <span className="variant">{variant.size}</span>}
                              </div>
                              {variant.price && (
                                <span className="price text-sm fw-medium">
                                  ₹{variant.price}
                                </span>
                              )}
                              
                              
                              {variant.originalPrice && (
                                <span className="price text-sm text-decoration-line-through">
                                  ₹{variant.originalPrice}
                                </span>
                              )}
                              {/* {variant.price && (
                                <span className="price text-sm fw-medium">
                                  ₹{variant.price * item.quantity}
                                </span>
                              )} */}
                              <span className="quantity">{item.total}</span>
                              {/* {variant.discountAmount && (
                                <span className="price text-sm text-success">
                                  -₹{variant.discountAmount} ({variant.discountPercentage}%)
                                </span>
                              )} */}
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Totals */}
                    <ul className="list-total">
                      <li className="total-item text-sm d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span className="price-sub fw-medium">₹{order.subtotal}</span>
                      </li>
                      <li className="total-item text-sm d-flex justify-content-between">
                        <span>Discount:</span>
                        <span className="price-discount fw-medium">-₹{order.discount}</span>
                      </li>
                      <li className="total-item text-sm d-flex justify-content-between">
                        <span>Shipping:</span>
                        <span className="price-ship fw-medium">₹{order.shippingRate}</span>
                      </li>
                      <li className="total-item text-sm d-flex justify-content-between">
                        <span>Tax:</span>
                        <span className="price-tax fw-medium">₹{order.tax}</span>
                      </li>
                    </ul>

                    <div className="subtotal text-lg fw-medium d-flex justify-content-between">
                      <span>Total:</span>
                      <span className="total-price-order">₹{order.grandTotal}</span>
                    </div>
                  </div>

                  {/* Feedback form */}
                  <div className="cart-box">
                    <form className="feedback-box" onSubmit={handleSubmit}>
                      <h6 className="title">Give us a feedback</h6>
                      <p className="text text-main text-sm">
                        Let us know what you think about the shopping experience, and get a gift coupon for the next shopping.
                      </p>
                      <fieldset className="tf-field style-2 style-3 mb_16">
                        <input
                          className="tf-field-input tf-input"
                          id="name"
                          type="text"
                          name="name"
                          value={feedback.name}
                          onChange={handleInputChange}
                          placeholder=" "
                        />
                        <label className="tf-field-label" htmlFor="name">Name</label>
                      </fieldset>
                      <fieldset className="tf-field style-2 style-3 mb_16">
                        <input
                          className="tf-field-input tf-input"
                          id="email"
                          type="email"
                          name="email"
                          value={feedback.email}
                          onChange={handleInputChange}
                          placeholder=" "
                        />
                        <label className="tf-field-label" htmlFor="email">Email</label>
                      </fieldset>
                      <div className="box-exp mb_16">
                        <p className="mb_6 text-main text-sm">How was your experience?</p>
                        <div className="list-exp">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <label key={`exp${num}`} htmlFor={`exp${num}`} className="check-exp">
                              <input
                                type="radio"
                                id={`exp${num}`}
                                className="tf-check-rounded"
                                name="rating"
                                value={num}
                                checked={feedback.rating === num.toString()}
                                onChange={handleInputChange}
                              />
                              <span className="text-exp text-sm">{num}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <fieldset className="mb_16">
                        <textarea
                          className="style-2"
                          id="desc"
                          name="message"
                          value={feedback.message}
                          onChange={handleInputChange}
                          placeholder="Share your experience..."
                        />
                      </fieldset>
                      <button type="submit" className="tf-btn btn-dark2 w-100 animate-btn">Send</button>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Right */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSuccess;
 