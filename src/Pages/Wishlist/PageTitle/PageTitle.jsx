import React from 'react';

const PageTitle = ({ title, breadcrumbItems }) => {
  return (
    <section className="tf-page-title">
      <div className="container">
        <div className="box-title text-center">
          <h4 className="title">{title}</h4>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
    </section>
  );
};

export default PageTitle;