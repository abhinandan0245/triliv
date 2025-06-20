// src/components/cart/TestimonialsSlider.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Stylish, comfortable, and perfect for any occasion! My new favorite fashion destination.",
    author: "Vineta P.",
    rating: 5,
    image: "images/avt-1.png"
  },
  {
    id: 2,
    quote: "Trendy, versatile, and fits perfectly! My go-to place for stylish outfits.",
    author: "Themesflat",
    rating: 5,
    image: "images/blog-author-3.jpg"
  },
  {
    id: 3,
    quote: "Chic, affordable, and always on point! I'm obsessed with their collections!",
    author: "Henry P.",
    rating: 5,
    image: "images/blog-author-2.jpg"
  }
];

const TestimonialsSlider = () => {
  return (
    <div className="cart-box testimonial-cart-box">
      <div className="swiper tf-swiper">
        <div className="swiper-wrapper">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="swiper-slide">
              <div className="box-testimonial-main">
                <span className="quote icon-quote5" aria-hidden="true" />
                <div className="content">
                  <div className="list-star-default" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="icon-star" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-review text-md text-main">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="box-author">
                    <div className="img">
                      <img src={testimonial.image} alt={testimonial.author} />
                    </div>
                    <cite className="name text-sm fw-medium">{testimonial.author}</cite>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="box-nav-swiper">
          <button className="swiper-button-prev nav-swiper nav-prev-tes" aria-label="Previous testimonial">
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="swiper-button-next nav-swiper nav-next-tes" aria-label="Next testimonial">
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;