import React from 'react';
import ColorSwatch from './ColorSwatch';

const ProductInfo = ({ name, priceNew, priceOld, colors, productUrl }) => {
  return (
    <div className="card-product-info">
      <a href={productUrl} className="name-product link fw-medium text-md">{name}</a>
      <p className="price-wrap fw-medium">
        {priceNew && <span className="price-new">${priceNew}</span>}
        {priceOld && <span className="price-old">${priceOld}</span>}
      </p>
      {colors && colors.length > 0 && (
        <ul className="list-color-product">
          {colors.map((color, index) => (
            <ColorSwatch key={index} {...color} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductInfo;