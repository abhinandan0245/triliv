import React, { useEffect } from "react";
import { useGetAllCategoriesQuery } from "../../../services/category/categoryApi";





const ShopNow = () => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (data) {
      new Swiper(".tf-swiper", {
        slidesPerView: 1,
        spaceBetween: 12,
        speed: 800,
        observer: true,
        observeParents: true,
        slidesPerGroup: 1,
        pagination: {
          el: ".sw-pagination-cls",
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2.7, spaceBetween: 12, slidesPerGroup: 2 },
          992: { slidesPerView: 2, spaceBetween: 24, slidesPerGroup: 2 },
          1200: { slidesPerView: 4.7, spaceBetween: 24, slidesPerGroup: 3 },
        },
      });
    }
  }, [data]);

  // if (isLoading) return <p>Loading collections...</p>;
  // if (isError) return <p>Failed to load collections</p>;

  const categories = data || [];

  return (
    <section className="mb-5 justify-content-center mx-auto w-75 pt-5 pb-5">
      <div className="container ">
        <div className="flat-title " data-aos="fade-up">
          <h3 className="title font-7">Shop By Collection</h3>
        </div>
      </div>
      <div className="slider-layout-right " data-aos="fade-up">
        <div dir="ltr" className="swiper tf-swiper tf-sw-right wrap-sw-over">
          <div className="swiper-wrapper">
            {categories.map((cat, index) => (
              <div key={cat.id} className="swiper-slide">
                <div className="wg-cls hover-img">
                  <a
                    href={`/shop/category/${cat.id}`}
                    className="d-block radius-16 image img-style"
                  >
                    <img
                      src={cat.image || defaultImages[index % defaultImages.length]} 
                      alt={cat.name}
                      className="lazyload"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "399px",
                      }}
                    />
                  </a>
                  <div className="cls-content gap-6">
                    <a
                      href={`/shop/category/${cat.id}`}
                      className="text-xl fw-medium link"
                    >
                      {cat.name}
                    </a>
                    <a
                      href={`/shop/category/${cat.id}`}
                      className="tf-btn btn-line-dark"
                    >
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
