import React, { useEffect, useRef, useCallback, useState } from "react";
import { useGetAllProductsQuery } from "../../../services/products/productApi";

const SearchModal = () => {
  const modalRef = useRef(null);
  const swiperRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

 const { data: products = [], isLoading } = useGetAllProductsQuery(
  searchTerm ? { search: searchTerm } : {},
  { skip: !searchTerm }
);

  const initializeTooltips = useCallback(() => {
    if (typeof window.bootstrap !== "undefined" && modalRef.current) {
      const tooltipTriggerList = Array.from(
        modalRef.current.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, []);

  const initializeSwiper = useCallback(() => {
    if (
      typeof window.Swiper !== "undefined" &&
      modalRef.current &&
      !swiperRef.current
    ) {
      const swiperEl = modalRef.current.querySelector(
        ".tf-swiper.wrap-sw-over"
      );
      const paginationEl = modalRef.current.querySelector(
        ".sw-pagination-search"
      );

      if (swiperEl && paginationEl) {
        swiperRef.current = new window.Swiper(swiperEl, {
          slidesPerView: 2,
          spaceBetween: 12,
          speed: 800,
          observer: true,
          observeParents: true,
          slidesPerGroup: 2,
          pagination: {
            el: paginationEl,
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
              slidesPerGroup: 3,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
              slidesPerGroup: 4,
            },
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    let modalInstance = null;
    const modalElement = modalRef.current;

    const handleModalShown = () => {
      initializeSwiper();
      initializeTooltips();
    };

    if (modalElement && typeof window.bootstrap !== "undefined") {
      modalInstance = new window.bootstrap.Modal(modalElement, {
        backdrop: false,
      });

      modalElement.addEventListener("shown.bs.modal", handleModalShown);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("shown.bs.modal", handleModalShown);
      }

      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }

      if (modalInstance) {
        modalInstance.dispose();
      }
    };
  }, [initializeSwiper, initializeTooltips]);

  const handleSubmit = (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.text.value.trim();
  setSearchTerm(inputValue);
};
 

  useEffect(() => {
  if (triggerSearch) {
    setTriggerSearch(false); // allow future queries
  }
}, [triggerSearch]);


  return (
    <div
      className="modal fade popup-search"
      id="search"
      data-bs-backdrop="false"
      ref={modalRef}
    >
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

                  {/* Product List make beautiful product list  and fetch data  */}
                 {isLoading ? (
  <div className="text-center mt-4">Loading products...</div>
) : products?.length > 0 ? (
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 mt-4">
    {products.map((product) => {
      const image =
        product?.imageVariants?.[0]?.imageUrl ||
        "https://via.placeholder.com/150";

      let variant = {};
      try {
        const priceVariants = JSON.parse(product?.priceVariants || "[]");
        variant = priceVariants?.[0] || {};
      } catch (err) {
        variant = {};
      }

      const { price = 0, originalPrice = 0 } = variant;
      const discount = originalPrice && originalPrice > price
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

      return (
        <div className="col" key={product.id}>
          <div className="card h-100 product-card shadow-sm border-0">
            <a href={`/productdetail/${product.id}`} className="position-relative">
              <img
                src={image}
                alt={product.title}
                className="card-img-top product-img"
              />
              {discount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                  -{discount}%
                </span>
              )}
              {product?.tags?.includes("organic") && (
                <span className="badge bg-success position-absolute top-0 end-0 m-2">
                  Organic
                </span>
              )}
            </a>
            <div className="card-body p-2">
              <h6
                className="card-title text-truncate mb-1"
                title={product.title}
              >
                {product.title}
              </h6>
              <div className="d-flex align-items-center gap-2">
                <strong className="text-dark">₹{price}</strong>
                {originalPrice > price && (
                  <small className="text-muted text-decoration-line-through">
                    ₹{originalPrice}
                  </small>
                )}
              </div>
              <small className="text-muted">Size: {variant.size || "N/A"}</small>
            </div>
          </div>
        </div>
      );
    })}
  </div>
) : (
  <div className="text-center mt-4">No products found.</div>
)}





                  
                  {/* End Product List */}
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
