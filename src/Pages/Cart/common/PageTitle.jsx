// src/components/common/PageTitle.jsx
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const PageTitle = ({ title }) => {
  return (
    <section className="tf-page-title">
      <div className="container">
        <div className="box-title text-center">
          <h4 className="title">{title}</h4>
          <Breadcrumbs currentPage={title} />
        </div>
      </div>
    </section>
  );
};

export default PageTitle;