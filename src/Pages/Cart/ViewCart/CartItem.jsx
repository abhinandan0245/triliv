// src/components/cart/CartItem.jsx
import React from 'react';
import QuantityInput from '../common/QuantityInput';

const CartItem = ({ 
  product: { id, name, image, price, variant, quantity }, 
  onRemove, 
  onQuantityChange 
}) => {
  const total = (price * quantity).toFixed(2);
  
  return (
    <tr className="tf-cart-item file-delete">
      <td className="tf-cart-item_product">
        <a href={`product-detail.php?id=${id}`} className="img-box">
          <img src={image} alt={name} />
        </a>
        <div className="cart-info">
          <a href={`product-detail.php?id=${id}`} className="name text-md link fw-medium">{name}</a>
          <div className="variants">{variant}</div>
          <button 
            className="remove-cart link remove" 
            onClick={() => onRemove(id)}
            aria-label={`Remove ${name} from cart`}
          >
            Remove
          </button>
        </div>
      </td>
      <td className="tf-cart-item_price text-center" data-cart-title="Price">
        <span className="cart-price price-on-sale text-md fw-medium">${price.toFixed(2)}</span>
      </td>
      <td className="tf-cart-item_quantity" data-cart-title="Quantity">
        <QuantityInput 
          value={quantity} 
          onIncrease={() => onQuantityChange(id, quantity + 1)}
          onDecrease={() => onQuantityChange(id, Math.max(1, quantity - 1))}
          onChange={(e) => onQuantityChange(id, parseInt(e.target.value) || 1)}
        />
      </td>
      <td className="tf-cart-item_total text-center" data-cart-title="Total">
        <div className="cart-total total-price text-md fw-medium">${total}</div>
      </td>
    </tr>
  );
};

export default CartItem;