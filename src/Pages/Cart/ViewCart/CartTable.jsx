// src/components/cart/CartTable.jsx
import React, { useState } from 'react';
import CartItem from './CartItem';

const CartTable = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Oversized Printed T-shirt',
      image: 'images/product/product-1.jpg',
      price: 130.00,
      variant: 'White / L',
      quantity: 1
    },
    {
      id: 2,
      name: 'Loose Fit Tee',
      image: 'images/product/product-34.jpg',
      price: 130.00,
      variant: 'White / L',
      quantity: 1
    },
    {
      id: 3,
      name: 'Crop T-shirt',
      image: 'images/product/product-35.jpg',
      price: 130.00,
      variant: 'White / L',
      quantity: 1
    }
  ]);

  const [giftWrap, setGiftWrap] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = giftWrap ? subtotal + 10 : subtotal;

  return (
    <div className="tf-page-cart-main">
      <form className="form-cart">
        <table className="table-page-cart" aria-label="Shopping cart">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                product={item} 
                onRemove={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </tbody>
        </table>
        <div className="check-gift">
          <input 
            type="checkbox" 
            className="tf-check" 
            id="checkGift" 
            checked={giftWrap}
            onChange={(e) => setGiftWrap(e.target.checked)}
          />
          <label htmlFor="checkGift" className="label text-dark-4">
            Add gift wrap. Only <span className="fw-medium">$10.00.</span> (You can choose or not)
          </label>
        </div>
        <div className="box-ip-discount">
          <div className="discount-ip">
            <input 
              className="value-discount" 
              type="text" 
              placeholder="Discount code" 
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              aria-label="Discount code"
            />
            <button type="button" className="tf-btn radius-6 btn-out-line-dark-2">Apply</button>
          </div>
        </div>
        <div className="cart-note">
          <label htmlFor="note" className="text-md fw-medium">Special instructions for seller</label>
          <textarea 
            id="note" 
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            aria-label="Special instructions for seller"
          />
        </div>
      </form>
      <div className="fl-iconbox wow fadeInUp">
        {/* Icon boxes would go here */}
      </div>
    </div>
  );
};

export default CartTable;