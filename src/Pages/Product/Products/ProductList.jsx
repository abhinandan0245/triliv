// components/products/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import Pagination from '../Shared/Pagination';

const ProductList = ({ products }) => {
  return (
    <div className="tf-list-layout wrapper-shop" id="listLayout">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} layout="list" />
      ))}
      <Pagination />
    </div>
  );
};

export default ProductList;