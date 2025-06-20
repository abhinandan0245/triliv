import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <ul className="wg-pagination">
      {pages.map(page => (
        <li key={page} className={page === currentPage ? 'active' : ''}>
          {page === currentPage ? (
            <div className="pagination-item">{page}</div>
          ) : (
            <a 
              href="#" 
              className="pagination-item" 
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </a>
          )}
        </li>
      ))}
      {currentPage < totalPages && (
        <li>
          <a 
            href="#" 
            className="pagination-item"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage + 1);
            }}
            aria-label="Next page"
          >
            <i className="icon-arr-right2" />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Pagination;