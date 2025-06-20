import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items, allowMultiple = false }) => {
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (id) => {
    setActiveItems(prev => {
      if (allowMultiple) {
        return prev.includes(id) 
          ? prev.filter(itemId => itemId !== id)
          : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <div className="accordion" role="tablist">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <h3 className="accordion-header">
            <button
              className={`accordion-button ${activeItems.includes(item.id) ? '' : 'collapsed'}`}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={activeItems.includes(item.id)}
              aria-controls={`panel-${item.id}`}
              id={`heading-${item.id}`}
            >
              {item.title}
              <span className="accordion-icon"></span>
            </button>
          </h3>
          <div
            id={`panel-${item.id}`}
            className={`accordion-collapse ${activeItems.includes(item.id) ? 'show' : ''}`}
            aria-labelledby={`heading-${item.id}`}
          >
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  allowMultiple: PropTypes.bool
};

export default Accordion;