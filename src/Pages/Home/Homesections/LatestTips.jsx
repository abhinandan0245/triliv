// import React, { useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import images properly (adjust paths as needed)
// import plantTip1 from '../../../../public/images/plant-tip-1.jpg';
// import plantTip2 from '../../../../public/images/plant-tip-2.jpg';
// import plantTip3 from '../../../../public/images/plant-tip-3.jpg';

// const LatestTips = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const tips = [
//     {
//       id: 1,
//       title: "Top 5 Low-Maintenance Plants for Beginners",
//       image: plantTip1,
//       alt: "Low-maintenance plants"
//     },
//     {
//       id: 2,
//       title: "How to Choose the Perfect Plant for Your Home",
//       image: plantTip2,
//       alt: "Choosing perfect plant"
//     },
//     {
//       id: 3,
//       title: "The Health Benefits of Indoor Plants: More Than Just Decor",
//       image: plantTip3,
//       alt: "Health benefits of plants"
//     },
//     {
//       id: 4,
//       title: "Seasonal Style Guide: Trends to Watch for This Year",
//       image: plantTip1, // Reusing image as in original
//       alt: "Seasonal plant trends"
//     }
//   ];

//   return (
//     <section className="pt-0 pb_xl-0 flat-spacing-2 bg-light-green-10 ">
//       <div className="container">
//         <div className="flat-title wow fadeInUp">
//           <h3 className="title fw-semibold font-7">Latest Tips & Trends</h3>
//         </div>
//         <div className="fl-control-sw2 wow fadeInUp">
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={12}
//             speed={800}
//             slidesPerView={1}
//             slidesPerGroup={1}
//             observer={true}
//             observeParents={true}
//             navigation={{
//               prevEl: prevRef.current,
//               nextEl: nextRef.current,
//             }}
//             pagination={{
//               el: '.sw-pagination-new',
//               clickable: true,
//             }}
//             breakpoints={{
//               577: {
//                 slidesPerView: 2,
//                 spaceBetween: 12,
//                 slidesPerGroup: 2
//               },
//               1200: {
//                 slidesPerView: 3,
//                 spaceBetween: 24,
//                 slidesPerGroup: 4
//               }
//             }}
//             onInit={(swiper) => {
//               // Override prev/nextEl after init
//               swiper.params.navigation.prevEl = prevRef.current;
//               swiper.params.navigation.nextEl = nextRef.current;
//               swiper.navigation.init();
//               swiper.navigation.update();
//             }}
//             className="tf-swiper"
//           >
//             {tips.map((tip) => (
//               <SwiperSlide key={tip.id}>
//                 <div className="blog-item-v2 border-0 bg-white hover-img">
//                   <div className="entry-image hover-img">
//                     <a href="/notfound" className="image-box img-style">
//                       <img src={tip.image} alt={tip.alt} />
//                     </a>
//                   </div>
//                   <div className="entry-content">
//                     <div className="info-box">
//                       <a href="/notfound" className="title fw-medium link text-xl text-line-clamp-2">
//                         {tip.title}
//                       </a>
//                     </div>
//                     <a href="notfound" className="btn-readmore text-green-2 link">
//                       Read more <i className="icon icon-arr-right" />
//                     </a>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
            
//             <div className="d-flex d-xl-none sw-dot-default sw-pagination-new justify-content-center" />
//           </Swiper>
          
//           <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-new" ref={nextRef} />
//           <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-new" ref={prevRef} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestTips;



import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import plantTip1 from '../../../../public/images/plant-tip-1.jpg';
import plantTip2 from '../../../../public/images/plant-tip-2.jpg';
import plantTip3 from '../../../../public/images/plant-tip-3.jpg';

const LatestTips = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const tips = [
    {
      id: 1,
      title: "Top 5 Low-Maintenance Plants for Beginners",
      image: plantTip1,
      alt: "Low-maintenance plants"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Plant for Your Home",
      image: plantTip2,
      alt: "Choosing perfect plant"
    },
    {
      id: 3,
      title: "The Health Benefits of Indoor Plants: More Than Just Decor",
      image: plantTip3,
      alt: "Health benefits of plants"
    },
    {
      id: 4,
      title: "Seasonal Style Guide: Trends to Watch for This Year",
      image: plantTip1,
      alt: "Seasonal plant trends"
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
            modules={[Navigation, Pagination]}
            spaceBetween={12}
            speed={800}
            slidesPerView={1}
            slidesPerGroup={1}
            observer={true}
            observeParents={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            breakpoints={{
              577: {
                slidesPerView: 2,
                spaceBetween: 12,
                slidesPerGroup: 2
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 4
              }
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="tf-swiper"
            dir="ltr"
          >
            <div className="swiper-wrapper">
              {tips.map((tip) => (
                <SwiperSlide key={tip.id} className="swiper-slide">
                  <div className="blog-item-v2 border-0 bg-white hover-img">
                    <div className="entry-image hover-img">
                      <a href="notfound" className="image-box img-style">
                        <img src={tip.image} data-src={tip.image} alt={tip.alt} />
                      </a>
                    </div>
                    <div className="entry-content">
                      <div className="info-box">
                        <a href="notfound" className="title fw-medium link text-xl text-line-clamp-2">
                          {tip.title}
                        </a>
                      </div>
                      <a href="notfound" className="btn-readmore text-green-2 link">
                        Read more <i className="icon icon-arr-right" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            
            <div ref={paginationRef} className="d-flex d-xl-none sw-dot-default sw-pagination-new justify-content-center"></div>
          </Swiper>
          
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-new" ref={nextRef} />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-new" ref={prevRef} />
        </div>
      </div>
    </section>
  );
};

export default LatestTips;