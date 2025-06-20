import React from 'react';
import ProductCard from '../Product/ProductCard';

const RecentlyViewed = () => {
  const products = [
    {
      id: 1,
      name: 'Turtleneck T-shirt',
      price: 80.00,
      oldPrice: 100.00,
      images: {
        main: 'images/product/product-5.jpg',
        hover: 'images/product/product-22.jpg'
      },
      colors: [
        { value: 'grey', class: 'grey-4', image: 'images/product/product-5.jpg' },
        { value: 'black', class: 'dark', image: 'images/product/product-22.jpg' }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      tags: ['20% Off']
    },
    // More products...
  ];

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h4 className="title">Recently Viewed</h4>
        </div>
        <div className="fl-control-sw2 wrap-pos-nav sw-over-product wow fadeInUp">
          <div dir="ltr" className="swiper tf-swiper wrap-sw-over">
            <div className="swiper-wrapper">
              {products.map(product => (
                <div key={product.id} className="swiper-slide">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-viewed justify-content-center" />
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-viewed" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-viewed" />
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;