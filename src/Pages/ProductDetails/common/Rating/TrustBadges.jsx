import React from 'react';
import PropTypes from 'prop-types';

const TrustBadges = ({ badges }) => {
  return (
    <div className="trust-badges">
      {badges.map((badge, index) => (
        <div key={index} className="trust-badge">
          <img 
            src={badge.image} 
            alt={badge.alt} 
            loading="lazy"
            width={badge.width}
            height={badge.height}
          />
          {badge.text && <span>{badge.text}</span>}
        </div>
      ))}
    </div>
  );
};

TrustBadges.propTypes = {
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

export default TrustBadges;