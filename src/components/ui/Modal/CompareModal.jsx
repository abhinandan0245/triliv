import React from 'react';

const CompareModal = ({ products, onClose, onRemoveItem, onClearAll }) => {
  return (
    <div className="modal fade modalCentered modal-compare show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span 
            className="icon icon-close btn-hide-popup" 
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
          <div className="modal-compare-wrap list-file-delete">
            <h6 className="title text-center">Compare Products</h6>
            <div className="tf-compare-inner">
              {products.length > 0 ? (
                <div className="tf-compare-list">
                  {products.map(product => (
                    <div className="tf-compare-item file-delete" key={product.id}>
                      <span 
                        className="icon-close remove" 
                        onClick={() => onRemoveItem(product.id)}
                        style={{ cursor: 'pointer' }}
                      />
                    <a href="productdetail" className="image">
                      <img 
                        className="lazyload" 
                        data-src={product.images.main} 
                        src={product.images.main} 
                        alt={product.name} 
                      />
                    </a>
                    <div className="content">
                      <div className="text-title">
                        <a className="link text-line-clamp-2" href="productdetail">
                          {product.name}
                        </a>
                      </div>
                      <p className="price-wrap">
                        <span className="new-price text-primary">
                          {product.priceNew}
                        </span>
                        {product.priceOld && (
                          <span className="old-price text-decoration-line-through text-dark-1">
                            {product.priceOld}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
                 </div>
              ) : (
                <p className="text-center py-4">No products to compare</p>
              )}
            </div>
            <div className="tf-compare-buttons justify-content-center">
              {products.length > 1 && (
                <a href="compare.php" className="tf-btn animate-btn justify-content-center">
                  Compare
                </a>
              )}
              {products.length > 0 && (
                <button 
                  className="tf-btn btn-out-line-dark justify-content-center clear-file-delete"
                  onClick={onClearAll}
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;