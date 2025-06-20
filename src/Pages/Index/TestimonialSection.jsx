import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Beautiful, Healthy Plants!",
      text: "I ordered a few indoor plants, and they arrived in perfect condition. They've added so much life to my living room! I'll definitely be back for more.",
      author: "Triliv",
      product: "Olive Tree"
    },
    {
      id: 2,
      quote: "Gorgeous, Thriving Plants!",
      text: "I ordered a few indoor plants, and they arrived in perfect condition. They've added so much life to my living room.",
      author: "Lisa",
      product: "Olive Tree"
    },
    {
      id: 3,
      quote: "Vibrant, Lush Greenery!",
      text: "I recently got a few indoor plants, and they arrived in flawless condition. They've brought so much freshness to my home.",
      author: "Emily",
      product: "Ficus Audrey Tree"
    }
  ];

  return (
    <section className="flat-spacing-3">
      <div className="container-3">
        <div className="flat-wrapper-testimonial bg-dark-green-4">
          <img className="img-item-1 absolute" src="images/leaf.png" alt="" />
          <img className="img-item-2 absolute" src="images/leaf-2.png" alt="" />
          <Swiper
            className="tf-swiper"
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="wg-testimonial-3 text-center wow fadeInUp">
                  <div className="box-top">
                    <i className="icon icon-leaf text-white fs-42"></i>
                    <p className="text-md text-white">HAPPY CUSTOMERS</p>
                  </div>
                  <div className="box-title-desc">
                    <h3 className="title-review text-white font-7 fw-semibold">"{testimonial.quote}"</h3>
                    <p className="text-white desc display-xs">{testimonial.text}</p>
                  </div>
                  <div className="box-author">
                    <p className="text-md fw-medium text-white">{testimonial.author}</p>
                    <p className="text-xs text-white">
                      Item purchased:
                      <span className="text-sm"> {testimonial.product}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;