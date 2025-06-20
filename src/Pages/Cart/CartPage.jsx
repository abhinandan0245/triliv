// src/pages/CartPage.jsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTitle from '../components/common/PageTitle';
import CartProgress from '../components/cart/CartProgress';
import CartTable from '../components/cart/CartTable';
import CheckoutSummary from '../components/cart/CheckoutSummary';
import ShippingEstimate from '../components/cart/ShippingEstimate';
import TestimonialsSlider from '../components/cart/TestimonialsSlider';
import YouMayAlsoLike from '../components/cart/YouMayAlsoLike';

const CartPage = () => {
  return (
    <div>
      <Header />
      <PageTitle title="Shopping Cart" />
      <CartProgress />
      <div className="flat-spacing-2 pt-0 mt_15">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <CartTable />
            </div>
            <div className="col-xl-4">
              <div className="tf-page-cart-sidebar">
                <ShippingEstimate />
                <CheckoutSummary />
                <TestimonialsSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <YouMayAlsoLike />
      <Footer />
    </div>
  );
};

export default CartPage;