import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card-product">
      <div className="card-product-wrapper asp-ratio-0">
        <Link to={`/product-detail/${product.id}`} className="product-img">
          <img className="img-product lazyload" src={product.image} alt={product.name} />
          <img className="img-hover lazyload" src={product.hoverImage} alt={product.name} />
        </Link>
        <ul className="list-product-btn">
          <li>
            <a href="#quickAdd" data-bs-toggle="modal" className="hover-tooltip tooltip-left box-icon">
              <span className="icon icon-cart2" />
              <span className="tooltip">Quick Add</span>
            </a>
          </li>
          <li className="wishlist">
            <button className="hover-tooltip tooltip-left box-icon">
              <span className="icon icon-heart2" />
              <span className="tooltip">Add to Wishlist</span>
            </button>
          </li>
          <li>
            <a href="#quickView" data-bs-toggle="modal" className="hover-tooltip tooltip-left box-icon quickview">
              <span className="icon icon-view" />
              <span className="tooltip">Quick View</span>
            </a>
          </li>
          <li className="compare">
            <a href="#compare" data-bs-toggle="modal" aria-controls="compare" className="hover-tooltip tooltip-left box-icon">
              <span className="icon icon-compare" />
              <span className="tooltip">Add to Compare</span>
            </a>
          </li>
        </ul>
        {product.onSale && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">20% Off</span>
          </div>
        )}
      </div>
      <div className="card-product-info">
        <Link to={`/product-detail/${product.id}`} className="name-product link fw-medium text-md">
          {product.name}
        </Link>
        <p className="price-wrap fw-medium">
          <span className="price-new text-xl text-primary">${product.price}</span>
          {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
        </p>
        <ul className="list-color-product style-2">
          {product.colors.map((color, index) => (
            <li key={index} className={`list-color-item hover-tooltip tooltip-bot ${index === 0 ? 'line color-swatch active' : 'color-swatch'}`}>
              <span className="tooltip color-filter">{color.name}</span>
              <span className={`swatch-value bg-${color.value}`} />
              <img className="lazyload" src={color.image} alt={color.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Bird of Paradise",
      image: "/images/product-1.jpg",
      hoverImage: "/images/product-2.jpg",
      price: "130.00",
      oldPrice: "150.00",
      onSale: true,
      colors: [
        { name: "White", value: "white", image: "/images/product-1.jpg" },
        { name: "Brown", value: "brown-9", image: "/images/product-2.jpg" },
        { name: "Black", value: "dark", image: "/images/product-3.jpg" }
      ]
    },
    // Add more products as needed
  ];

  return (
    <section className="flat-spacing-2 bg-gradient-2">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h3 className="title letter-0 text-start font-7">Featured Products</h3>
        </div>
        <div className="fl-control-sw2 wrap-pos-nav sw-over-product wow fadeInUp">
          <div dir="ltr" className="swiper tf-swiper wrap-sw-over" 
            data-swiper='{"slidesPerView":2,"spaceBetween":12,"speed":800,"observer":true,"observeParents":true,"slidesPerGroup":2,"navigation":{"clickable":true,"nextEl":".nav-next-product","prevEl":".nav-prev-product"},"pagination":{"el":".sw-pagination-product","clickable":true},"breakpoints":{"768":{"slidesPerView":3,"spaceBetween":12,"slidesPerGroup":3},"1200":{"slidesPerView":4,"spaceBetween":24,"slidesPerGroup":4}}}'>
            
            <div className="swiper-wrapper">
              {products.map(product => (
                <div key={product.id} className="swiper-slide">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-product justify-content-center" />
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-product" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-product" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;