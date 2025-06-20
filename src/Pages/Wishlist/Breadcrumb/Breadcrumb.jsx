import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb-list">
      {items.map((item, index) => (
        <BreadcrumbItem 
          key={index}
          isLast={index === items.length - 1}
          {...item}
        />
      ))}
    </div>
  );
};

export default Breadcrumb;