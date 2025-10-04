import React from "react";
import "lazysizes";
import { useGetAllBannersQuery } from "../../../services/homepage/banner2Api";

const BannerOne = () => {
  const { data, error, isLoading } = useGetAllBannersQuery();

  

  const banner = data?.banners?.[0]; // ✅ FIX: Access nested banners array

  return (
    <section className="flat-spacing pt-0 pb_xl-0">
      <div className="container">
        <div className="s2-banner-with-text">
          <div className="banner">
            <img
              src={banner?.homepageImage }
              data-src={banner?.homepageImage}
              alt="banner"
              className="lazyload"
              loading="lazy"
            />
          </div>
          <div
            className="content-with-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="box-title-content">
              <h2 className="title fw-semibold font-7">
                {banner?.title || "Refresh Your Space with Greenery"}
              </h2>
              <p className="desc text-main text-md">
                {banner?.description ||
                  "Discover a range of indoor plants that breathe life into your home. Shop now and elevate your space with nature's beauty."}
              </p>
            </div>
            <a
              href={banner?.linkUrl || "/shop"}
              className="tf-btn btn-orange animate-btn"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
