import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="list-star">
      {[...Array(maxRating)].map((_, i) => (
        <i 
          key={i} 
          className={`icon ${i < rating ? 'icon-star' : 'icon-star-empty'}`} 
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number
};

export default StarRating;