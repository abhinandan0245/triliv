import React, { useState, useEffect, useMemo } from "react";


import avt1 from "@/assets/images/avt-1.png";
import { useSelector } from "react-redux";
import { useGetCartQuery, useRemoveFromCartMutation, useUpdateCartQuantityMutation } from "../../services/cart/cartApi";
import { getGuestCart, removeFromGuestCart, updateGuestCartQuantity } from "../../utils/guestCart";
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Shopping = () => {
 const user = useSelector(state => state.auth.user);
  const userId = user?.id ?? user?._id ?? null;

  // Cart API hooks
  const { 
    data: serverData, 
    isLoading: serverLoading, 
    refetch 
  } = useGetCartQuery(userId, {
    skip: !userId
  });
  
  const [updateCartQuantity, { isLoading: isUpdating }] = useUpdateCartQuantityMutation();
  const [removeFromCart, { isLoading: isRemoving }] = useRemoveFromCartMutation();

  // Guest cart state
  const [guestItems, setGuestItems] = useState(() => getGuestCart());

  // Form states
  const [giftWrap, setGiftWrap] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Sync guest cart when auth changes or localStorage updates
  useEffect(() => {
    if (!userId) setGuestItems(getGuestCart());
    
    const handleStorageChange = () => {
      setGuestItems(getGuestCart());
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [userId]);

  // Normalize cart items for display - match the popup structure
  const cartItems = useMemo(() => {
    if (userId) {
      const rows = serverData?.cart || [];
      return rows.map((row) => ({
        cartId: row.cartId ?? row.id,
        productId: row.productId,
        title: row.title,
        price: Number(row.price || 0),
        originalPrice: Number(row.originalPrice || row.price || 0),
        image: row.image || "/default-thumb.jpg",
        size: row.size,
        quantity: Number(row.quantity || 1),
        isServer: true,
        raw: row,
      }));
    } else {
      return guestItems.map((it) => ({
        cartId: `${it.productId}-${it.size}`,
        productId: it.productId,
        title: it.name,
        price: Number(it.price || 0),
        originalPrice: Number(it.originalPrice || it.price || 0),
        image: it.image || "/default-thumb.jpg",
        size: it.size,
        quantity: Number(it.quantity || 1),
        isServer: false,
        raw: it,
      }));
    }
  }, [serverData, guestItems, userId]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
  const total = subtotal + (giftWrap ? 10 : 0);

  // Initialize Swiper
//  / Fixed Swiper initialization
  useEffect(() => {
    const initializeSwipers = () => {
      const swipers = document.querySelectorAll(".tf-swiper");
      swipers.forEach((el) => {
        try {
          const swiperConfig = el.getAttribute("data-swiper");
          if (swiperConfig) {
            const config = JSON.parse(swiperConfig.replace(/'/g, '"'));
            new Swiper(el, {
              ...config,
              modules: [Navigation, Pagination]
            });
          }
        } catch (error) {
          console.error("Error initializing Swiper:", error);
        }
      });
    };

    const timer = setTimeout(initializeSwipers, 100);
    return () => clearTimeout(timer);
  }, [cartItems]);


  // Handle quantity changes - match popup functionality
  const handleQuantityChange = async (item, delta) => {
    const newQty = item.quantity + delta;
    
    if (newQty <= 0) {
      await handleRemove(item);
      return;
    }

    if (item.isServer) {
      try {
        await updateCartQuantity({
          customerId: userId,
          productId: item.productId,
          size: item.size,
          quantity: newQty
        }).unwrap();
        refetch();
        toast.success("Quantity updated");
      } catch (error) {
        toast.error(error.data?.message || "Failed to update quantity");
      }
    } else {
      updateGuestCartQuantity(item.productId, item.size, newQty);
      setGuestItems(getGuestCart());
      toast.success("Quantity updated");
    }
  };

  // Remove item from cart - match popup functionality
  const handleRemove = async (item) => {
    if (item.isServer) {
      try {
        await removeFromCart({
          customerId: userId,
          productId: item.productId,
          size: item.size,
        }).unwrap();
        refetch();
        toast.success("Item removed from cart");
      } catch (error) {
        toast.error(error.data?.message || "Failed to remove item");
      }
    } else {
      removeFromGuestCart(item.productId, item.size);
      setGuestItems(getGuestCart());
      toast.success("Item removed from cart");
    }
  };

  // Handle discount code application
  const applyDiscount = (e) => {
    e.preventDefault();
    console.log("Applying discount code:", discountCode);
    // Add your discount logic here
  };

  // Handle checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      toast.error("Please agree to terms and conditions");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    console.log("Proceeding to checkout");
  };

  // if (serverLoading && userId) {
  //   return <div className="loading">Loading cart...</div>;
  // }

  return (
    <>
      {/* Title Page */}
      

      {/* Cart Section */}
      <div className="flat-spacing-2 pt-0 mt_15">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="tf-page-cart-main">
                <form className="form-cart">
                  <table className="table-page-cart">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {cartItems.length > 0 ? (
                        cartItems.map((item) =>(

                           <tr key={item.cartId} className="tf-cart-item file-delete">
                          <td  className="tf-cart-item_product">
                            <a href={`/productdetail/${item.productId}`}  className="img-box">
                              <img src={item.image} alt= {item.title} />
                            </a>
                            <div className="cart-info">
                              <a
                                href={`/productdetail/${item.productId}`}
                                className="name text-md link fw-medium"
                              >
                                {item.title}
                              </a>
                              <div className="variants">{item.size}</div>
                              <span
                                className="remove-cart link remove"
                                onClick={() => handleRemove(item)}
                              >
                                Remove
                              </span>
                            </div>
                          </td>
                          <td
                            className="tf-cart-item_price text-center"
                            data-cart-title="Price"
                          >
                            <span className="cart-price price-on-sale text-md fw-medium">
                              ₹{item.price.toFixed(2)}
                            </span>
                            {item.originalPrice > item.price && (
                                <span className="old-price text-decoration-line-through text-dark-1">
                                  ₹{item.originalPrice.toFixed(2)}
                                </span>
                              )}
                          </td>
                          <td
                            className="tf-cart-item_quantity"
                            data-cart-title="Quantity"
                          >
                            <div className="wg-quantity">
                              <span
                                className="btn-quantity btn-decrease"
                                 onClick={() => handleQuantityChange(item, -1)}
                                  disabled={isUpdating || isRemoving}
                              >
                                -
                              </span>
                              <input
                                className="quantity-product"
                                type="text"
                                name="number"
                                value={item.quantity}
                                readOnly
                              />
                              <span
                                className="btn-quantity btn-increase"
                               onClick={() => handleQuantityChange(item, 1)}
                                  disabled={isUpdating || isRemoving}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td
                            className="tf-cart-item_total text-center"
                            data-cart-title="Total"
                          >
                            <div className="cart-total total-price text-md fw-medium">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </div>
                          </td>
                        </tr>
                        ))
                      ): (
                        <tr>
                          <td colSpan="4" className="text-center py-4">
                            Your cart is empty
                          </td>
                        </tr>
                      )}
                       
                      
                    </tbody>
                  </table>
                  
                  
                 
                </form>
                
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tf-page-cart-sidebar">
              
                <form
                  className="cart-box checkout-cart-box"
                  onSubmit={handleCheckout}
                >
                  <div className="cart-head">
                    <div className="total-discount text-xl fw-medium">
                      <span>Total:</span>
                      <span className="total">₹{total.toFixed(2)} INR</span>
                    </div>
                    <p className="text-sm text-dark-4">
                      Shipping calculated at checkout
                    </p>
                  </div>
                  <div className="check-agree">
                    <input
                      type="checkbox"
                      className="tf-check"
                      id="check-agree"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <label htmlFor="check-agree" className="label text-dark-4">
                      I agree with{" "}
                      <a
                        href="term-condition"
                        className="text-dark-4 fw-medium text-underline link"
                      >
                        term and conditions
                      </a>
                    </label>
                  </div>
                  <div className="checkout-btn">
                    <Link
                      to="/checkout"
                      className="tf-btn btn-dark2 animate-btn w-100"
                      disabled={!agreeTerms}
                    >
                      Checkout
                    </Link>
                  </div>
                  
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
