// src/utils/mergeGuestCart.js
// import { useAddToCartMutation } from "../services/cart/cartApi";
import { getGuestCart, clearGuestCart } from "./guestCart";

export const mergeGuestCartToDB = async (addToCart, customerId) => {
    // const [addToCart] = useAddToCartMutation();

  const guestCart = getGuestCart();

  if (!guestCart.length) return;

  try {
    for (const item of guestCart) {
      await addToCart({
        customerId,
        productId: item.productId,
        quantity: item.quantity,
        size: item.size
      }).unwrap();
    }

    clearGuestCart();
    console.log(" Guest cart merged into DB");
  } catch (error) {
    console.error(" Failed to merge guest cart:", error);
  }
};
