import React from 'react';

const DescriptionAccordion = ({ composition, additionalInfo }) => {
  return (
    <>
      <div className="item">
        <p className="fw-medium title">Composition</p>
        <ul>
          {composition.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <p className="item">Additional material information</p>
      <div className="item">
        <p className="title">The total weight of this product contains:</p>
        <ul>
          {additionalInfo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

DescriptionAccordion.propTypes = {
  composition: PropTypes.arrayOf(PropTypes.string).isRequired,
  additionalInfo: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DescriptionAccordion;