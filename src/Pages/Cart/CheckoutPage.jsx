import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../services/order/orderApi";
import { cartApi, useGetCartQuery } from "../../services/cart/cartApi";
import { useGetUserProfileQuery } from "../../services/auth/authApi";
import {
  useGetAllCouponsQuery,
  useApplyCouponMutation,
} from "../../services/coupon/couponApi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();
  const user = useSelector((state) => state.auth.user);
  const userId = user?.id ?? user?._id ?? null;

  // Get cart data
  const { data: cartData, isLoading: isLoadingCart } = useGetCartQuery(userId, {
    skip: !userId,
  });

  const { data: couponsData, isLoading: isCouponsLoading } =
    useGetAllCouponsQuery();
  const [applyCouponApi] = useApplyCouponMutation();
  const [manualCoupon, setManualCoupon] = useState("");

  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleApplyCoupon = async (couponCode) => {
    try {
      const response = await applyCouponApi({
        code: couponCode,
        orderValue: subtotal,
      }).unwrap();

      if (response?.data) {
        setAppliedCoupon(response.data);

        let discount = 0;
        if (response.data.discountType === "percentage") {
          discount = (subtotal * response.data.discountValue) / 100;
        } else if (response.data.discountType === "flat") {
          discount = parseFloat(response.data.discountValue);
        }
        setDiscountAmount(discount);
        toast.success("Coupon applied successfully 🎉");

        return true;
      }
    } catch (err) {
      console.error("Apply coupon failed", err);
      toast.error(err?.data?.message || "Coupon not valid");
    }
  };

  const [shippingRate, setShippingRate] = useState(0);
  const [showCouponModal, setShowCouponModal] = useState(false);

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

  const isFieldInvalid = (field) =>
  !formData[field] || formData[field].trim() === "";


  // Calculate order totals for sidebar display
  const products =
    cartData?.cart?.map((item) => ({
      productId: item.productId,
      title: item.title || item.product?.title,
      price: item.price,
      size: item.size,
      image: item.image || item.product?.imageVariants?.[0]?.url,
      quantity: item.quantity,
      qtyPrice: item.qtyPrice,
   
    })) || [];

  const discount = discountAmount;


  const round = (value) => Math.round(value);

  const subtotal1 =
    cartData?.subtotal ??
    products.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const subtotal2  = subtotal1 - subtotal1 / (1 + 0.05)

    const subtotal = subtotal1 / (1 + 0.05)

  const subtotalRounded = round(subtotal1);

  const discountedSubtotal = (subtotalRounded / ( 1 + 0.05)) - discount;
  const discountedSubtotalRounded = round(discountedSubtotal);

  const baseTotal =
    discountedSubtotal + discountedSubtotal * 0.05;

  const tax = cartData?.tax ?? ( discountedSubtotal *  0.05);

  const shipping = cartData?.shipping ?? shippingRate ?? 0;

  const grandTotal1 = baseTotal + shipping;
  const grandTotal= Math.round(grandTotal1);
  const grandTotalRoundDiff = grandTotal - grandTotal1;
  const shift = grandTotal - Math.floor(grandTotal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoadingCart || !cartData) return;

    // ✅ FRONTEND VALIDATION
  const requiredFields = [
    "shippingName",
    "shippingEmail",
    "shippingAddress",
    "shippingCity",
    "shippingState",
    "shippingPostalCode",
    "shippingCountry",
    "shippingPhone",
  ];

  for (let field of requiredFields) {
    if (!formData[field] || formData[field].trim() === "") {
      toast.error(`Please fill all Details`);
      return;
    }
  }

  if (!shippingRate) {
    toast.error("Shipping rate not calculated yet!");
    return;
  }



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

      // ✅ Immediately clear cart cache and refetch from backend
      dispatch(cartApi.util.invalidateTags(["Cart"]));

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
      toast.error(error)
      navigate(
        `/thankyou/error?status=failed&msg=${
          error?.data?.msg || "Order creation failed"
        }`
      );
    }
  };

 useEffect(() => {
  if (formData.shippingPostalCode && products.length > 0) {
    // ✅ Total weight calculate with size logic
    const totalWeight = products.reduce((sum, item) => {
      let sizeStr = (item.size || "").toLowerCase().trim();
      let sizeNum = 0;

      if (sizeStr.includes("ltr") || sizeStr.includes("l")) {
        sizeNum = 1000; // 1ltr => 1000 ml
      } else if (sizeStr.includes("500")) {
        sizeNum = 500; // 500 ml
      } else {
        sizeNum = 0; // unknown size
      }

      let finalWeight;
      if (sizeNum === 500) {
        finalWeight = 530; // grams
      } else if (sizeNum === 1000) {
        finalWeight = 980; // grams
      } else {
        finalWeight = 500; // default grams
      }

      // ✅ product ki quantity ke hisaab se weight (grams → kg)
      return sum + item.quantity * (finalWeight / 1000);
    }, 0);

    console.log("📦 Total Weight (kg):", totalWeight);

    axios
      .post("https://backend.triliv.in/api/shipment/cost", {
        fromPin: "302021", // warehouse ka pincode
        toPin: formData.shippingPostalCode,
        weight: totalWeight, // ✅ size se nikla hua weight
        paymentType: formData.paymentMethod === "cod" ? "COD" : "Pre-paid",
      })
      .then((res) => {
        if (res.data.success) {
          const rate = res.data.response?.[0]?.total_amount || 0;
          setShippingRate(rate);
        }
      })
      .catch((err) => {
        console.error("Shipping API error:", err);
      });
  }
}, [formData.shippingPostalCode, products, formData.paymentMethod]);

  // Show loading state while cart is loading
  if (isLoadingCart) {
    return <div>Loading cart...</div>;
  }

  // Show error if no cart data
  if (!cartData) {
    return <div>Error loading cart data</div>;
  }

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "https://backend.triliv.in/api/paymentcc/ccavRequestHandler",
        {
          name: "Abhi",
          email: "abhi@example.com",
          mobile: "9876543210",
        },
        {
          headers: { "Content-Type": "application/json" },
          responseType: "text", // 👈 IMPORTANT: HTML return aayega
        }
      );

      // CCAvenue form HTML aayega
      const win = window.open("", "_self"); // same tab
      win.document.write(response.data);
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };










  const isCheckoutReady = 
  !isLoadingCart && 
  formData.shippingName &&
  formData.shippingCountry &&
  formData.shippingAddress &&
  formData.shippingCity &&
  formData.shippingState &&
  formData.shippingPostalCode &&
  formData.shippingPhone &&
  formData.shippingEmail &&
  shippingRate



  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Checkout</h4>
            {/* <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current">Checkout</div>
            </div> */}
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
                  <div className="title text-lg fw-medium">Billing Address</div>
                  <div className="grid-2 mb_16">
                    <div className="tf-field style-2 style-3">
                      <input
                         className={`tf-field-input tf-input ${isFieldInvalid("shippingName") ? "border-danger" : ""}`}
                        id="shippingName"
                        placeholder=" "
                        type="text"
                        name="shippingName"
                        value={formData.shippingName}
                        onChange={handleChange}
                        required
                      />
                      <label className="tf-field-label" htmlFor="shippingName">
                        Name
                      </label>
                    </div>
                  </div>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input
                       className={`tf-field-input tf-input ${isFieldInvalid("shippingCountry") ? "border-danger" : ""}`}
                      id="shippingCountry"
                      type="text"
                      name="shippingCountry"
                      placeholder=" "
                      value={formData.shippingCountry}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="shippingCountry">
                      Country
                    </label>
                  </fieldset>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input
                       className={`tf-field-input tf-input ${isFieldInvalid("shippingAddress") ? "border-danger" : ""}`}
                      id="shippingAddress"
                      type="text"
                      name="shippingAddress"
                      placeholder=" "
                      value={formData.shippingAddress}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="shippingAddress">
                      Address
                    </label>
                  </fieldset>
                  <div className="grid-3 mb_16">
                    <fieldset className="tf-field style-2 style-3">
                      <input
                         className={`tf-field-input tf-input ${isFieldInvalid("shippingCity") ? "border-danger" : ""}`}
                        id="shippingCity"
                        type="text"
                        name="shippingCity"
                        placeholder=" "
                        value={formData.shippingCity}
                        onChange={handleChange}
                        required
                      />
                      <label className="tf-field-label" htmlFor="shippingCity">
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
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>

                        {/* Union Territories */}
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu">
                          Dadra and Nagar Haveli and Daman and Diu
                        </option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                      </select>
                    </div>

                    <fieldset className="tf-field style-2 style-3">
                      <input
                         className={`tf-field-input tf-input ${isFieldInvalid("shippingPostalCode") ? "border-danger" : ""}`}
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
                      className={`tf-field-input tf-input ${isFieldInvalid("shippingPhone") ? "border-danger" : ""}`}
                      id="shippingPhone"
                      type="text"
                      name="shippingPhone"
                      placeholder=" "
                      value={formData.shippingPhone}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="shippingPhone">
                      Phone
                    </label>
                  </fieldset>
                </div>

                {/* --- Contact Info --- */}
                <div className="box-ip-contact">
                  <div className="title">
                    <div className="text-lg fw-medium">Contact Information</div>
                  </div>
                  <fieldset className="tf-field style-2 style-3">
                    <input
                      className={`tf-field-input tf-input ${isFieldInvalid("shippingEmail") ? "border-danger" : ""}`}
                      id="shippingEmail"
                      placeholder=" "
                      type="text"
                      name="shippingEmail"
                      value={formData.shippingEmail}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="shippingEmail">
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
                  <div className="payment-method-box" id="payment-method-box">
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
                          Cash on delivery (Extra Charge Applies)
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
                  <div className="title text-lg fw-medium">In your cart</div>
                  <ul className="list-order-product">
                    {cartData?.cart?.map((item) => (
                      <li className="order-item" key={item.productId}>
                        <figure className="img-product">
                          <img
                            src={
                              item.image ||
                              item.product?.imageVariants?.[0]?.url ||
                              "images/product/placeholder.jpg"
                            }
                            alt={item.title || item.product?.title}
                          />
                          <span className="quantity">{item.quantity}</span>
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
                    {appliedCoupon && (
                      <ul className="total-item text-sm">
                        <li className="total-item text-sm d-flex justify-content-between">
                          <span> Applied Coupon:</span>
                          <span className="price-sub fw-medium">
                            <strong>{appliedCoupon.couponCode}</strong>
                            <button
                              type="button"
                              className="btn btn-link text-danger ms-2 p-0"
                              onClick={() => {
                                setAppliedCoupon(null);
                                setDiscountAmount(0);
                                setManualCoupon("");
                              }}
                            >
                              ✕
                            </button>
                          </span>
                        </li>

                        <li className="total-item text-sm d-flex justify-content-between">
                          <span>Discount:</span>
                          <span className="price-sub fw-medium">
                            -₹{discountAmount.toFixed(2) || "0.00"}
                          </span>
                        </li>
                      </ul>
                    )}

                    {!appliedCoupon && (
                      <li className="total-item text-sm d-flex justify-content-between">
                        <span>Coupons</span>
                        <button
                          type="button"
                          className="btn btn-link p-0 text-primary fw-medium"
                          onClick={() => setShowCouponModal(true)} // popup toggle
                        >
                          APPLY COUPON
                        </button>
                      </li>
                    )}
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Shipping:</span>
                      <span className="price-ship fw-medium">
                        ₹{shippingRate.toFixed(2) || "0.00"}
                      </span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Tax:</span>
                      <span className="price-tax fw-medium">
                        ₹{tax.toFixed(2) || "0.00"}
                      </span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Round Off:</span>
                      <span className="price-tax fw-medium">
                        {grandTotalRoundDiff >= 0
                          ? `+₹${grandTotalRoundDiff.toFixed(2)}`
                          : `-₹${Math.abs(grandTotalRoundDiff).toFixed(2)}`}
                      </span>
                    </li>
                  </ul>

                {showCouponModal && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <div className="mb-3 d-flex">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Coupon Code"
                            value={manualCoupon}
                            onChange={(e) => setManualCoupon(e.target.value)}
                          />
                          <button
                            className="btn btn-primary ms-2"
                            onClick={async () => {
                              if (!manualCoupon.trim()) {
                                toast.error("Please enter a coupon code");
                                return;
                              }

                              const success = await handleApplyCoupon(
                                manualCoupon
                              );
                              if (success) setShowCouponModal(false); // ✅ sirf success pe band hoga
                            }}
                          >
                            APPLY
                          </button>
                        </div>

                        {/* ✅ Coupon List with scroll */}
                        <div
                          className="coupon-list"
                          style={{
                            maxHeight: "200px", // approx 2 cards ki height
                            overflowY: "auto",
                          }}
                        >
                          {isCouponsLoading && <p>Loading coupons...</p>}
                          {couponsData?.data?.map((coupon) => (
                            <div
                              key={coupon.id}
                              className="coupon-card p-3 mb-2 d-flex justify-content-between align-items-center bg-light"
                            >
                              <div>
                                <h6 className="text-lg">{coupon.couponCode}</h6>
                                <p className="mb-0 text-muted text-xs">
                                  {coupon.discountType === "percentage"
                                    ? `Your Savings: ${coupon.discountValue}%`
                                    : `Your Savings: ₹${coupon.discountValue}`}
                                </p>
                                <small className="text-muted text-xs">
                                  Min. order: ₹{coupon.minOrderValue}
                                </small>
                              </div>
                              <button
                                className="btn btn-success"
                                onClick={() => {
                                  handleApplyCoupon(coupon.couponCode);
                                  setShowCouponModal(false);
                                }}
                              >
                                APPLY
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="subtotal text-lg fw-medium d-flex justify-content-between">
                    <span>Total:</span>
                    <span className="total-price-order">
                      ₹{grandTotal?.toFixed(2) || "0.00"}
                    </span>
                  </div>
                  <div className="btn-order">
                    <button
                      type="button"
                      disabled={isCreatingOrder }
                      className="tf-btn btn-dark2 animate-btn w-100 text-transform-none"
                      onClick={handleSubmit}
                      // onClick={handleCheckout}
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