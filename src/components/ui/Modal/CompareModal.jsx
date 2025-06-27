import React from 'react';

const CompareModal = () => {
  // This would handle removing an item from comparison
  const handleRemoveItem = (e) => {
    // In React, we would typically manage state here
    // For now, this just replicates the DOM removal behavior
    const item = e.currentTarget.closest('.tf-compare-item');
    if (item) {
      item.remove();
    }
  };

  // This would clear all comparison items
  const handleClearAll = () => {
    // In a real implementation, we would update state
    const items = document.querySelectorAll('.tf-compare-item');
    items.forEach(item => item.remove());
  };

  return (
    <div className="modal modalCentered fade modal-compare" id="compare">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span 
            className="icon icon-close btn-hide-popup" 
            data-bs-dismiss="modal" 
            aria-label="Close"
          />
          <div className="modal-compare-wrap list-file-delete">
            <h6 className="title text-center">Compare Products</h6>
            <div className="tf-compare-inner">
              <div className="tf-compare-list">
                <div className="tf-compare-item file-delete">
                  <span 
                    className="icon-close remove" 
                    onClick={handleRemoveItem}
                    role="button"
                    aria-label="Remove item"
                  />
                  <a href="product-detail.php" className="image">
                    <img 
                      className="lazyload" 
                      data-src="images/product-1.jpg" 
                      src="images/product-1.jpg" 
                      alt="Bird of Paradise" 
                    />
                  </a>
                  <div className="content">
                    <div className="text-title">
                      <a className="link text-line-clamp-2" href="product-detail.php">Bird of Paradise</a>
                    </div>
                    <p className="price-wrap">
                      <span className="new-price text-primary">$130.00</span>
                      <span className="old-price text-decoration-line-through text-dark-1">$150.00</span>
                    </p>
                  </div>
                </div>
                <div className="tf-compare-item file-delete">
                  <span 
                    className="icon-close remove" 
                    onClick={handleRemoveItem}
                    role="button"
                    aria-label="Remove item"
                  />
                  <a href="product-detail.php" className="image">
                    <img 
                      className="lazyload" 
                      data-src="images/product-4.jpg" 
                      src="images/product-4.jpg" 
                      alt="Ficus 'Ruby'" 
                    />
                  </a>
                  <div className="content">
                    <div className="text-title">
                      <a className="link text-line-clamp-2" href="product-detail.php">Ficus 'Ruby'</a>
                    </div>
                    <p className="price-wrap">
                      <span className="new-price text-primary">$110.00</span>
                      <span className="old-price text-decoration-line-through text-dark-1">$130.00</span>
                    </p>
                  </div>
                </div>
                <div className="tf-compare-item file-delete">
                  <span 
                    className="icon-close remove" 
                    onClick={handleRemoveItem}
                    role="button"
                    aria-label="Remove item"
                  />
                  <a href="product-detail.php" className="image">
                    <img 
                      className="lazyload" 
                      data-src="images/product-7.jpg" 
                      src="images/product-7.jpg" 
                      alt="Olive Tree" 
                    />
                  </a>
                  <div className="content">
                    <div className="text-title">
                      <a className="link text-line-clamp-2" href="product-detail.php">Olive Tree</a>
                    </div>
                    <p className="price-wrap">
                      <span className="new-price">$150.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-compare-buttons justify-content-center">
              <a href="compare.php" className="tf-btn animate-btn justify-content-center">Compare</a>
              <button 
                className="tf-btn btn-out-line-dark justify-content-center clear-file-delete"
                onClick={handleClearAll}
              >
                <span>Clear All</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;