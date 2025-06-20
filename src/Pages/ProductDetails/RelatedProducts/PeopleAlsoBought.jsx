import React from 'react';
import ProductCard from '../Product/ProductCard';

const PeopleAlsoBought = () => {
  const products = [
    {
      id: 1,
      name: 'Breeze Soft Tee',
      price: 55.00,
      oldPrice: 70.00,
      discount: 20,
      images: {
        main: 'images/product/product-10.jpg',
        hover: 'images/product/product-4.jpg'
      },
      colors: [
        { value: 'blue', class: 'light-blue-2', image: 'images/product/product-10.jpg' },
        { value: 'white', class: 'white', image: 'images/product/product-4.jpg' }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      tags: ['20% Off', 'Trending']
    },
    // More products...
  ];

  return (
    <section>
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h4 className="title">People Also Bought</h4>
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
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-bought justify-content-center" />
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-bought" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-bought" />
        </div>
      </div>
    </section>
  );
};

export default PeopleAlsoBought;