import React from 'react';

const ProductImage = ({ mainImage, hoverImage, alt }) => {
  return (
    <a href="product-detail.php" className="product-img">
      <img 
        className="img-product lazyload" 
        data-src={mainImage} 
        src={mainImage} 
        alt={alt} 
      />
      {hoverImage && (
        <img 
          className="img-hover lazyload" 
          data-src={hoverImage} 
          src={hoverImage} 
          alt={alt} 
        />
      )}
    </a>
  );
};

export default ProductImage;