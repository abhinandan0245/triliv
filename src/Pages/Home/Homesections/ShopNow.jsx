import React, { useEffect } from "react";
import plant1 from "@/assets/images/plant-1.jpg";
import plant2 from "@/assets/images/plant-2.jpg";
import plant3 from "@/assets/images/plant-3.jpg";
import plant4 from "@/assets/images/plant-4.jpg";
import plant5 from "@/assets/images/plant-5.jpg";


const ShopNow = () => {
  useEffect(() => {
    const swiper = new Swiper(".tf-swiper", {
      slidesPerView: 2,
      spaceBetween: 12,
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerGroup: 2,
      pagination: {
        el: ".sw-pagination-cls",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2.7, spaceBetween: 12, slidesPerGroup: 2 },
        992: { slidesPerView: 3.7, spaceBetween: 24, slidesPerGroup: 3 },
        1200: { slidesPerView: 4.7, spaceBetween: 24, slidesPerGroup: 3 }, // <-- Critical for partial slide
      },
    });
  }, []);

  const collections = [
    {
      id: 1,
      title: "Plants",
      image: plant1,
      link: "shop",
    },
    {
      id: 2,
      title: "Plant Care",
      image: plant2,
      link: "shop",
    },
    {
      id: 3,
      title: "Pots",
      image: plant3,
      link: "shop",
    },
    {
      id: 4,
      title: "Pet-Friendly",
      image: plant4,
      link: "shop",
    },
    {
      id: 5,
      title: "Gift Ideas",
      image: plant5,
      link: "shop",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="flat-title " data-aos="fade-up">
          <h3 className="title font-7">Shop By Collections</h3>
        </div>
      </div>
      <div className="slider-layout-right " data-aos="fade-up">
        <div
          dir="ltr"
          className="swiper tf-swiper tf-sw-right wrap-sw-over"
          data-swiper={JSON.stringify({
            slidesPerView: 2,
            spaceBetween: 12,
            speed: 800,
            observer: true,
            observeParents: true,
            slidesPerGroup: 2,
            pagination: { el: ".sw-pagination-cls", clickable: true },
            breakpoints: {
              768: { slidesPerView: 2.7, spaceBetween: 12, slidesPerGroup: 2 },
              992: { slidesPerView: 3.7, spaceBetween: 24, slidesPerGroup: 3 },
              1200: { slidesPerView: 4.7, spaceBetween: 24, slidesPerGroup: 3 }, // <-- 4.7 ensures partial visibility
            },
          })}
        >
          <div className="swiper-wrapper">
            {collections.map((collection) => (
              <div key={collection.id} className="swiper-slide">
                <div className="wg-cls hover-img">
                  <a
                    href={collection.link}
                    className="d-block radius-16 image img-style"
                  >
                    <img
                      src={collection.image}
                      data-src={collection.image}
                      alt={collection.title}
                      className="ls-is-cached lazyloaded"
                    />
                  </a>
                  <div className="cls-content gap-6">
                    <a
                      href={collection.link}
                      className="text-xl fw-medium link"
                    >
                      {collection.title}
                    </a>
                    <a href={collection.link} className=" tf-btn btn-line-dark">
                      <span className="text-xs">Shop Now</span>
                      <i className="icon icon-arrow-top-left fs-7" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-cls justify-content-center"></div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
