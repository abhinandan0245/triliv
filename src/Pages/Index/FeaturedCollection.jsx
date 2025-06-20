import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';

// Product data (could also be moved to a separate file if used elsewhere)
const productsData = [
  {
    id: 1,
    name: "Bird of Paradise",
    price: 130.00,
    originalPrice: 150.00,
    discount: 20,
    images: ["images/product-1.jpg", "images/product-2.jpg"],
    colors: [
      { name: "White", value: "bg-white", image: "images/product-1.jpg" },
      { name: "Brown", value: "bg-brown-9", image: "images/product-2.jpg" },
      { name: "Black", value: "bg-dark", image: "images/product-3.jpg" }
    ],
    rating: 4.5,
    reviews: 24,
    isNew: true
  },
  {
    id: 2,
    name: "Ficus 'Ruby'",
    price: 110.00,
    originalPrice: 130.00,
    discount: 20,
    images: ["images/product-4.jpg", "images/product-5.jpg"],
    colors: [
      { name: "Beige", value: "bg-light-beige-2", image: "images/product-4.jpg" },
      { name: "Black", value: "bg-dark", image: "images/product-5.jpg" },
      { name: "Taupe Brown", value: "bg-taupe-brown", image: "images/product-6.jpg" }
    ],
    rating: 4.2,
    reviews: 18,
    isNew: false
  },
  {
    id: 3,
    name: "Olive Tree",
    price: 150.00,
    images: ["images/product-7.jpg", "images/product-8.jpg"],
    colors: [
      { name: "Reddish Brown", value: "bg-reddish-brown", image: "images/product-7.jpg" },
      { name: "Blue", value: "bg-blue-2", image: "images/product-8.jpg" },
      { name: "Terra Cotta", value: "bg-terra-cotta", image: "images/product-9.jpg" }
    ],
    rating: 4.8,
    reviews: 32,
    isNew: true
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 145.00,
    originalPrice: 160.00,
    discount: 20,
    images: ["images/product-10.jpg", "images/product-11.jpg"],
    colors: [
      { name: "Black", value: "bg-dark-6", image: "images/product-10.jpg" },
      { name: "Beige", value: "bg-beige-2", image: "images/product-11.jpg" }
    ],
    rating: 4.3,
    reviews: 15,
    isNew: false
  },
  {
    id: 5,
    name: "Monstera Deliciosa",
    price: 120.00,
    images: ["images/product-12.jpg", "images/product-13.jpg"],
    colors: [
      { name: "Green", value: "bg-green-3", image: "images/product-12.jpg" },
      { name: "White", value: "bg-white", image: "images/product-13.jpg" }
    ],
    rating: 4.7,
    reviews: 28,
    isNew: true
  }
];

const FeaturedCollection = ({ 
  title = "Featured Products", 
  products = productsData,
  showViewAll = true
}) => {
  return (
    <section className="flat-spacing-2 bg-gradient-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="flat-title wow fadeInUp">
            <h3 className="title letter-0 text-start font-7">{title}</h3>
          </div>
          {showViewAll && (
            <a href="/products" className="btn-view-all wow fadeInUp">
              View All <i className="fas fa-arrow-right ms-2"></i>
            </a>
          )}
        </div>
        
        <div className="fl-control-sw2 wrap-pos-nav sw-over-product wow fadeInUp">
          <Swiper
            modules={[Navigation, Pagination]}
            className="wrap-sw-over"
            spaceBetween={24}
            slidesPerView={4}
            navigation={{
              nextEl: ".nav-next-product",
              prevEl: ".nav-prev-product"
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets'
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              576: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 24 }
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard 
                  product={product} 
                  showColors={true}
                  showQuickView={true}
                  showAddToCart={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-pagination position-static mt-4"></div>
          
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-product">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-product">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
export { productsData }; // Optional: Export the data separately if needed elsewhere