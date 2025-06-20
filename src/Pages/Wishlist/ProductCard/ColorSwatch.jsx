import React from 'react';

const ColorSwatch = ({ color, label, image, isActive, hasLine = false }) => {
  return (
    <li className={`list-color-item color-swatch hover-tooltip tooltip-bot ${isActive ? 'active' : ''} ${hasLine ? 'line' : ''}`}>
      <span className="tooltip color-filter">{label}</span>
      <span className={`swatch-value bg-${color}`} />
      {image && (
        <img 
          className="lazyload" 
          data-src={image} 
          src={image} 
          alt={`${label} color option`} 
        />
      )}
    </li>
  );
};

export default ColorSwatch;