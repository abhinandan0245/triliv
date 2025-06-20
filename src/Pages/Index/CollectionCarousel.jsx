import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

  const collections = [
    {
      id: 1,
      name: "Plants",
      image: "images/plant-1.jpg"
    },
    {
      id: 2,
      name: "Plant Care",
      image: "images/plant-2.jpg"
    },
    {
      id: 3,
      name: "Pots",
      image: "images/plant-3.jpg"
    },
    {
      id: 4,
      name: "Pet-Friendly",
      image: "images/plant-4.jpg"
    },
    {
      id: 5,
      name: "Gift Ideas",
      image: "images/plant-5.jpg"
    }
  ];


const CollectionCarousel = () => {


  return (
    <section>
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h3 className="title font-7">Shop By Collections</h3>
        </div>
      </div>
      <div className="slider-layout-right wow fadeInUp">
        <Swiper
          className="tf-sw-right wrap-sw-over"
          spaceBetween={24}
          slidesPerView={4.7}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 2.7, spaceBetween: 12 },
            992: { slidesPerView: 3.7, spaceBetween: 24 },
            1200: { slidesPerView: 4.7, spaceBetween: 24 }
          }}
        >
          {collections.map((collection) => (
            <SwiperSlide key={collection.id}>
              <div className="wg-cls hover-img">
                <a href={`/collections/${collection.id}`} className="d-block radius-16 image img-style">
                  <img src={collection.image} alt={collection.name} />
                </a>
                <div className="cls-content gap-6">
                  <a href={`/collections/${collection.id}`} className="text-xl fw-medium link">{collection.name}</a>
                  <a href={`/collections/${collection.id}`} className="tf-btn btn-line-dark">
                    <span className="text-xs">Shop Now</span>
                    <i className="icon icon-arrow-top-left fs-7"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionCarousel;
export {collections};
