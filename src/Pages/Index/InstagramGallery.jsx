import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const InstagramGallery = () => {
  const instagramPosts = [
    { id: 1, image: "images/gallery-1.jpg" },
    { id: 2, image: "images/gallery-2.jpg" },
    { id: 3, image: "images/gallery-3.jpg" },
    { id: 4, image: "images/gallery-4.jpg" },
    { id: 5, image: "images/gallery-5.jpg" }
  ];

  return (
    <section className="flat-spacing-28">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h3 className="title fw-semibold font-7 letter-0">Shop by @Triliv</h3>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 5 }
          }}
        >
          {instagramPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="gallery-item hover-img hover-overlay">
                <div className="image img-style">
                  <img src={post.image} alt={`Instagram post ${post.id}`} />
                </div>
                <a href="/products" className="box-icon hover-tooltip">
                  <span className="icon icon-cart2"></span>
                  <span className="tooltip">View Product</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramGallery;