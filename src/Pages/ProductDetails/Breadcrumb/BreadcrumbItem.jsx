import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbItem = ({ href, isCurrent, isDivider, children }) => {
  if (isDivider) {
    return (
      <>
        <a className="breadcrumb-item" href={href}>{children}</a>
        <div className="breadcrumb-item dot"><span /></div>
      </>
    );
  }
  
  if (isCurrent) {
    return <div className="breadcrumb-item current">{children}</div>;
  }

  return <a className="breadcrumb-item" href={href}>{children}</a>;
};

BreadcrumbItem.propTypes = {
  href: PropTypes.string,
  isCurrent: PropTypes.bool,
  isDivider: PropTypes.bool,
  children: PropTypes.node.isRequired
};

BreadcrumbItem.defaultProps = {
  isCurrent: false,
  isDivider: false
};

export default BreadcrumbItem;