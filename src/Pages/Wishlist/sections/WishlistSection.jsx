import React from 'react';
import ProductCard from '../../common/ProductCard/ProductCard';
import Pagination from '../../common/Pagination/Pagination';

const WishlistSection = ({ products, currentPage, totalPages, onPageChange, onRemoveItem }) => {
  return (
    <section className="flat-spacing-13">
      <div className="container">
        <div className="wrapper-wishlist tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              product={product}
              onRemove={() => onRemoveItem(product.id)}
              isOutOfStock={product.isOutOfStock}
              hasCountdown={product.hasCountdown}
              className={product.className}
            />
          ))}
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;