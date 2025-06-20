import React from 'react';

const BreadcrumbItem = ({ label, href, isLast }) => {
  if (isLast) {
    return <div className="breadcrumb-item current">{label}</div>;
  }

  return (
    <>
      <a className="breadcrumb-item" href={href}>{label}</a>
      <div className="breadcrumb-item dot"><span /></div>
    </>
  );
};

export default BreadcrumbItem;