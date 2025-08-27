import React, { useEffect, useState } from "react";
import { useGetShippingInfoQuery } from "../../services/shippinginfo/shippingInfoApi";

const Shipping = () => {

  const { data: shippingInfo, isLoading, isError } = useGetShippingInfoQuery();
    const [latestShippingInfo, setLatestShippingInfo] = useState(null);

    useEffect(() => {
      if (shippingInfo && shippingInfo.length > 0) {
        // Get the most recent policy (sorted by createdAt DESC)
        setLatestShippingInfo(shippingInfo[0]);
      }
    }, [shippingInfo]);

    if (isLoading)
      return <div className="loading">Loading shipping information...</div>;
    if (isError)
      return <div className="error">Failed to load shipping information</div>;

 

  


  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Shipping</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current">Shipping</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}


      {/* Privacy policy */}
      <section className="s-term-user flat-spacing-13">
        <div className="container">
          <div className="content">
            {latestShippingInfo ? (
              <div dangerouslySetInnerHTML={{ __html: latestShippingInfo.content }} />
            ) : (
              <div className="term-item">
                <p className="term-text body-text text-main">
                  No shipping information found.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* /Privacy policy */}
    </div>
  );
};

export default Shipping;
