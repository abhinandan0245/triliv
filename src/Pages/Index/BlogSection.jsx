import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Low-Maintenance Plants for Beginners",
      image: "images/plant-tip-1.jpg",
      excerpt: "Discover the easiest plants to care for if you're new to plant parenting."
    },
    {
      id: 2,
      title: "How to Choose the Perfect Plant for Your Home",
      image: "images/plant-tip-2.jpg",
      excerpt: "Learn how to select plants based on your space and lifestyle."
    },
    {
      id: 3,
      title: "The Health Benefits of Indoor Plants: More Than Just Decor",
      image: "images/plant-tip-3.jpg",
      excerpt: "Explore how plants can improve your health and wellbeing."
    },
    {
      id: 4,
      title: "Seasonal Style Guide: Trends to Watch for This Year",
      image: "images/plant-tip-1.jpg",
      excerpt: "Stay up-to-date with the latest plant trends for the season."
    }
  ];

  return (
    <section className="flat-spacing-2 bg-light-green-10">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h3 className="title fw-semibold font-7">Latest Tips & Trends</h3>
        </div>
        <div className="fl-control-sw2 wow fadeInUp">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              nextEl: ".nav-next-new",
              prevEl: ".nav-prev-new"
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              577: { slidesPerView: 2, spaceBetween: 12 },
              1200: { slidesPerView: 3, spaceBetween: 24 }
            }}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="blog-item-v2 border-0 bg-white hover-img">
                  <div className="entry-image hover-img">
                    <a href={`/blog/${post.id}`} className="image-box img-style">
                      <img src={post.image} alt={post.title} />
                    </a>
                  </div>
                  <div className="entry-content">
                    <div className="info-box">
                      <a href={`/blog/${post.id}`} className="title fw-medium link text-xl text-line-clamp-2">
                        {post.title}
                      </a>
                    </div>
                    <a href={`/blog/${post.id}`} className="btn-readmore text-green-2 link">
                      Read more <i className="icon icon-arr-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-new" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-new" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;