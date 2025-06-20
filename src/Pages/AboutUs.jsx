import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="flat-spacing-3 pb-0">
        <div className="container">
          <div className="flat-title-2 d-xl-flex justify-content-xl-between">
            <div className="box-title">
              <p className="display-lg-2 fw-medium">Welcome to Vineta</p>
              <p className="text-xl">The Ultimate Fashion Destination</p>
            </div>
            <div className="box-text">
              <p className="text-md">
                At <span className="fw-medium">Vineta</span>, we bring you
                thoughtfully curated collections that blend contemporary{" "}
                <br className="d-none d-xl-block" />
                designs with timeless elegance. With over 15 years of
                experience, we cater to <br className="d-none d-xl-block" />
                fashion enthusiasts who appreciate quality, style, and
                versatility.
              </p>
            </div>
          </div>
          <div className="image radius-16 overflow-hidden banner-about">
            <img
              src="/images/about.jpg"
              alt="About Vineta"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="flat-spacing-3">
        <div className="container">
          <div className="flat-title text-center">
            <p className="display-md-2 fw-medium">Why Choose Vineta</p>
            <p className="text-md text-main">
              Our products are crafted with innovation and an eye for the latest
              trends. We push the boundaries of{" "}
              <br className="d-none d-lg-block" />
              traditional fashion, delivering bold, fresh designs that inspire
              confidence and individuality.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-7 col-md-6">
              <ul className="list-esd d-md-flex flex-md-column justify-content-md-center h-100">
                <li className="item">
                  <h6>Ethics & Responsibility</h6>
                  <p className="text-md text-main">
                    At Vineta, we are dedicated to upholding the highest ethical
                    standards in production. We ensure mindful manufacturing
                    through regular audits, training, and a strong focus on
                    responsible sourcing.
                  </p>
                </li>
                <li className="item">
                  <h6>Style Meets Durability</h6>
                  <p className="text-md text-main">
                    From classic tailoring to casual staples, our Vineta
                    collections embrace the latest trends while prioritizing
                    comfort and long-lasting quality.
                  </p>
                </li>
                <li className="item">
                  <h6>Express Yourself</h6>
                  <p className="text-md text-main">
                    Our designs are crafted with the latest fashion trends in
                    mind, offering flexibility for individual expression,
                    especially for the modern, style-conscious youth.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="image radius-16 overflow-hidden w-100 h-100">
                <img
                  src="/images/about-2.jpg"
                  alt="Why Choose Vineta"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Style Curated */}
      <section className="flat-spacing-3 pt-0">
        <div className="container">
          <div className="flat-title-2 d-xl-flex justify-content-xl-between">
            <div className="box-title">
              <p className="display-md-2 fw-medium">
                Style Curated Just for You
              </p>
              <p className="text-xl">Curated Fashion to Match Your Vibe</p>
            </div>
            <div className="box-text">
              <p className="text-md">
                Our skilled stylists have thoughtfully assembled seasonal
                outfits that are both <br className="d-none d-xl-block" />{" "}
                trendy and timeless. With a variety of looks, they’re here to
                inspire your next <br className="d-none d-xl-block" />{" "}
                fashion-forward ensemble.
              </p>
            </div>
          </div>

          {/* Swiper Section */}
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={12}
            pagination={{ clickable: true }}
            breakpoints={{
              575: { slidesPerView: 2, spaceBetween: 12 },
              992: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="tf-swiper"
          >
            <SwiperSlide>
              <div className="tf-icon-box style-border">
                <div className="box-icon">
                  <i className="icon icon-precision" />
                </div>
                <div className="content">
                  <h6>Precision in Every Stitch</h6>
                  <p className="text-sm text-main text-line-clamp-4">
                    At Vineta, we use only premium materials, ensuring our
                    collections offer superior comfort and lasting durability.
                    Every piece is crafted with care and attention to detail.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tf-icon-box style-border">
                <div className="box-icon">
                  <i className="icon icon-elegance" />
                </div>
                <div className="content">
                  <h6>Effortless Elegance</h6>
                  <p className="text-sm text-main text-line-clamp-4">
                    Our designs embrace simplicity at its finest. Vineta’s
                    understated yet refined style captures the essence of modern
                    fashion, making a statement.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tf-icon-box style-border">
                <div className="box-icon">
                  <i className="icon icon-fashion-body" />
                </div>
                <div className="content">
                  <h6>Fashion for Every Body</h6>
                  <p className="text-sm text-main text-line-clamp-4">
                    We celebrate individuality with a diverse range of sizes,
                    offering clothing that fits and flatters every body type. At
                    Vineta, fashion is for everyone.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Testimonial */}
      <section className="flat-spacing-13 pt-0">
        <div className="container">
          <div className="box-testimonial-quote text-center">
            <div className="list-star-default justify-content-center">
              <i className="icon-star text-green" />
              <i className="icon-star text-green" />
              <i className="icon-star text-green" />
              <i className="icon-star text-green" />
              <i className="icon-star text-green" />
            </div>
            <p className="text-xl lh-xl-32">
              "I've ordered from many places, but I have to say, this shop
              offers the best shipping <br className="d-none d-lg-block" />
              experience ever. Thank you so much for the outstanding service!"
            </p>
            <div className="box-author">
              <div className="avt">
                <img src="/images/tes-about.jpg" alt="Testimonial Author" />
              </div>
              <p className="text-md lh-xl-26 fw-medium">Vineta P</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
