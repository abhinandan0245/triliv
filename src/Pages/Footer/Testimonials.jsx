import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="wg-testimonial-3 text-center wow fadeInUp">
      <div className="box-top">
        <i className="icon icon-leaf text-white fs-42" />
        <p className="text-md text-white">HAPPY CUSTOMERS</p>
      </div>
      <div className="box-title-desc">
        <h3 className="title-review text-white font-7 fw-semibold">"{testimonial.title}"</h3>
        <p className="text-white desc display-xs">{testimonial.content}</p>
      </div>
      <div className="box-author">
        <p className="text-md fw-medium text-white">{testimonial.author}</p>
        <p className="text-xs text-white">
          Item purchased: <span className="text-sm">{testimonial.item}</span>
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Beautiful, Healthy Plants!",
      content: "I ordered a few indoor plants, and they arrived in perfect condition. They've added so much life to my living room! I'll definitely be back for more.",
      author: "Triliv",
      item: "Olive Tree"
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="flat-spacing-3">
      <div className="container-3">
        <div className="flat-wrapper-testimonial bg-dark-green-4">
          <img className="img-item-1 absolute" src="/images/leaf.png" alt="leaf" />
          <img className="img-item-2 absolute" src="/images/leaf-2.png" alt="leaf" />
          
          <div dir="ltr" className="swiper tf-swiper" 
            data-swiper='{"slidesPerView":1,"speed":800,"spaceBetween":24,"pagination":{"el":".sw-pagination-tes","clickable":true}}'>
            
            <div className="swiper-wrapper">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="swiper-slide">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            
            <div className="sw-dot-default style-white sw-pagination-tes justify-content-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;