import React from 'react';
import PropTypes from 'prop-types';

const ProductFrequentlyBought = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([products[0].id]);
  const [selectedVariants, setSelectedVariants] = useState({ [products[0].id]: 0 });

  const toggleProduct = (productId) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleVariantChange = (productId, variantIndex) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variantIndex
    }));
  };

  const calculateTotal = () => {
    return products
      .filter(product => selectedProducts.includes(product.id))
      .reduce((sum, product) => sum + product.price, 0);
  };

  return (
    <div className="tf-product-fbt">
      <div className="title text-xl fw-medium">Frequently Bought Together</div>
      <form className="tf-product-form-bundle">
        <div className="tf-bundle-products">
          {products.map(product => (
            <div 
              key={product.id} 
              className={`tf-bundle-product-item item-has-checkbox ${selectedProducts.includes(product.id) ? 'check' : ''}`}
            >
              <div className="bundle-check">
                <input 
                  type="checkbox" 
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => toggleProduct(product.id)}
                  className="tf-check" 
                />
              </div>
              <a href={`product-detail.php?id=${product.id}`} className="bundle-image">
                <img src={product.image} alt={product.name} />
              </a>
              <div className="bundle-info">
                <div className="bundle-title text-sm fw-medium">{product.name}</div>
                <div className="bundle-price text-md fw-medium">
                  <span className="new-price">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                <div className="bundle-variant tf-select">
                  <select
                    value={selectedVariants[product.id] || 0}
                    onChange={(e) => handleVariantChange(product.id, e.target.value)}
                  >
                    {product.variants.map((variant, index) => (
                      <option 
                        key={index} 
                        value={index}
                        selected={selectedVariants[product.id] === index}
                      >
                        {variant}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bundle-total-submit">
          <div className="text">Total price:</div>
          <span className="total-price">${calculateTotal().toFixed(2)}</span>
          <button 
            type="button" 
            className="btn-submit-total tf-btn btn-out-line-primary"
          >
            Add selected to cart
          </button>
        </div>
      </form>
    </div>
  );
};

ProductFrequentlyBought.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number,
      image: PropTypes.string.isRequired,
      variants: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default ProductFrequentlyBought;