// components/shared/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage = 1, totalPages = 3 }) => {
  return (
    <ul className="wg-pagination">
      <li className="active">
        <div className="pagination-item">1</div>
      </li>
      <li>
        <a href="#" className="pagination-item">
          2
        </a>
      </li>
      <li>
        <a href="#" className="pagination-item">
          3
        </a>
      </li>
      <li>
        <a href="#" className="pagination-item">
          <i className="icon-arr-right2" />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;