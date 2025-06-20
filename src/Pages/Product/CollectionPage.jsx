// pages/CollectionsPage.jsx
import React, { useState } from 'react';
import CollectionHeader from './Collections/CollectionHeader';
import CollectionCarousel from  './Collections/CollectionCarousel';
import ProductFilters from './Products/ProductFilters';
import ProductGrid from './Products/ProductGrid';
import ProductList from './Products/ProductList';
import IconBox from './Shared/IconBox';

const CollectionsPage = () => {
  const [layout, setLayout] = useState('tf-col-4');
  const [showGrid, setShowGrid] = useState(true);

  // Sample data
  const collections = [
    {
      name: 'Men',
      link: 'product.php',
      image: 'images/men.jpg',
      count: 3,
    },
    {
      name: 'Dresses',
      link: 'product.php',
      image: 'images/dresses.jpg',
      count: 5,
    },
    {
      name: 'Sportwears',
      link: 'product.php',
      image: 'images/sportwear2.jpg',
      count: 9,
    },
    {
      name: 'Bags',
      link: 'product.php',
      image: 'images/bag.jpg',
      count: 4,
    },
    {
      name: "Men's Top",
      link: 'product.php',
      image: 'images/men-top.jpg',
      count: 7,
    },
    {
      name: 'Kids',
      link: 'product.php',
      image: 'images/kid.jpg',
      count: 11,
    },
  ];

  const products = [
    // Sample product data
    {
      name: 'Loose Fit Tee',
      link: 'product-detail.php',
      image: 'images/product/product-19.jpg',
      hoverImage: 'images/women-grey-2.jpg',
      price: 120,
      oldPrice: 150,
      discount: 20,
      availability: 'In stock',
      brand: 'Vineta',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        { name: 'Grey', class: 'grey-4', image: 'images/product/product-19.jpg' },
        { name: 'Black', class: 'dark', image: 'images/product/product-9.jpg' },
        { name: 'White', class: 'white', image: 'images/product/product-4.jpg', line: true },
      ],
    },
    // Add more products as needed
  ];

  const iconBoxItems = [
    {
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders over $150',
      iconPath:
        'M38.9421 14.922L24.328 6.48452C24.2283 6.42685 24.1151 6.39648 23.9999 6.39648C23.8847 6.39648 23.7715 6.42685 23.6717 6.48452L9.05762 14.922C8.95781 14.9795 8.87492 15.0623 8.81731 15.1621C8.75971 15.2618 8.72941 15.375 8.72949 15.4901V32.3651C8.72946 32.4804 8.75977 32.5936 8.81737 32.6934C8.87497 32.7932 8.95783 32.876 9.05762 32.9336L23.6717 41.3711C23.7715 41.4286 23.8847 41.4589 23.9999 41.4589C24.115 41.4589 24.2282 41.4286 24.328 41.3711L38.9421 32.9336C39.0419 32.876 39.1248 32.7932 39.1824 32.6934C39.24 32.5936 39.2703 32.4804 39.2702 32.3651V15.4901C39.2703 15.375 39.24 15.2618 39.1824 15.1621C39.1248 15.0623 39.0419 14.9795 38.9421 14.922ZM23.9999 7.81052L37.3015 15.4901L23.9999 23.1698L10.6982 15.4901L23.9999 7.81052ZM10.042 16.6268L23.3436 24.3064V39.666L10.042 31.9875V16.6268ZM37.9577 31.9875L24.6561 39.666V24.3064L37.9577 16.6268V31.9875Z',
    },
    // Add more icon box items as needed
  ];

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    setShowGrid(newLayout !== 'list');
  };

  const handleSortChange = (sortValue) => {
    console.log('Sort changed to:', sortValue);
    // Implement sorting logic
  };

  const handleFilterChange = (filters) => {
    console.log('Filters changed:', filters);
    // Implement filtering logic
  };

  return (
    <div>
      <CollectionHeader title="Collection" />
      <CollectionCarousel collections={collections} />
      
      <section className="flat-spacing-24 pt-0">
        <div className="container">
          <ProductFilters
            onLayoutChange={handleLayoutChange}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
            activeLayout={layout}
          />
          
          <div className="wrapper-control-shop">
            <div className="meta-filter-shop">
              <div id="product-count-grid" className="count-text" />
              <div id="product-count-list" className="count-text" />
              <div id="applied-filters" />
              <button
                id="remove-all"
                className="remove-all-filters"
                style={{ display: 'none' }}
              >
                <i className="icon icon-close" /> Clear all filter
              </button>
            </div>
            
            {showGrid ? (
              <ProductGrid products={products} columns={layout} />
            ) : (
              <ProductList products={products} />
            )}
          </div>
        </div>
      </section>
      
      <div id="description" className="flat-spacing pt-0">
        <div className="container">
          <p className="text text-md text-center">
            Our women's collection fuses classic sophistication with modern trends.
            From versatile daywear to statement pieces, each garment is crafted
            with high-quality fabrics and meticulous attention to detail for
            lasting comfort and a perfect fit.
          </p>
          <p className="mt_12 text-md text-center">
            Looking for more? Don't miss out on our other exciting collections for{' '}
            <a
              href="shop-sub-collection.php"
              className="text-primary text-decoration-underline fw-medium"
            >
              BAGS
            </a>{' '}
            and
            <a
              href="shop-sub-collection.php"
              className="text-primary text-decoration-underline fw-medium"
            >
              ACCESSORIES
            </a>
            .
          </p>
        </div>
      </div>
      
      <IconBox items={iconBoxItems} />
    </div>
  );
};

export default CollectionsPage;