import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductVariants = ({ 
  variants,
  onVariantChange,
  showSwatches = true,
  showSizeGuide = true 
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [availableCombinations, setAvailableCombinations] = useState([]);

  useEffect(() => {
    // Initialize selected options with first available option for each variant
    const initialOptions = {};
    variants.forEach(variant => {
      if (variant.options.length > 0) {
        initialOptions[variant.name] = variant.options[0].value;
      }
    });
    setSelectedOptions(initialOptions);
    
    // Generate all available combinations (would come from API in real app)
    generateAvailableCombinations();
  }, [variants]);

  const generateAvailableCombinations = () => {
    // This would normally come from your API
    const combinations = [];
    // ... logic to generate combinations ...
    setAvailableCombinations(combinations);
  };

  const handleOptionSelect = (variantName, optionValue) => {
    const newOptions = {
      ...selectedOptions,
      [variantName]: optionValue
    };
    
    setSelectedOptions(newOptions);
    
    // Find the matching variant based on selected options
    const selectedVariant = availableCombinations.find(comb => 
      Object.keys(newOptions).every(key => 
        comb[key] === newOptions[key]
      )
    );
    
    if (selectedVariant && onVariantChange) {
      onVariantChange(selectedVariant);
    }
  };

  const isOptionAvailable = (variantName, optionValue) => {
    return availableCombinations.some(comb => 
      comb[variantName] === optionValue &&
      Object.keys(selectedOptions).every(key => 
        key === variantName || comb[key] === selectedOptions[key]
      )
    );
  };

  return (
    <div className="product-variants">
      {variants.map(variant => (
        <div key={variant.name} className="variant-option">
          <div className="variant-label">
            <span>{variant.name}:</span>
            <span className="selected-value">
              {selectedOptions[variant.name] || 'Select'}
            </span>
            {variant.name === 'Size' && showSizeGuide && (
              <a href="#size-guide" className="size-guide-link">Size Guide</a>
            )}
          </div>
          
          <div className="variant-options">
            {variant.options.map(option => {
              const isAvailable = isOptionAvailable(variant.name, option.value);
              const isSelected = selectedOptions[variant.name] === option.value;
              
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`variant-option-button 
                    ${isSelected ? 'selected' : ''} 
                    ${!isAvailable ? 'disabled' : ''}`}
                  onClick={() => isAvailable && handleOptionSelect(variant.name, option.value)}
                  disabled={!isAvailable}
                  aria-label={`Select ${variant.name} ${option.value}`}
                >
                  {showSwatches && variant.name === 'Color' && option.swatch ? (
                    <span 
                      className="color-swatch" 
                      style={{ backgroundColor: option.swatch }}
                      title={option.value}
                    />
                  ) : (
                    option.value
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

ProductVariants.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          swatch: PropTypes.string // For color variants
        })
      ).isRequired
    })
  ).isRequired,
  onVariantChange: PropTypes.func,
  showSwatches: PropTypes.bool,
  showSizeGuide: PropTypes.bool
};

export default ProductVariants;