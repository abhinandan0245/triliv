import React from 'react';
import PropTypes from 'prop-types';

const MaterialsAccordion = ({ careInstructions }) => {
  return (
    <div className="accordion-body widget-material">
      <div className="item">
        <p className="fw-medium title">Materials Care</p>
        <ul>
          {careInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MaterialsAccordion.propTypes = {
  careInstructions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MaterialsAccordion;