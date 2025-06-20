import React from 'react';
import PropTypes from 'prop-types';

const AdditionalInfoAccordion = ({ info }) => {
  return (
    <div className="accordion-body">
      <table className="tb-info-product text-md">
        <tbody>
          <tr className="tb-attr-item">
            <th className="tb-attr-label">Material</th>
            <td className="tb-attr-value">
              <p>{info.material}</p>
            </td>
          </tr>
          <tr className="tb-attr-item">
            <th className="tb-attr-label">Color</th>
            <td className="tb-attr-value">
              <p>{info.color}</p>
            </td>
          </tr>
          <tr className="tb-attr-item">
            <th className="tb-attr-label">Brand</th>
            <td className="tb-attr-value">
              <p>{info.brand}</p>
            </td>
          </tr>
          <tr className="tb-attr-item">
            <th className="tb-attr-label">Size</th>
            <td className="tb-attr-value">
              <p>{info.size}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

AdditionalInfoAccordion.propTypes = {
  info: PropTypes.shape({
    material: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
  }).isRequired
};

export default AdditionalInfoAccordion;