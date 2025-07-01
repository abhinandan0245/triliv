import React from "react";
// Make sure to import your CSS file

const NotFoundPage = () => {
  

  return (
    <>
      {/* Section-404 */}
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wg-404">
                <div className="image">
                  <img
                    src="./images/404.png"
                    data-src="./images/404.png"
                    alt="404"
                    className="lazyload"
                    // Note: You might want to use react-lazyload or similar for lazy loading
                  />
                </div>
                <h1 className="title display-xl-2">Whoops!</h1>
                <p className="text-md sub text-main">
                  We couldn't find the page you were looking for.
                </p>
                <div className="bot">
                  <a href="/" className="tf-btn btn-md animate-btn font-4">
                    Return to Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
