v// src/components/cart/YouMayAlsoLike.jsx
import React from 'react';
import ProductCard from '../common/ProductCard';

const recommendedProducts = [
  {
    id: 1,
    name: "Loose Fit Tee",
    price: 120,
    originalPrice: 150,
    images: ["images/product/product-36.jpg", "images/product/product-4.jpg"],
    colors: [
      { name: "Beige", value: "bg-beige", image: "images/product/product-36.jpg" },
      { name: "Black", value: "bg-dark", image: "images/product/product-9.jpg" },
      { name: "White", value: "bg-white", image: "images/product/product-4.jpg" }
    ]
  },
  {
    id: 2,
    name: "Long Sleeve T-Shirt",
    price: 120,
    originalPrice: 150,
    images: ["images/product/product-37.jpg", "images/product/product-7.jpg"],
    colors: [
      { name: "Red", value: "bg-red", image: "images/product/product-37.jpg" },
      { name: "Beige", value: "bg-beige", image: "images/product/product-7.jpg" },
      { name: "Grey", value: "bg-grey-4", image: "images/product/product-2.jpg" }
    ]
  },
  // Add more products as needed
];

const YouMayAlsoLike = () => {
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="flat-title wow fadeInUp mb_5">
          <h2 className="title">You May Also Like</h2>
        </div>
        <div className="fl-control-sw wrap-pos-nav sw-over-product">
          <div className="swiper tf-swiper wrap-sw-over">
            <div className="swiper-wrapper">
              {recommendedProducts.map(product => (
                <div key={product.id} className="swiper-slide">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-also justify-content-center" />
          <button className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-also" aria-label="Next product">
            <span className="visually-hidden">Next</span>
          </button>
          <button className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-also" aria-label="Previous product">
            <span className="visually-hidden">Previous</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLike;