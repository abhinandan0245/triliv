import React from "react";
import subPlan3 from "@/assets/images/sub-plant-3.jpg"
import subPlan4 from "@/assets/images/plant-22.jpg"
import { useGetAllBannersQuery } from "../../../services/homepage/banner3Api";

const BannerTwo = () => {
  const { data, error, isLoading } = useGetAllBannersQuery();

  if (isLoading) return <p>Loading banner...</p>;
  if (error) return <p>Error loading banner</p>;

  // const banner = data?.banners?.[0]; // ✅ FIX: Access nested banners array
  const banner = data?.[0]; 



  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="s3-banner-with-text">
          <div className="content-with-text " data-aos="fade-up">
            <div className="box-title-content">
              <span className="subtitle text-md fw-medium">
                {banner?.title ||"LIFE GATHERS AROUND PLANTS"}
              </span>
              <h2 className="title fw-semibold font-7">
                {banner?.heading || "Perfect Plants for Every Corner"}
              </h2>
              <p className="desc text-main text-md">
                {banner?.description ||  "From small succulents to statement plants, find the ideal green companion for any room. Explore our collection today"}
              </p>
            </div>
            <a href={banner?.linkUrl || "/shop"} className="tf-btn btn-orange animate-btn">
              Shop Collection
            </a>
          </div>
          <div className="image-banner">
            <div className="image image-1 hover-img">
              <div
                className="shine-item img-style "
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src={banner?.homepageImage2 || ""}
                  data-src={banner?.homepageImage2 || ""}
                  alt=""
                  className="lazyload"
                />
              </div>
            </div>
            <div className="image image-2 hover-shine hover-img">
              <div className="shine-item img-style " data-aos="fade-right">
                <img
                  src={banner?.homepageImage || ""}
                  data-src={banner?.homepageImage || ""}
                  alt=""
                  className="lazyload"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
