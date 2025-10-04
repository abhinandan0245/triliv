import React, { useEffect, useState } from "react";
import { useGetShippingInfoQuery } from "../../services/shippinginfo/shippingInfoApi";

const Shipping = () => {

    const { data: policy, isLoading, isError } = useGetShippingInfoQuery();
     const [latestPolicy, setLatestPolicy] = useState(null);
   
   useEffect(() => {
     if (policy) {
       if (policy.content) {
         setLatestPolicy(policy);
       }
       else if (Array.isArray(policy) && policy.length > 0) {
         setLatestPolicy(policy[0]);
       }
     }
   }, [policy]);
 

  


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
            {latestPolicy ? (
              <div dangerouslySetInnerHTML={{ __html: latestPolicy.content }} />
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
