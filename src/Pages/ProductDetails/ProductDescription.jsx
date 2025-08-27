import React, { useState } from "react";

const ProductDescription = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        {/* Descriptions Accordion */}
        <div className="widget-accordion wd-product-descriptions">
          <div
            className={`accordion-title ${
              activeAccordion === "description" ? "" : "collapsed"
            }`}
            onClick={() => toggleAccordion("description")}
            aria-expanded={activeAccordion === "description"}
            aria-controls="description"
            role="button"
          >
            <span>Descriptions</span>
            <span className="icon icon-arrow-down" />
          </div>
          <div
            id="description"
            className={`collapse ${
              activeAccordion === "description" ? "show" : ""
            }`}
          >
            <div className="accordion-body widget-desc">
              <div className="item">
                <p className="fw-medium title">Composition</p>
                <ul>
                  <li>Viscose 55%, Linen 45%</li>
                  <li>We exclude the weight of minor components</li>
                </ul>
              </div>
              <p className="item">Additional material information</p>
              <div className="item">
                <p className="title">
                  The total weight of this product contains:
                </p>
                <ul>
                  <li>55% LivaEco™ viscose</li>
                  <li>Viscose 55%</li>
                </ul>
              </div>
              <ul className="item">
                <li>
                  We exclude the weight of minor components such as, but not
                  exclusively: threads, buttons, zippers, embellishments and
                  prints.
                </li>
                <li>
                  The total weight of the product is calculated by adding the
                  weight of all layers and main components together. Based on
                  that, we calculate how much of that weight is made out by each
                  material. For sets &amp; multipacks all pieces are counted
                  together as one product in calculations.
                </li>
                <li>Materials in this product explained</li>
                <li>
                  LinenLinen is a natural bast fibre derived from flax plants.
                </li>
                <li>
                  LivaEco™ viscoseLivaEco™ viscose is a branded viscose fibre,
                  made from wood pulp.
                </li>
                <li>
                  {" "}
                  ViscoseViscose is a regenerated cellulose fibre commonly made
                  from wood, but the raw material could also consist of other
                  cellulosic materials.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Materials Accordion */}
        <div className="widget-accordion wd-product-descriptions">
          <div
            className={`accordion-title ${
              activeAccordion === "material" ? "" : "collapsed"
            }`}
            onClick={() => toggleAccordion("material")}
            aria-expanded={activeAccordion === "material"}
            aria-controls="material"
            role="button"
          >
            <span>Ingridiance</span>
            <span className="icon icon-arrow-down" />
          </div>
          <div
            id="material"
            className={`collapse ${
              activeAccordion === "material" ? "show" : ""
            }`}
          >
            <div className="accordion-body widget-material">
              <div className="item">
                <p className="fw-medium title">Materials Care</p>
                <ul>
                  <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                  <li>Care: Hand wash</li>
                  <li>Imported</li>
                  <li>Machine wash max. 30ºC. Short spin.</li>
                  <li>Iron maximum 110ºC.</li>
                  <li>Do not bleach/bleach.</li>
                  <li>Do not dry clean.</li>
                  <li>Tumble dry, medium hear.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       

        {/* Additional Information Accordion */}
        <div className="widget-accordion wd-product-descriptions">
          <div
            className={`accordion-title ${
              activeAccordion === "addInformation" ? "" : "collapsed"
            }`}
            onClick={() => toggleAccordion("addInformation")}
            aria-expanded={activeAccordion === "addInformation"}
            aria-controls="addInformation"
            role="button"
          >
            <span>Additional Information</span>
            <span className="icon icon-arrow-down" />
          </div>
          <div
            id="addInformation"
            className={`collapse ${
              activeAccordion === "addInformation" ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facere ullam? Corporis magnam deserunt alias inventore nam beatae praesentium explicabo.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDescription;
