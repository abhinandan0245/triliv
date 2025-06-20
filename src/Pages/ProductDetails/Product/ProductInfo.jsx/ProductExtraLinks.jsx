import React from 'react';

const ProductExtraLinks = () => {
  return (
    <div className="tf-product-extra-link">
      <a href="javascript:void(0);" className="product-extra-icon link btn-add-wishlist">
        <i className="icon add icon-heart" /><span className="add">Add to wishlist</span>
        <i className="icon added icon-trash" /><span className="added">Remove from wishlist</span>
      </a>
      <a href="#compare" data-bs-toggle="modal" className="product-extra-icon link">
        <i className="icon icon-compare2" />Compare
      </a>
      <a href="#askQuestion" data-bs-toggle="modal" className="product-extra-icon link">
        <i className="icon icon-ask" />Ask a question
      </a>
      <a href="#shareSocial" data-bs-toggle="modal" className="product-extra-icon link">
        <i className="icon icon-share" />Share
      </a>
    </div>
  );
};

export default ProductExtraLinks;