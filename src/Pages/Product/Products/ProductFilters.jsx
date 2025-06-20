// components/products/ProductFilters.jsx
import React from 'react';

const ProductFilters = ({
  onFilterChange,
  onSortChange,
  onLayoutChange,
  activeLayout,
}) => {
  const sortOptions = [
    { value: 'best-selling', label: 'Best selling' },
    { value: 'a-z', label: 'Alphabetically, A-Z' },
    { value: 'z-a', label: 'Alphabetically, Z-A' },
    { value: 'price-low-high', label: 'Price, low to high' },
    { value: 'price-high-low', label: 'Price, high to low' },
  ];

  const layouts = [
    { value: 'list', icon: 'icon-list', label: 'List View' },
    { value: 'tf-col-2', icon: 'icon-grid-2', label: 'Grid 2 Columns' },
    { value: 'tf-col-3', icon: 'icon-grid-3', label: 'Grid 3 Columns' },
    { value: 'tf-col-4', icon: 'icon-grid-4', label: 'Grid 4 Columns' },
  ];

  return (
    <div className="tf-shop-control">
      <div className="tf-group-filter">
        <a
          href="#filterShop"
          data-bs-toggle="offcanvas"
          aria-controls="filterShop"
          className="tf-btn-filter"
        >
          <span className="icon icon-filter" />
          <span className="text">Filter</span>
        </a>
        <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
          <div className="btn-select">
            <span className="text-sort-value">Best selling</span>
            <span className="icon icon-arr-down" />
          </div>
          <div className="dropdown-menu">
            {sortOptions.map((option) => (
              <div
                key={option.value}
                className="select-item"
                data-sort-value={option.value}
                onClick={() => onSortChange(option.value)}
              >
                <span className="text-value-item">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="tf-control-layout">
        {layouts.map((layout) => (
          <li
            key={layout.value}
            className={`tf-view-layout-switch sw-layout-${layout.value.split('-')[1]} ${
              activeLayout === layout.value ? 'active' : ''
            }`}
            data-value-layout={layout.value}
            onClick={() => onLayoutChange(layout.value)}
          >
            <div className={`item ${layout.icon}`}>
              <span />
              <span />
              {layout.value.includes('3') && <span />}
              {layout.value.includes('4') && <span />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilters;