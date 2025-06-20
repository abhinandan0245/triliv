// components/products/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';
import Pagination from '../Shared/Pagination';

const ProductGrid = ({ products, columns = 'tf-col-4' }) => {
  return (
    <div className={`wrapper-shop tf-grid-layout ${columns}`} id="gridLayout">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} layout="grid" />
      ))}
      <Pagination />
    </div>
  );
};

export default ProductGrid;