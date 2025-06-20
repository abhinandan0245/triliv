import React from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, id, children, isOpen = false }) => {
  return (
    <div className="widget-accordion wd-product-descriptions">
      <div 
        className={`accordion-title ${isOpen ? '' : 'collapsed'}`} 
        data-bs-target={`#${id}`} 
        data-bs-toggle="collapse" 
        aria-expanded={isOpen}
        aria-controls={id}
        role="button"
      >
        <span>{title}</span>
        <span className="icon icon-arrow-down" />
      </div>
      <div 
        id={id} 
        className={`collapse ${isOpen ? 'show' : ''}`}
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool
};

export default AccordionItem;