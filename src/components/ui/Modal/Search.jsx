import React, { useRef, useEffect } from 'react';

const SearchModal = () => {
  const modalRef = useRef(null);
  
  // Initialize Swiper when component mounts
  useEffect(() => {
    // Check if Swiper is available (you'll need to import it)
    if (typeof Swiper !== 'undefined') {
      new Swiper(modalRef.current.querySelector('.tf-swiper'), {
        slidesPerView: 2,
        spaceBetween: 12,
        speed: 800,
        observer: true,
        observeParents: true,
        slidesPerGroup: 2,
        pagination: { 
          el: modalRef.current.querySelector('.sw-pagination-search'), 
          clickable: true 
        },
        breakpoints: {
          768: { 
            slidesPerView: 3, 
            spaceBetween: 12, 
            slidesPerGroup: 3 
          },
          1200: { 
            slidesPerView: 4, 
            spaceBetween: 24, 
            slidesPerGroup: 4
          }
        }
      });
    }
    
    // Initialize tooltips if using Bootstrap
    if (typeof bootstrap !== 'undefined') {
      const tooltipTriggerList = [].slice.call(modalRef.current.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search form submission
    const searchInput = e.target.elements.text.value;
    console.log('Searching for:', searchInput);
    // Add your search logic here
  };

  return (
    <div className="modal fade popup-search" id="search" data-bs-backdrop="false" ref={modalRef}>
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="header">
            <button 
              className="icon-close icon-close-popup" 
              data-bs-dismiss="modal" 
              aria-label="Close"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="looking-for-wrap">
                  <div className="heading">What are you looking for?</div>
                  <form className="form-search" onSubmit={handleSubmit}>
                    <fieldset className="text">
                      <input 
                        type="text" 
                        placeholder="Search" 
                        name="text" 
                        tabIndex={0} 
                        aria-required="true" 
                        required 
                      />
                    </fieldset>
                    <button type="submit">
                      <i className="icon icon-search" />
                    </button>
                  </form>
                  <div className="popular-searches justify-content-md-center">
                    <div className="text fw-medium">Popular searches:</div>
                    <ul>
                      <li><a className="link" href="#">Featured</a></li>
                      <li><a className="link" href="#">Trendy</a></li>
                      <li><a className="link" href="#">New</a></li>
                      <li><a className="link" href="#">Sale</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="featured-product">
                  <div className="text-xl-2 fw-medium featured-product-heading">Featured product</div>
                  <div dir="ltr" className="swiper tf-swiper wrap-sw-over">
                    <div className="swiper-wrapper">
                      {/* Item 1 */}
                      <div className="swiper-slide">
                        <div className="card-product">
                          <div className="card-product-wrapper asp-ratio-0">
                            <a href="product-detail" className="product-img">
                              <img 
                                className="img-product lazyload" 
                                data-src="images/product-1.jpg" 
                                src="images/product-1.jpg" 
                                alt="image-product" 
                              />
                              <img 
                                className="img-hover lazyload" 
                                data-src="images/product-2.jpg" 
                                src="images/product-2.jpg" 
                                alt="image-product" 
                              />
                            </a>
                            <ul className="list-product-btn">
                              <li>
                                <a 
                                  href="#shoppingCart" 
                                  data-bs-toggle="offcanvas" 
                                  className="hover-tooltip tooltip-left box-icon"
                                >
                                  <span className="icon icon-cart2" />
                                  <span className="tooltip">Add to Cart</span>
                                </a>
                              </li>
                              <li className="wishlist">
                                <a href="#" className="hover-tooltip tooltip-left box-icon">
                                  <span className="icon icon-heart2" />
                                  <span className="tooltip">Add to Wishlist</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="btn-quickview hover-tooltip tooltip-left box-icon quickview">
                                  <span className="icon icon-view" />
                                  <span className="tooltip">Quick View</span>
                                </a>
                              </li>
                              <li className="compare">
                                <a href="#" className="btn-compare hover-tooltip tooltip-left box-icon">
                                  <span className="icon icon-compare" />
                                  <span className="tooltip">Add to Compare</span>
                                </a>
                              </li>
                            </ul>
                            <div className="on-sale-wrap">
                              <span className="on-sale-item">20% Off</span>
                            </div>
                          </div>
                          <div className="card-product-info">
                            <a href="product-detail" className="name-product link fw-medium text-md">
                              Bird of Paradise
                            </a>
                            <p className="price-wrap fw-medium">
                              <span className="price-new text-xl text-primary">$130.00</span>
                              <span className="price-old">$150.00</span>
                            </p>
                            <ul className="list-color-product style-2">
                              <li className="list-color-item hover-tooltip tooltip-bot line color-swatch active">
                                <span className="tooltip color-filter">White</span>
                                <span className="swatch-value bg-white" />
                                <img 
                                  className="lazyload" 
                                  data-src="images/product-1.jpg" 
                                  src="images/product-1.jpg" 
                                  alt="image-product" 
                                />
                              </li>
                              <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                <span className="tooltip color-filter">Brown</span>
                                <span className="swatch-value bg-brown-9" />
                                <img 
                                  className="lazyload" 
                                  data-src="images/product-2.jpg" 
                                  src="images/product-2.jpg" 
                                  alt="image-product" 
                                />
                              </li>
                              <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                                <span className="tooltip color-filter">Black</span>
                                <span className="swatch-value bg-dark" />
                                <img 
                                  className="lazyload" 
                                  data-src="images/product-3.jpg" 
                                  src="images/product-3.jpg" 
                                  alt="image-product" 
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Other product items (Item 2, Item 3, Item 4) would go here */}
                      {/* They follow the same pattern as Item 1 */}
                      
                    </div>
                    <div className="d-flex d-xl-none sw-dot-default sw-pagination-search justify-content-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;




































// import React, { useState, useEffect, useRef } from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

// const SearchModal = ({ show, onHide }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const swiperRef = useRef(null);
//   const modalRef = useRef(null);

//   // Initialize Swiper
//   useEffect(() => {
//     if (show && !swiperRef.current) {
//       swiperRef.current = new Swiper('.tf-swiper.wrap-sw-over', {
//         slidesPerView: 2,
//         spaceBetween: 12,
//         speed: 800,
//         observer: true,
//         observeParents: true,
//         slidesPerGroup: 2,
//         pagination: {
//           el: '.sw-pagination-search',
//           clickable: true
//         },
//         breakpoints: {
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 12,
//             slidesPerGroup: 3
//           },
//           1200: {
//             slidesPerView: 4,
//             spaceBetween: 24,
//             slidesPerGroup: 4
//           }
//         }
//       });
//     }

//     return () => {
//       if (swiperRef.current) {
//         swiperRef.current.destroy();
//         swiperRef.current = null;
//       }
//     };
//   }, [show]);

//   // Handle click outside to close modal
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onHide();
//       }
//     };

//     if (show) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [show, onHide]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle search logic here
//     console.log('Searching for:', searchQuery);
//     // You might want to implement actual search functionality
//   };

//   if (!show) return null;

//   return (
//     <div className="modal fade popup-search show" id="search" style={{ display: 'block' }}>
//       <div className="modal-dialog modal-fullscreen">
//         <div className="modal-content" ref={modalRef}>
//           <div className="header">
//             <button 
//               className="icon-close icon-close-popup" 
//               onClick={onHide}
//               aria-label="Close"
//             />
//           </div>
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-8">
//                 <div className="looking-for-wrap">
//                   <div className="heading">What are you looking for?</div>
//                   <form className="form-search" onSubmit={handleSubmit}>
//                     <fieldset className="text">
//                       <input 
//                         type="text" 
//                         placeholder="Search" 
//                         className="" 
//                         name="text" 
//                         tabIndex="0"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         aria-required="true" 
//                         required
//                       />
//                     </fieldset>
//                     <button className="" type="submit">
//                       <i className="icon icon-search"></i>
//                     </button>
//                   </form>
//                   <div className="popular-searches justify-content-md-center">
//                     <div className="text fw-medium">Popular searches:</div>
//                     <ul>
//                       <li><a className="link" href="#">Featured</a></li>
//                       <li><a className="link" href="#">Trendy</a></li>
//                       <li><a className="link" href="#">New</a></li>
//                       <li><a className="link" href="#">Sale</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-12">
//                 <div className="featured-product">
//                   <div className="text-xl-2 fw-medium featured-product-heading">Featured product</div>
//                   <div dir="ltr" className="swiper tf-swiper wrap-sw-over">
//                     <div className="swiper-wrapper">
//                       {/* Product Item 1 */}
//                       <div className="swiper-slide">
//                         <div className="card-product">
//                           <div className="card-product-wrapper asp-ratio-0">
//                             <a href="/product-detail" className="product-img">
//                               <img 
//                                 className="img-product lazyload"
//                                 src="images/product-1.jpg"
//                                 alt="Bird of Paradise plant"
//                               />
//                               <img 
//                                 className="img-hover lazyload"
//                                 src="images/product-2.jpg"
//                                 alt="Bird of Paradise plant alternate view"
//                               />
//                             </a>
//                             <ul className="list-product-btn">
//                               <li>
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-cart2"></span>
//                                   <span className="tooltip">Add to Cart</span>
//                                 </button>
//                               </li>
//                               <li className="wishlist">
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-heart2"></span>
//                                   <span className="tooltip">Add to Wishlist</span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button className="btn-quickview hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-view"></span>
//                                   <span className="tooltip">Quick View</span>
//                                 </button>
//                               </li>
//                               <li className="compare">
//                                 <button className="btn-compare hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-compare"></span>
//                                   <span className="tooltip">Add to Compare</span>
//                                 </button>
//                               </li>
//                             </ul>
//                             <div className="on-sale-wrap">
//                               <span className="on-sale-item">20% Off</span>
//                             </div>
//                           </div>
//                           <div className="card-product-info">
//                             <a href="/product-detail" className="name-product link fw-medium text-md">
//                               Bird of Paradise
//                             </a>
//                             <p className="price-wrap fw-medium">
//                               <span className="price-new text-xl text-primary">$130.00</span>
//                               <span className="price-old">$150.00</span>
//                             </p>
//                             <ul className="list-color-product style-2">
//                               <li className="list-color-item hover-tooltip tooltip-bot line color-swatch active">
//                                 <span className="tooltip color-filter">White</span>
//                                 <span className="swatch-value bg-white"></span>
//                               </li>
//                               <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
//                                 <span className="tooltip color-filter">Brown</span>
//                                 <span className="swatch-value bg-brown-9"></span>
//                               </li>
//                               <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
//                                 <span className="tooltip color-filter">Black</span>
//                                 <span className="swatch-value bg-dark"></span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Product Item 2 */}
//                       <div className="swiper-slide">
//                         <div className="card-product">
//                           <div className="card-product-wrapper asp-ratio-0">
//                             <a href="/product-detail" className="product-img">
//                               <img 
//                                 className="img-product lazyload"
//                                 src="images/product-4.jpg"
//                                 alt="Ficus Ruby plant"
//                               />
//                               <img 
//                                 className="img-hover lazyload"
//                                 src="images/product-5.jpg"
//                                 alt="Ficus Ruby plant alternate view"
//                               />
//                             </a>
//                             <ul className="list-product-btn">
//                               <li>
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-cart2"></span>
//                                   <span className="tooltip">Add to Cart</span>
//                                 </button>
//                               </li>
//                               <li className="wishlist">
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-heart2"></span>
//                                   <span className="tooltip">Add to Wishlist</span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button className="btn-quickview hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-view"></span>
//                                   <span className="tooltip">Quick View</span>
//                                 </button>
//                               </li>
//                               <li className="compare">
//                                 <button className="btn-compare hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-compare"></span>
//                                   <span className="tooltip">Add to Compare</span>
//                                 </button>
//                               </li>
//                             </ul>
//                             <div className="on-sale-wrap">
//                               <span className="on-sale-item">20% Off</span>
//                             </div>
//                           </div>
//                           <div className="card-product-info">
//                             <a href="/product-detail" className="name-product link fw-medium text-md">
//                               Ficus 'Ruby'
//                             </a>
//                             <p className="price-wrap fw-medium">
//                               <span className="price-new text-xl text-primary">$110.00</span>
//                               <span className="price-old">$130.00</span>
//                             </p>
//                             <ul className="list-color-product style-2">
//                               <li className="list-color-item hover-tooltip tooltip-bot color-swatch active">
//                                 <span className="tooltip color-filter">Beige</span>
//                                 <span className="swatch-value bg-light-beige-2"></span>
//                               </li>
//                               <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
//                                 <span className="tooltip color-filter">Black</span>
//                                 <span className="swatch-value bg-dark"></span>
//                               </li>
//                               <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
//                                 <span className="tooltip color-filter">Taupe Brown</span>
//                                 <span className="swatch-value bg-taupe-brown"></span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Product Item 3 */}
//                       <div className="swiper-slide">
//                         <div className="card-product">
//                           <div className="card-product-wrapper asp-ratio-0">
//                             <a href="/product-detail" className="product-img">
//                               <img 
//                                 className="img-product lazyload"
//                                 src="images/product-7.jpg"
//                                 alt="Olive Tree"
//                               />
//                               <img 
//                                 className="img-hover lazyload"
//                                 src="images/product-8.jpg"
//                                 alt="Olive Tree alternate view"
//                               />
//                             </a>
//                             <ul className="list-product-btn">
//                               <li>
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-cart2"></span>
//                                   <span className="tooltip">Add to Cart</span>
//                                 </button>
//                               </li>
//                               <li className="wishlist">
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-heart2"></span>
//                                   <span className="tooltip">Add to Wishlist</span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button className="btn-quickview hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-view"></span>
//                                   <span className="tooltip">Quick View</span>
//                                 </button>
//                               </li>
//                               <li className="compare">
//                                 <button className="btn-compare hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-compare"></span>
//                                   <span className="tooltip">Add to Compare</span>
//                                 </button>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="card-product-info">
//                             <a href="/product-detail" className="name-product link fw-medium text-md">
//                               Olive Tree
//                             </a>
//                             <p className="price-wrap fw-medium">
//                               <span className="price-new text-xl">$150.00</span>
//                             </p>
//                             <ul className="list-color-product style-2">
//                               <li className="list-color-item hover-tooltip tooltip-bot color-swatch active">
//                                 <span className="tooltip color-filter">Reddish Brown</span>
//                                 <span className="swatch-value bg-reddish-brown"></span>
//                               </li>
//                               <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
//                                 <span className="tooltip color-filter">Blue</span>
//                                 <span className="swatch-value bg-blue-2"></span>
//                               </li>
//                               <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
//                                 <span className="tooltip color-filter">Terra Cotta</span>
//                                 <span className="swatch-value bg-terra-cotta"></span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Product Item 4 */}
//                       <div className="swiper-slide">
//                         <div className="card-product">
//                           <div className="card-product-wrapper asp-ratio-0">
//                             <a href="/product-detail" className="product-img">
//                               <img 
//                                 className="img-product lazyload"
//                                 src="images/product-10.jpg"
//                                 alt="ZZ Plant"
//                               />
//                               <img 
//                                 className="img-hover lazyload"
//                                 src="images/product-11.jpg"
//                                 alt="ZZ Plant alternate view"
//                               />
//                             </a>
//                             <ul className="list-product-btn">
//                               <li>
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-cart2"></span>
//                                   <span className="tooltip">Add to Cart</span>
//                                 </button>
//                               </li>
//                               <li className="wishlist">
//                                 <button className="hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-heart2"></span>
//                                   <span className="tooltip">Add to Wishlist</span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button className="btn-quickview hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-view"></span>
//                                   <span className="tooltip">Quick View</span>
//                                 </button>
//                               </li>
//                               <li className="compare">
//                                 <button className="btn-compare hover-tooltip tooltip-left box-icon">
//                                   <span className="icon icon-compare"></span>
//                                   <span className="tooltip">Add to Compare</span>
//                                 </button>
//                               </li>
//                             </ul>
//                             <div className="on-sale-wrap">
//                               <span className="on-sale-item">20% Off</span>
//                             </div>
//                           </div>
//                           <div className="card-product-info">
//                             <a href="/product-detail" className="name-product link fw-medium text-md">
//                               ZZ Plant
//                             </a>
//                             <p className="price-wrap fw-medium">
//                               <span className="price-new text-xl">$145.00</span>
//                               <span className="price-old">$160.00</span>
//                             </p>
//                             <ul className="list-color-product style-2">
//                               <li className="list-color-item hover-tooltip tooltip-bot color-swatch active">
//                                 <span className="tooltip color-filter">Black</span>
//                                 <span className="swatch-value bg-dark-6"></span>
//                               </li>
//                               <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
//                                 <span className="tooltip color-filter">Beige</span>
//                                 <span className="swatch-value bg-beige-2"></span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex d-xl-none sw-dot-default sw-pagination-search justify-content-center"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchModal;