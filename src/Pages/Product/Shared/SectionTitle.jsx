// components/shared/SectionTitle.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`section-title ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <p className="section-subtitle text-sm text-main mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="section-heading text-xl-2 fw-medium">
        {title}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string
};

export default SectionTitle;