// components/collections/CollectionHeader.jsx
import React from 'react';

const CollectionHeader = ({ title, description }) => {
  return (
    <section className="tf-page-title">
      <div className="container">
        <div className="box-title text-center">
          <h4 className="title">{title}</h4>
          {description && (
            <p className="desc text-md text-main">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionHeader;