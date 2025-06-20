import React from 'react';
import PropTypes from 'prop-types';

const ProductMeta = ({ 
  sku, 
  categories, 
  tags = [], 
  availability, 
  weight,
  dimensions 
}) => {
  return (
    <div className="product-meta">
      <ul className="meta-list">
        <li className="meta-item">
          <span className="meta-label">SKU:</span>
          <span className="meta-value">{sku}</span>
        </li>
        
        <li className="meta-item">
          <span className="meta-label">Categories:</span>
          <span className="meta-value">
            {categories.map((cat, i) => (
              <React.Fragment key={cat}>
                <a href={`/category/${cat.toLowerCase()}`}>{cat}</a>
                {i < categories.length - 1 && ', '}
              </React.Fragment>
            ))}
          </span>
        </li>
        
        {tags.length > 0 && (
          <li className="meta-item">
            <span className="meta-label">Tags:</span>
            <span className="meta-value">
              {tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  <a href={`/tag/${tag.toLowerCase()}`}>{tag}</a>
                  {i < tags.length - 1 && ', '}
                </React.Fragment>
              ))}
            </span>
          </li>
        )}
        
        <li className="meta-item">
          <span className="meta-label">Availability:</span>
          <span className={`meta-value ${availability}`}>
            {availability === 'in_stock' ? 'In Stock' : 'Out of Stock'}
          </span>
        </li>
        
        {weight && (
          <li className="meta-item">
            <span className="meta-label">Weight:</span>
            <span className="meta-value">{weight}</span>
          </li>
        )}
        
        {dimensions && (
          <li className="meta-item">
            <span className="meta-label">Dimensions:</span>
            <span className="meta-value">{dimensions}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

ProductMeta.propTypes = {
  sku: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  availability: PropTypes.oneOf(['in_stock', 'out_of_stock']).isRequired,
  weight: PropTypes.string,
  dimensions: PropTypes.string
};

export default ProductMeta;