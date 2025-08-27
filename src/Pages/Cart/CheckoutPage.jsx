import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../services/order/orderApi";
import { useGetCartQuery } from "../../services/cart/cartApi";
import { useGetUserProfileQuery } from "../../services/auth/authApi";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [createOrder, { isLoading: isCreatingOrder }] = useCreateOrderMutation();
  const user = useSelector((state) => state.auth.user);
  const userId = user?.id ?? user?._id ?? null;

  // Get cart data
  const { data: cartData, isLoading: isLoadingCart } = useGetCartQuery(userId, {
    skip: !userId,
  });

  // Get customer profile data
  const { data: profileData } = useGetUserProfileQuery();

  const [formData, setFormData] = useState({
    shippingName: "",
    shippingEmail: "",
    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingPostalCode: "",
    shippingCountry: "",
    shippingPhone: "",
    paymentMethod: "cod",
  });

  const profile = profileData?.customer || profileData?.data;

  // Pre-fill form when profile data loads
  useEffect(() => {
    if (profile) {
      setFormData((prev) => ({
        ...prev,
        shippingName: profile.name || "",
        shippingEmail: profile.email || "",
        shippingAddress: profile.shippingAddress || "",
        shippingCity: profile.city || "",
        shippingState: profile.state || "",
        shippingPostalCode: profile.pinCode || "",
        shippingCountry: profile.country || "",
        shippingPhone: profile.mobile || "",
      }));
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate order totals for sidebar display
  const products =
    cartData?.cart?.map((item) => ({
      productId: item.productId,
      title: item.title || item.product?.title,
      price: item.price,
      size: item.size || item.product?.size,
      image: item.image || item.product?.imageVariants?.[0]?.url,
      quantity: item.quantity,
      qtyPrice: item.qtyPrice,
    })) || [];

  const subtotal =
    cartData?.subtotal ??
    products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = cartData?.tax ?? subtotal * 0.1;
  const shippingRate = cartData?.shipping ?? 10;
  const discount = cartData?.discount ?? 0;
  const grandTotal =
    cartData?.total ?? subtotal + tax + shippingRate - discount;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoadingCart || !cartData) return;

    try {
      const orderData = {
        ...formData,
        products,
        subtotal,
        tax,
        shippingRate,
        discount,
        grandTotal,
      };

      const response = await createOrder(orderData).unwrap();

      // COD → success redirect
      if (formData.paymentMethod === "cod") {
        navigate(`/thankyou/${response.order.orderId}?status=success`);
        return;
      }

      // CCAvenue → redirect via hidden form
      if (formData.paymentMethod === "ccavenue" && response?.gateway) {
        const { actionUrl, encRequest, accessCode } = response.gateway;

        const form = document.createElement("form");
        form.method = "POST";
        form.action = actionUrl;

        const enc = document.createElement("input");
        enc.type = "hidden";
        enc.name = "encRequest";
        enc.value = encRequest;

        const acc = document.createElement("input");
        acc.type = "hidden";
        acc.name = "access_code";
        acc.value = accessCode;

        form.appendChild(enc);
        form.appendChild(acc);
        document.body.appendChild(form);
        form.submit();
        return;
      }

      // fallback
      navigate(`/thankyou/error?status=failed`);
    } catch (error) {
      console.error("Order creation failed:", error);
      navigate(
        `/thankyou/error?status=failed&msg=${
          error?.data?.msg || "Order creation failed"
        }`
      );
    }
  };

  // Show loading state while cart is loading
  if (isLoadingCart) {
    return <div>Loading cart...</div>;
  }

  // Show error if no cart data
  if (!cartData) {
    return <div>Error loading cart data</div>;
  }

  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Checkout</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current">Checkout</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}

      {/* Cart Section */}
      <div className="flat-spacing-13">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <form className="tf-checkout-cart-main">
                {/* --- Shipping Info --- */}
                <div className="box-ip-checkout">
                  <div className="title text-lg fw-medium">Checkout</div>
                  <div className="grid-2 mb_16">
                    <div className="tf-field style-2 style-3">
                      <input
                        className="tf-field-input tf-input"
                        id="shippingName"
                        placeholder=" "
                        type="text"
                        name="shippingName"
                        value={formData.shippingName}
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="tf-field-label"
                        htmlFor="shippingName"
                      >
                        Name
                      </label>
                    </div>
                  </div>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input
                      className="tf-field-input tf-input"
                      id="shippingCountry"
                      type="text"
                      name="shippingCountry"
                      placeholder=" "
                      value={formData.shippingCountry}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="tf-field-label"
                      htmlFor="shippingCountry"
                    >
                      Country
                    </label>
                  </fieldset>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input
                      className="tf-field-input tf-input"
                      id="shippingAddress"
                      type="text"
                      name="shippingAddress"
                      placeholder=" "
                      value={formData.shippingAddress}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="tf-field-label"
                      htmlFor="shippingAddress"
                    >
                      Address
                    </label>
                  </fieldset>
                  <div className="grid-3 mb_16">
                    <fieldset className="tf-field style-2 style-3">
                      <input
                        className="tf-field-input tf-input"
                        id="shippingCity"
                        type="text"
                        name="shippingCity"
                        placeholder=" "
                        value={formData.shippingCity}
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="tf-field-label"
                        htmlFor="shippingCity"
                      >
                        City
                      </label>
                    </fieldset>
                    <div className="tf-select select-square">
                      <select
                        name="shippingState"
                        id="shippingState"
                        value={formData.shippingState}
                        onChange={handleChange}
                        required
                      >
                        <option value="">State</option>
                        <option value="alabama">Alabama</option>
                        <option value="alaska">Alaska</option>
                        <option value="california">California</option>
                        <option value="hawaii">Hawaii</option>
                        <option value="texas">Texas</option>
                        <option value="georgia">Georgia</option>
                      </select>
                    </div>
                    <fieldset className="tf-field style-2 style-3">
                      <input
                        className="tf-field-input tf-input"
                        id="shippingPostalCode"
                        type="text"
                        name="shippingPostalCode"
                        placeholder=" "
                        value={formData.shippingPostalCode}
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="tf-field-label"
                        htmlFor="shippingPostalCode"
                      >
                        Zipcode/Postal
                      </label>
                    </fieldset>
                  </div>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input
                      className="tf-field-input tf-input"
                      id="shippingPhone"
                      type="text"
                      name="shippingPhone"
                      placeholder=" "
                      value={formData.shippingPhone}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="tf-field-label"
                      htmlFor="shippingPhone"
                    >
                      Phone
                    </label>
                  </fieldset>
                </div>

                {/* --- Contact Info --- */}
                <div className="box-ip-contact">
                  <div className="title">
                    <div className="text-lg fw-medium">
                      Contact Information
                    </div>
                  </div>
                  <fieldset className="tf-field style-2 style-3">
                    <input
                      className="tf-field-input tf-input"
                      id="shippingEmail"
                      placeholder=" "
                      type="text"
                      name="shippingEmail"
                      value={formData.shippingEmail}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="tf-field-label"
                      htmlFor="shippingEmail"
                    >
                      Email
                    </label>
                  </fieldset>
                </div>

                {/* --- Payment Info --- */}
                <div className="box-ip-payment">
                  <div className="title">
                    <div className="text-lg fw-medium mb_4">Payment</div>
                    <p className="text-sm text-main">
                      All transactions are secure and encrypted.
                    </p>
                  </div>
                  <div
                    className="payment-method-box"
                    id="payment-method-box"
                  >
                    <div className="payment-item mb_16">
                      <label
                        htmlFor="delivery"
                        className="payment-header collapsed"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="delivery"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleChange}
                        />
                        <span className="pay-title text-sm">
                          Cash on delivery
                        </span>
                      </label>
                    </div>
                    <div className="payment-item paypal-payment mb_16">
                      <label
                        htmlFor="ccavenue"
                        className="payment-header collapsed"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="ccavenue"
                          value="ccavenue"
                          checked={formData.paymentMethod === "ccavenue"}
                          onChange={handleChange}
                        />
                        <span className="pay-title text-sm">
                          PayNow (Credit Card, Debit Card, UPI)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="tf-page-cart-sidebar">
                <div className="cart-box order-box">
                  <div className="title text-lg fw-medium">
                    In your cart
                  </div>
                  <ul className="list-order-product">
                    {cartData?.cart?.map((item) => (
                      <li
                        className="order-item"
                        key={item.productId}
                      >
                        <figure className="img-product">
                          <img
                            src={
                              item.image ||
                              item.product?.imageVariants?.[0]?.url ||
                              "images/product/placeholder.jpg"
                            }
                            alt={item.title || item.product?.title}
                          />
                          <span className="quantity">
                            {item.quantity}
                          </span>
                        </figure>
                        <div className="content">
                          <div className="info">
                            <p className="name text-sm fw-medium">
                              {item.title || item.product?.title}
                            </p>
                            {item.size && (
                              <span className="variant">{item.size}</span>
                            )}
                          </div>
                          <span className="price text-sm fw-medium">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul className="list-total">
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Subtotal:</span>
                      <span className="price-sub fw-medium">
                        ₹{subtotal.toFixed(2) || "0.00"}
                      </span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Discount:</span>
                      <span className="price-discount fw-medium">
                        -₹{discount.toFixed(2) || "0.00"}
                      </span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Shipping:</span>
                      <span className="price-ship fw-medium">
                        ₹{shippingRate.toFixed(2) || "0.00"}
                      </span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Tax:</span>
                      <span className="price-tax fw-medium">
                        ₹{tax?.toFixed(2) || "0.00"}
                      </span>
                    </li>
                  </ul>
                  <div className="subtotal text-lg fw-medium d-flex justify-content-between">
                    <span>Total:</span>
                    <span className="total-price-order">
                      ₹{grandTotal?.toFixed(2) || "0.00"}
                    </span>
                  </div>
                  <div className="btn-order">
                    <button
                      type="button"
                      disabled={isCreatingOrder || isLoadingCart}
                      className="tf-btn btn-dark2 animate-btn w-100 text-transform-none"
                      onClick={handleSubmit}
                    >
                      {isCreatingOrder ? "Processing..." : "Place order"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Cart Section */}
    </div>
  );
};

export default CheckoutPage;
