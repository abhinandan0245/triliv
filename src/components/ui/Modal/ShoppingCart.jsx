import React, { useEffect, useMemo, useState } from "react";
import { useGetCartQuery, useRemoveFromCartMutation, useUpdateCartQuantityMutation } from "../../../services/cart/cartApi";
import { getGuestCart, removeFromGuestCart, updateGuestCartQuantity } from "../../../utils/guestCart";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [activePopup, setActivePopup] = useState(null);
  const [orderNote, setOrderNote] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [shippingData, setShippingData] = useState({
    country: "United States",
    province: "",
    zipcode: "",
  });
  const [shippingMessage, setShippingMessage] = useState({
    type: "",
    text: "",
  });

     // --- auth
  const user = useSelector((state) => state.auth.user);
  const userId = user?.id ?? user?._id ?? null;


  const handleQuantityChange = (product, action) => {
    if (product === 1) {
      setQuantity1((prev) =>
        action === "increase" ? prev + 1 : Math.max(1, prev - 1)
      );
    } else {
      setQuantity2((prev) =>
        action === "increase" ? prev + 1 : Math.max(1, prev - 1)
      );
    }
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    if (shippingData.zipcode) {
      setShippingMessage({
        type: "success",
        text: "We found one shipping rate available for your address: Standard at $0.00 USD",
      });
    } else {
      setShippingMessage({
        type: "error",
        text: "Please enter a valid zipcode",
      });
    }
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    const product1Price = 130.0;
    const product2Price = 110.0;
    return (product1Price * quantity1 + product2Price * quantity2).toFixed(2);
  };

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  const closePopup = (e) => {
    if (e) e.stopPropagation();
    setActivePopup(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overplay")) {
      closePopup();
    }
  };

  // cart 

  // / --- server (RTK Query) - skip when guest
  const { data: serverData, isLoading: serverLoading } = useGetCartQuery(userId, {
    skip: !userId,
  });

  // --- server mutations
  const [updateCartQuantity, { isLoading: isUpdating }] = useUpdateCartQuantityMutation();
  const [removeFromCart, { isLoading: isRemoving }] = useRemoveFromCartMutation();

  // --- guest cart state
  const [guestItems, setGuestItems] = useState(() => getGuestCart());

  // sync guest items when localStorage changes (other tabs)
  useEffect(() => {
    const onStorage = () => setGuestItems(getGuestCart());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // refresh guest items if auth changes to guest
  useEffect(() => {
    if (!userId) setGuestItems(getGuestCart());
  }, [userId]);

  // normalize data shape for rendering
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


  // handlers
  const changeQty = async (item, delta) => {
    const newQty = item.quantity + delta;
    if (item.isServer) {
      try {
        if (newQty <= 0) {
          await removeFromCart({
            customerId: userId,
            productId: item.productId,
            size: item.size,
          }).unwrap();
          toast.success("Item removed from cart");
        } else {
          await updateCartQuantity({
            customerId: userId,
            productId: item.productId,
            size: item.size,
            quantity: newQty,
          }).unwrap();
          // RTK invalidation will refetch automatically (cartApi invalidates 'Cart')
        }
      } catch (err) {
        console.error("Server update error:", err);
        toast.error("Failed to update server cart");
      }
    } else {
      // guest localStorage update
      updateGuestCartQuantity(item.productId, item.size, Math.max(0, newQty));
      setGuestItems(getGuestCart());
      toast.success(newQty <= 0 ? "Item removed from cart" : "Cart updated");
    }
  };

  const handleRemove = async (item) => {
    if (item.isServer) {
      try {
        await removeFromCart({
          customerId: userId,
          productId: item.productId,
          size: item.size,
        }).unwrap();
        toast.success("Item removed from cart");
      } catch (err) {
        console.error("Remove error:", err);
        toast.error("Failed to remove item");
      }
    } else {
      removeFromGuestCart(item.productId, item.size);
      setGuestItems(getGuestCart());
      toast.success("Item removed from cart");
    }
  };

  const total = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);

  const loading = userId ? serverLoading : false;

  


  return (
    <div
      className="offcanvas offcanvas-end popup-style-1 popup-shopping-cart"
      id="shoppingCart"
    >
      <div className="canvas-wrapper">
        <div className="popup-header">
          <span className="title">Shopping cart</span>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
          />
        </div>
        <div className="wrap">

         
          {/* <div className="tf-mini-cart-threshold">
            <div className="text">
              Spend <span className="fw-medium">₹100</span> more to get{" "}
              <span className="fw-medium">Free Shipping</span>
            </div>
            <div className="tf-progress-bar tf-progress-ship">
              <div className="value" style={{ width: "0%" }} data-progress={75}>
                <i className="icon icon-car" />
              </div>
            </div>
          </div> */}



          <div className="tf-mini-cart-wrap">
            <div className="tf-mini-cart-main">

               {loading ?(
            <div className="p-4">Loading cart...</div>
          ) : cartItems.length === 0 ? (
            <div className="p-4">Your cart is empty</div>
          ) : (

              <div className="tf-mini-cart-sroll">
                <div className="tf-mini-cart-items">
                 {cartItems.map((item) => (

                   <div key={item.cartId} className="tf-mini-cart-item file-delete">
                    <div className="tf-mini-cart-image">
                      <a href={`/productdetail/${item.productId}`}>

                        <img
                          className="lazyload"
                          data-src={item.image || "/default-thumb.jpg"}
                          src={item.image || "/default-thumb.jpg"} alt={item.title}
                        />
                      </a>
                    </div>
                    <div className="tf-mini-cart-info">
                      <div className="d-flex justify-content-between">
                        <a
                          className="title link text-md fw-medium"
                          href={`/productdetail/${item.productId}`}
                        >
                          {item.title}
                        </a>
                        <i className="icon icon-close remove fs-12"   onClick={() => handleRemove(item)}/>
                      </div>
                      <p className="price-wrap text-sm fw-medium">
  <span className="new-price text-primary">₹ {item.price}</span>
  {/* {item.originalPrice > item.price && ( */}
    <span className="old-price text-decoration-line-through text-dark-1">
      ₹ {item.originalPrice}
    </span>
  {/* )} */}
</p>
                      <p className="price-wrap text-sm fw-medium">
  <span className="new-price text-primary">{item.size}</span>
  
</p>

                      <div className="wg-quantity small">
                        <button
                          className="btn-quantity minus-btn"
                          // onClick={() => handleQuantityChange(1, "decrease")}
                          onClick={() => changeQty(item, -1)}
                          disabled={isUpdating || isRemoving}
                        >
                          -
                        </button>
                        <input
                          className="quantity-product font-4"
                          type="text"
                          name="number"
                          // value={quantity1}
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn-quantity plus-btn"
                          // onClick={() => handleQuantityChange(1, "increase")}
                          onClick={() => changeQty(item, +1)}
                          disabled={isUpdating || isRemoving}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                 ))}
                 
                </div>

                {/* you may also like */}

              </div>
            
          )}
          
            </div>
            <div className="tf-mini-cart-bottom">
              
              <div className="tf-mini-cart-bottom-wrap">
                <div className="tf-cart-totals-discounts">
                  <div className="tf-cart-total text-xl fw-medium">Total:</div>
                  <div className="tf-totals-total-value text-xl fw-medium">
                     {/* ₹ {calculateTotal()} */}
                     ₹  {total.toFixed(2)}
                  </div>
                </div>
                <div className="tf-cart-tax text-sm opacity-8">
                  Shipping calculated at checkout
                </div>
                
                <div className="tf-mini-cart-view-checkout">
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      if (cartItems.length === 0) {
        toast.info("Your cart is empty! Continue shopping.");
        setTimeout(() => {
          window.location.href = "/shop";
        }, 1500); // 1.5 second delay so user sees toast
      } else {
        window.location.href = "/checkout";
      }
    }}
    className="tf-btn animate-btn d-inline-flex bg-dark-2 w-100 justify-content-center"
  >
    <span>Check out</span>
  </a>

  <a
    href={cartItems.length === 0 ? "/shop" : "/cart"}
    onClick={(e) => {
      if (cartItems.length === 0) {
        e.preventDefault();
        toast.info("Your cart is empty! Continue shopping.");
        setTimeout(() => {
          window.location.href = "/shop";
        }, 1000);
      }
    }}
    className="tf-btn btn-out-line-dark2 w-100 justify-content-center"
  >
    View cart
  </a>
</div>


              </div>
            </div>
    {/* gift   */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
