import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb-sec">
      <div className="container">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-list">
            {items.map((item, index) => (
              <BreadcrumbItem 
                key={index}
                href={item.href}
                isCurrent={item.isCurrent}
                isDivider={index < items.length - 1}
              >
                {item.label}
              </BreadcrumbItem>
            ))}
          </div>
          <div className="breadcrumb-prev-next">
            <a href="#" className="breadcrumb-prev"><i className="icon icon-arr-left" /></a>
            <a href="product.php" className="breadcrumb-back"><i className="icon icon-shop" /></a>
            <a href="#" className="breadcrumb-next"><i className="icon icon-arr-right2" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;