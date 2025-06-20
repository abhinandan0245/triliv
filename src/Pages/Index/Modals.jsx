import React from 'react';

const Modals = () => {
  return (
    <>
      {/* Quick View Modal */}
      <div className="modal fade" id="quickView" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="product-gallery">
                    <img src="images/product-1.jpg" alt="Product" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product-details">
                    <h2 className="product-title">Bird of Paradise</h2>
                    <div className="product-price">
                      <span className="price-new">$130.00</span>
                      <span className="price-old">$150.00</span>
                    </div>
                    <div className="product-description">
                      <p>A stunning tropical plant that adds an exotic touch to any space.</p>
                    </div>
                    <div className="product-actions">
                      <div className="quantity">
                        <button className="quantity-minus">-</button>
                        <input type="text" value="1" />
                        <button className="quantity-plus">+</button>
                      </div>
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                    <div className="product-meta">
                      <div className="sku">SKU: BP-001</div>
                      <div className="category">Category: Indoor Plants</div>
                      <div className="tags">Tags: Tropical, Large, Statement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Add Modal */}
      <div className="modal fade" id="quickAdd" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="quick-add-content">
                <h4>Added to Cart</h4>
                <div className="product-added">
                  <img src="images/product-1.jpg" alt="Product" className="img-fluid" />
                  <div className="product-info">
                    <h5>Bird of Paradise</h5>
                    <p>$130.00</p>
                  </div>
                </div>
                <div className="quick-add-actions">
                  <a href="/cart" className="btn btn-outline">View Cart</a>
                  <a href="/checkout" className="btn btn-primary">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div className="modal fade" id="login" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="auth-form">
                <h4>Login</h4>
                <form>
                  <div className="form-group">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <div className="auth-links">
                  <a href="/register">Create an account</a>
                  <a href="/forgot-password">Forgot password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <div className="modal fade" id="search" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="search-form">
                <form>
                  <input type="text" placeholder="Search for plants..." />
                  <button type="submit"><i className="icon icon-search"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;