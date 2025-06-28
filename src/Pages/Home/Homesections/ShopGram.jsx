import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ShopGram = () => {
  // Gallery items data
  const galleryItems = [
    { id: 1, image: "images/gallery-1.jpg" },
    { id: 2, image: "images/gallery-2.jpg" },
    { id: 3, image: "images/gallery-3.jpg" },
    { id: 4, image: "images/gallery-4.jpg" },
    { id: 5, image: "images/gallery-5.jpg" },
  ];

  return (
    <section className="flat-spacing-28">
      <div className="container">
        {/* Title - matches your image reference */}
        <div className="flat-title wow fadeInUp">
          <h3 className="title fw-semibold font-7 letter-0">Shop by @Triliv</h3>
        </div>

        {/* Swiper component with responsive settings */}
        <div dir="ltr">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            speed={800}
            slidesPerView={2}
            slidesPerGroup={2}
            pagination={{
              el: ".sw-pagination-gallery",
              clickable: true,
            }}
            breakpoints={{
              768: {
                // Tablet
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1200: {
                // Desktop
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            }}
            centeredSlidesBounds={false}
            className="tf-swiper wow fadeInUp"
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="gallery-item hover-img hover-overlay">
                  <div className="image img-style">
                    <img
                      src={item.image}
                      data-src={item.image}
                      alt={`Product ${item.id}`}
                      className="lazyload"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="productdetail"
                    className="box-icon hover-tooltip"
                  >
                    <span className="icon icon-cart2">
                      <span
                        className="tooltip "
                        style={{
                          left: "50%",
                          transform: "translateX(-50%)",
                          bottom: "130%",
                          whiteSpace: "nowrap",
                        }}
                      >
                        View Product
                      </span>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-gallery justify-content-center"></div>
        </div>
      </div>
    </section>
  );
};

export default ShopGram;
