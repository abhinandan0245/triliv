import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import gallery1 from "@/assets/images/gallery-1.jpg";
import gallery2 from "@/assets/images/gallery-2.jpg";
import gallery3 from "@/assets/images/gallery-3.jpg";
import gallery4 from "@/assets/images/gallery-4.jpg";
import gallery5 from "@/assets/images/gallery-5.jpg";

const ShopGram = () => {
  // Gallery items data
  const galleryItems = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: gallery3 },
    { id: 4, image: gallery4 },
    { id: 5, image: gallery5 },
  ];

  return (
    <section className="flat-spacing-28">
      <div className="container">
        {/* Title - matches your image reference */}
        <div className="flat-title " data-aos="fade-up">
          <h3 className="title fw-semibold font-7 letter-0">Shop by @Triliv</h3>
        </div>

        {/* Swiper component with responsive settings */}
        <div dir="ltr">
         <Swiper
  modules={[Pagination]}
  spaceBetween={12}  // Match ShopNow's spacing
  speed={800}
  slidesPerView={2.2}  // Partial slide
  slidesPerGroup={2}
  pagination={{
    el: ".sw-pagination-gallery",
    clickable: true,
  }}
  breakpoints={{
    768: {
      slidesPerView: 2.7,  // Partial slide
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3.7,  // Partial slide
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 4.7,  // Partial slide
      spaceBetween: 24,
      slidesPerGroup: 4,
    },
            }}
            centeredSlidesBounds={false}
            className="tf-swiper"
            data-aos="fade-up"
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
                  <a href="productdetail" className="box-icon hover-tooltip">
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
