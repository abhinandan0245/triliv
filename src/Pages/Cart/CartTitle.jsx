import React from 'react';

const CartTitle = () => {
  return (
    <section className="tf-page-title">
      <div className="container">
        <div className="box-title text-center">
          <h4 className="title">Shopping Cart</h4>
          <div className="breadcrumb-list">
            <a className="breadcrumb-item" href="index.php">Home</a>
            <div className="breadcrumb-item dot"><span></span></div>
            <div className="breadcrumb-item current">Cart</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTitle;