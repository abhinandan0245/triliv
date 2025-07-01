import React, { useState } from "react";

const Product = () => {
  const [layout, setLayout] = useState("tf-col-4");
  const [sortValue, setSortValue] = useState("best-selling");

  // Product data
  const productsList = [
    {
      id: 1,
      name: "Graphic Printed Pure Cotton T-shirt",
      priceNew: "$50.00",
      priceOld: "$70.00",
      discount: "20% Off",
      availability: "In stock",
      brand: "Vineta",
      description:
        "Product Specifications Care for fiber: 30% more recycled polyester. We label garments manufactured using environmentally friendly technologies and raw materials with the Join Life label.",
      colors: [
        {
          name: "Yellow",
          value: "bg-light-orange-2",
          img: "images/product/product-16.jpg",
        },
        {
          name: "Black",
          value: "bg-dark",
          img: "images/product/product-9.jpg",
        },
        {
          name: "Grey",
          value: "bg-grey-4",
          img: "images/product/product-7.jpg",
        },
      ],
      sizes: ["S", "M", "L", "XL"],
      mainImage: "images/product/product-16.jpg",
      hoverImage: "images/product/product-9.jpg",
    },
    {
      id: 2,
      name: "Graphic Printed Drop Shoulder Sleeves",
      priceNew: "$80.00",
      priceOld: "",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      description:
        "Product Specifications Care for fiber: 30% more recycled polyester. We label garments manufactured using environmentally friendly technologies and raw materials with the Join Life label.",
      colors: [
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-17.jpg",
        },
        {
          name: "Dark Green",
          value: "bg-dark-green",
          img: "images/product/product-21.jpg",
        },
        {
          name: "Grey",
          value: "bg-grey-4",
          img: "images/product/product-19.jpg",
        },
      ],
      sizes: ["S", "M", "L", "XL"],
      mainImage: "images/product/product-17.jpg",
      hoverImage: "images/product/product-19.jpg",
    },
    // Add all other products following the same structure
    // I'm showing 2 examples here, but you would include all 16 products
  ];

  const productsGrid = [
    {
      id: 1,
      name: "Loose Fit Tee",
      priceNew: "$120.00",
      priceOld: "$150.00",
      discount: "20% Off",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "Grey",
          value: "bg-grey-4",
          img: "images/product/product-19.jpg",
        },
        {
          name: "Black",
          value: "bg-dark",
          img: "images/product/product-9.jpg",
        },
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-4.jpg",
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      mainImage: "images/product/product-19.jpg",
      hoverImage: "images/women-grey-2.jpg",
    },
    {
      id: 2,
      name: "Regular Fit Pima Cotton Polo Shirt",
      priceNew: "$130.00",
      priceOld: "",
      discount: "",
      availability: "Out of stock",
      brand: "Zotac",
      colors: [],
      sizes: [],
      mainImage: "images/product/product-2.jpg",
      hoverImage: "images/product/product-2.jpg",
    },
    // Add all other grid products following the same structure
    // I'm showing 2 examples here, but you would include all 16 products

    // Product 3
    {
      id: 3,
      name: "Long Regular Fit Tee",
      priceNew: "$60.00",
      priceOld: "$70.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "Yellow",
          value: "bg-yellow",
          img: "images/product/product-3.jpg",
        },
        {
          name: "Grey",
          value: "bg-grey-4",
          img: "images/product/product-6.jpg",
        },
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-4.jpg",
        },
      ],
      sizes: ["S", "M", "L", "XL"],
      mainImage: "images/product/product-3.jpg",
      hoverImage: "images/product/product-4.jpg",
      hasCountdown: true,
      countdownTime: 1007500,
    },

    // Product 4
    {
      id: 4,
      name: "Regular Fit Pima Cotton Polo Shirt",
      priceNew: "$80.00",
      priceOld: "$100.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-17.jpg",
        },
        {
          name: "Light Orange",
          value: "bg-light-orange",
          img: "images/product/product-16.jpg",
        },
        {
          name: "Light Grey",
          value: "bg-grey-4",
          img: "images/product/product-5.jpg",
        },
      ],
      sizes: ["S", "M", "L"],
      mainImage: "images/product/product-17.jpg",
      hoverImage: "images/product/product-1.jpg",
    },

    // Product 5
    {
      id: 5,
      name: "Midi Knit Dress",
      priceNew: "$40.00",
      priceOld: "$60.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "Beige",
          value: "bg-beige",
          img: "images/product/product-25.jpg",
        },
        {
          name: "Black",
          value: "bg-dark",
          img: "images/product/product-22.jpg",
        },
        { name: "Grey", value: "bg-grey-4", img: "images/women-grey-2.jpg" },
      ],
      sizes: ["XS", "M", "XL"],
      mainImage: "images/product/product-25.jpg",
      hoverImage: "images/product/product-24.jpg",
    },

    // Product 6
    {
      id: 6,
      name: "Oversized Fit Tee",
      priceNew: "$60.00",
      priceOld: "$180.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-6.jpg",
        },
        {
          name: "Dark Green",
          value: "bg-dark-green",
          img: "images/product/product-21.jpg",
        },
      ],
      sizes: ["XS", "S", "M", "L"],
      mainImage: "images/product/product-6.jpg",
      hoverImage: "images/product/product-21.jpg",
    },

    // Product 7
    {
      id: 7,
      name: "Puff Sleeve Shirred Blouse",
      priceNew: "$57.00",
      priceOld: "$60.00",
      discount: "",
      availability: "In stock",
      brand: "Zotac",
      colors: [
        {
          name: "Yellow",
          value: "bg-yellow-2",
          img: "images/women-yellow-2.jpg",
        },
        {
          name: "Light Orange",
          value: "bg-light-orange-2",
          img: "images/product/product-28.jpg",
        },
        {
          name: "Beige",
          value: "bg-beige",
          img: "images/product/product-7.jpg",
        },
      ],
      sizes: [],
      mainImage: "images/women-yellow-2.jpg",
      hoverImage: "images/product/product-28.jpg",
    },

    // Product 8
    {
      id: 8,
      name: "Printed T-shirt",
      priceNew: "$120.00",
      priceOld: "$140.00",
      discount: "",
      availability: "In stock",
      brand: "Zotac",
      colors: [
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-26.jpg",
        },
        { name: "Grey", value: "bg-grey-4", img: "images/women-grey-1.jpg" },
        { name: "Black", value: "bg-dark", img: "images/women-black-6.jpg" },
      ],
      sizes: ["S", "M", "L"],
      mainImage: "images/product/product-26.jpg",
      hoverImage: "images/product/product-26.jpg",
    },

    // Product 9
    {
      id: 9,
      name: "Basic Sports T-Shirt Crew Neck Ribbed",
      priceNew: "80.00",
      priceOld: "$100.00",
      discount: "",
      availability: "In stock",
      brand: "Zotac",
      colors: [
        {
          name: "Light Purple",
          value: "bg-light-purple-3",
          img: "images/product/product-27.jpg",
        },
        {
          name: "Light Grey",
          value: "bg-grey-4",
          img: "images/product/product-11.jpg",
        },
        {
          name: "Light Orange",
          value: "bg-light-orange",
          img: "images/product/product-12.jpg",
        },
      ],
      sizes: ["M", "L", "XL"],
      mainImage: "images/product/product-27.jpg",
      hoverImage: "images/product/product-23.jpg",
    },

    // Product 10
    {
      id: 10,
      name: "Regular Fit Fine Knit Polo Shirt",
      priceNew: "$130.00",
      priceOld: "$130.00",
      discount: "",
      availability: "In stock",
      brand: "Zotac",
      colors: [
        {
          name: "Light Blue",
          value: "bg-light-blue-2",
          img: "images/product/product-10.jpg",
        },
        {
          name: "Black",
          value: "bg-dark",
          img: "images/product/product-13.jpg",
        },
        {
          name: "Purple",
          value: "bg-light-purple",
          img: "images/product/product-14.jpg",
        },
      ],
      sizes: [],
      mainImage: "images/product/product-10.jpg",
      hoverImage: "images/product/product-20.jpg",
    },

    // Product 11
    {
      id: 11,
      name: "Crop College T-Shirt",
      priceNew: "$80.00",
      priceOld: "$100.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "Dark Green",
          value: "bg-dark-green",
          img: "images/product/product-21.jpg",
        },
        { name: "Black", value: "bg-dark", img: "images/women-black-3.jpg" },
        {
          name: "Light Purple",
          value: "bg-light-purple-3",
          img: "images/product/product-23.jpg",
        },
      ],
      sizes: [],
      mainImage: "images/product/product-21.jpg",
      hoverImage: "images/women-black-3.jpg",
    },

    // Product 12
    {
      id: 12,
      name: "Bow-Tie T-Shirt",
      priceNew: "$120.00",
      priceOld: "$140.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "Black",
          value: "bg-dark",
          img: "images/product/product-22.jpg",
        },
        {
          name: "Beige",
          value: "bg-beige",
          img: "images/product/product-5.jpg",
        },
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-1.jpg",
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      mainImage: "images/product/product-22.jpg",
      hoverImage: "images/product/product-5.jpg",
    },

    // Product 13
    {
      id: 13,
      name: "COOLMAX® Loose Fit Tee",
      priceNew: "$60.00",
      priceOld: "$80.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "Black",
          value: "bg-dark",
          img: "images/product/product-13.jpg",
        },
        {
          name: "Light Purple",
          value: "bg-purple-3",
          img: "images/product/product-14.jpg",
        },
      ],
      sizes: ["L", "XL", "2XL"],
      mainImage: "images/product/product-13.jpg",
      hoverImage: "images/product/product-14.jpg",
    },

    // Product 14
    {
      id: 14,
      name: "Long Sleeve T-Shirt",
      priceNew: "$100.00",
      priceOld: "$120.00",
      discount: "",
      availability: "In stock",
      brand: "Vineta",
      colors: [
        {
          name: "Black",
          value: "bg-dark",
          img: "images/product/product-20.jpg",
        },
        {
          name: "Light Orange",
          value: "bg-light-orange",
          img: "images/product/product-16.jpg",
        },
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-1.jpg",
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      mainImage: "images/product/product-20.jpg",
      hoverImage: "images/product/product-9.jpg",
    },

    // Product 15
    {
      id: 15,
      name: "Muscle Fit Polo Shirt",
      priceNew: "$100.00",
      priceOld: "$120.00",
      discount: "",
      availability: "Out of stock",
      brand: "Zotac",
      colors: [
        {
          name: "Beige",
          value: "bg-beige",
          img: "images/product/product-7.jpg",
        },
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-11.jpg",
        },
        {
          name: "Light Orange",
          value: "bg-light-orange",
          img: "images/product/product-18.jpg",
        },
      ],
      sizes: ["S", "M", "L", "XL", "2XL"],
      mainImage: "images/product/product-7.jpg",
      hoverImage: "images/product/product-11.jpg",
    },

    // Product 16
    {
      id: 16,
      name: "Graphic Printed Drop Shoulder Sleeves",
      priceNew: "$80.00",
      priceOld: "$100.00",
      discount: "",
      availability: "Out of stock",
      brand: "Zotac",
      colors: [
        {
          name: "White",
          value: "bg-white",
          line: true,
          img: "images/product/product-17.jpg",
        },
        {
          name: "Light Purple",
          value: "bg-light-purple-3",
          img: "images/product/product-23.jpg",
        },
      ],
      sizes: [],
      mainImage: "images/product/product-17.jpg",
      hoverImage: "images/product/product-26.jpg",
    },
  ];

  const handleSortChange = (value) => {
    setSortValue(value);
    // Add sorting logic here
  };

  const handleLayoutChange = (value) => {
    setLayout(value);
  };

  return (
    <section className="flat-spacing-24 pt-0">
      <div className="container">
        <div className="tf-shop-control">
          <div className="tf-group-filter">
            <a
              href="#filterShop"
              data-bs-toggle="offcanvas"
              aria-controls="filterShop"
              className="tf-btn-filter"
            >
              <span className="icon icon-filter" />
              <span className="text">Filter</span>
            </a>
            <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
              <div className="btn-select">
                <span className="text-sort-value">
                  {sortValue === "best-selling" && "Best selling"}
                  {sortValue === "a-z" && "Alphabetically, A-Z"}
                  {sortValue === "z-a" && "Alphabetically, Z-A"}
                  {sortValue === "price-low-high" && "Price, low to high"}
                  {sortValue === "price-high-low" && "Price, high to low"}
                </span>
                <span className="icon icon-arr-down" />
              </div>
              <div className="dropdown-menu">
                <div
                  className={`select-item ${
                    sortValue === "best-selling" ? "active" : ""
                  }`}
                  data-sort-value="best-selling"
                  onClick={() => handleSortChange("best-selling")}
                >
                  <span className="text-value-item">Best selling</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "a-z" ? "active" : ""
                  }`}
                  data-sort-value="a-z"
                  onClick={() => handleSortChange("a-z")}
                >
                  <span className="text-value-item">Alphabetically, A-Z</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "z-a" ? "active" : ""
                  }`}
                  data-sort-value="z-a"
                  onClick={() => handleSortChange("z-a")}
                >
                  <span className="text-value-item">Alphabetically, Z-A</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "price-low-high" ? "active" : ""
                  }`}
                  data-sort-value="price-low-high"
                  onClick={() => handleSortChange("price-low-high")}
                >
                  <span className="text-value-item">Price, low to high</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "price-high-low" ? "active" : ""
                  }`}
                  data-sort-value="price-high-low"
                  onClick={() => handleSortChange("price-high-low")}
                >
                  <span className="text-value-item">Price, high to low</span>
                </div>
              </div>
            </div>
          </div>
          <ul className="tf-control-layout">
            <li
              className={`tf-view-layout-switch sw-layout-list list-layout ${
                layout === "list" ? "active" : ""
              }`}
              data-value-layout="list"
              onClick={() => handleLayoutChange("list")}
            >
              <div className="item icon-list">
                <span />
                <span />
              </div>
            </li>
            <li
              className={`tf-view-layout-switch sw-layout-2 ${
                layout === "tf-col-2" ? "active" : ""
              }`}
              data-value-layout="tf-col-2"
              onClick={() => handleLayoutChange("tf-col-2")}
            >
              <div className="item icon-grid-2">
                <span />
                <span />
              </div>
            </li>
            <li
              className={`tf-view-layout-switch sw-layout-3 ${
                layout === "tf-col-3" ? "active" : ""
              }`}
              data-value-layout="tf-col-3"
              onClick={() => handleLayoutChange("tf-col-3")}
            >
              <div className="item icon-grid-3">
                <span />
                <span />
                <span />
              </div>
            </li>
            <li
              className={`tf-view-layout-switch sw-layout-4 ${
                layout === "tf-col-4" ? "active" : ""
              }`}
              data-value-layout="tf-col-4"
              onClick={() => handleLayoutChange("tf-col-4")}
            >
              <div className="item icon-grid-4">
                <span />
                <span />
                <span />
                <span />
              </div>
            </li>
          </ul>
        </div>
        <div className="wrapper-control-shop">
          <div className="meta-filter-shop">
            <div id="product-count-grid" className="count-text" />
            <div id="product-count-list" className="count-text" />
            <div id="applied-filters" />
            <button
              id="remove-all"
              className="remove-all-filters"
              style={{ display: "none" }}
            >
              <i className="icon icon-close" /> Clear all filter
            </button>
          </div>

          {/* List Layout */}
          <div
            className="tf-list-layout wrapper-shop"
            id="listLayout"
            style={{ display: layout === "list" ? "block" : "none" }}
          >
            {productsList.map((product) => (
              <div
                key={product.id}
                className={`card-product style-list ${
                  product.availability === "Out of stock" ? "out-of-stock" : ""
                }`}
                data-availability={product.availability}
                data-brand={product.brand}
              >
                <div className="card-product-wrapper">
                  <a href="/productdetail" className="product-img">
                    <img
                      className="img-product lazyload"
                      data-src={product.mainImage}
                      src={product.mainImage}
                      alt="image-product"
                    />
                    <img
                      className="img-hover lazyload"
                      data-src={product.hoverImage}
                      src={product.hoverImage}
                      alt="image-product"
                    />
                  </a>
                  {product.discount && (
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">{product.discount}</span>
                    </div>
                  )}
                </div>
                <div className="card-product-info">
                  <div className="info-list">
                    <a
                      href="/productdetail"
                      className="name-product link fw-medium text-md"
                    >
                      {product.name}
                    </a>
                    <p className="price-wrap fw-medium text-md">
                      <span className="price-new">{product.priceNew}</span>
                      {product.priceOld && (
                        <span className="price-old">{product.priceOld}</span>
                      )}
                    </p>
                    <p className="desc text-sm text-main text-line-clamp-2">
                      {product.description}
                    </p>
                    {product.colors.length > 0 && (
                      <ul className="list-color-product">
                        {product.colors.map((color, index) => (
                          <li
                            key={index}
                            className={`list-color-item color-swatch hover-tooltip ${
                              index === 0 ? "active" : ""
                            } ${color.line ? "line" : ""}`}
                          >
                            <span className="tooltip color-filter">
                              {color.name}
                            </span>
                            <span className={`swatch-value ${color.value}`} />
                            <img
                              className="lazyload"
                              data-src={color.img}
                              src={color.img}
                              alt="image-product"
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                    {product.sizes.length > 0 && (
                      <ul className="size-box">
                        {product.sizes.map((size, index) => (
                          <li key={index} className="size-item text-xs">
                            {size}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="tf-btn btn-main-product add-to-cart animate-btn"
                    >
                      Add To cart
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist hover-tooltip"
                    >
                      <span className="icon icon-heart2" />
                      <span className="tooltip">Add to Wishlist</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon hover-tooltip quickview"
                    >
                      <span className="icon icon-view" />
                      <span className="tooltip">Quick View</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare hover-tooltip"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Add to Compare</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <ul className="wg-pagination">
              <li className="active">
                <div className="pagination-item">1</div>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  <i className="icon-arr-right2" />
                </a>
              </li>
            </ul>
          </div>

          {/* Grid Layout */}
          <div
            className={`wrapper-shop tf-grid-layout ${layout}`}
            id="gridLayout"
            style={{ display: layout !== "list" ? "grid" : "none" }}
          >
            {productsGrid.map((product) => (
              <div
                key={product.id}
                className={`card-product grid style-1 ${
                  product.sizes.length > 0 ? "card-product-size" : ""
                } ${
                  product.availability === "Out of stock" ? "out-of-stock" : ""
                }`}
                data-availability={product.availability}
                data-brand={product.brand}
              >
                <div className="card-product-wrapper">
                  <a href="/productdetail" className="product-img">
                    <img
                      className="img-product lazyload"
                      data-src={product.mainImage}
                      src={product.mainImage}
                      alt="image-product"
                    />
                    <img
                      className="img-hover lazyload"
                      data-src={product.hoverImage}
                      src={product.hoverImage}
                      alt="image-product"
                    />
                  </a>
                  {product.discount && (
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">{product.discount}</span>
                    </div>
                  )}
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
                      <a
                        href="javascript:void(0);"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-heart2" />
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quickView"
                        data-bs-toggle="modal"
                        className="hover-tooltip tooltip-left box-icon quickview"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                      </a>
                    </li>
                  </ul>
                  {product.sizes.length > 0 && (
                    <ul className="size-box">
                      {product.sizes.map((size, index) => (
                        <li
                          key={index}
                          className="size-item text-xs text-white"
                        >
                          {size}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="card-product-info">
                  <a
                    href="/productdetail"
                    className="name-product link fw-medium text-md"
                  >
                    {product.name}
                  </a>
                  <p className="price-wrap fw-medium">
                    <span className="price-new">{product.priceNew}</span>
                    {product.priceOld && (
                      <span className="price-old">{product.priceOld}</span>
                    )}
                  </p>
                  {product.colors.length > 0 && (
                    <ul className="list-color-product">
                      {product.colors.map((color, index) => (
                        <li
                          key={index}
                          className={`list-color-item color-swatch hover-tooltip tooltip-bot ${
                            index === 0 ? "active" : ""
                          } ${color.line ? "line" : ""}`}
                        >
                          <span className="tooltip color-filter">
                            {color.name}
                          </span>
                          <span className={`swatch-value ${color.value}`} />
                          <img
                            className="lazyload"
                            data-src={color.img}
                            src={color.img}
                            alt="image-product"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            <ul className="wg-pagination">
              <li className="active">
                <div className="pagination-item">1</div>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  <i className="icon-arr-right2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
