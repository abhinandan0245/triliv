import React, { useMemo, useState } from "react";
import { useGetFaqQuery } from "../../services/faq/faqApi";

const FAQPage = () => {
  // State for managing accordion open/close states
  const { data: faqs = [], isLoading } = useGetFaqQuery();

  const [activeAccordions, setActiveAccordions] = useState({
    shopping: "collapseOne",
    payment: "collapsePaymentOne",
    exchange: "collapseExchangeOne",
  });

   // Group FAQs by title (section)
  const groupedFaqs = useMemo(() => {
    const groups = {};
    faqs.forEach(faq => {
      if (!groups[faq.title]) groups[faq.title] = [];
      groups[faq.title].push(faq);
    });
    return groups;
  }, [faqs]);

  // Function to toggle accordion items
  // const toggleAccordion = (accordionGroup, target) => {
  //   setActiveAccordions((prev) => ({
  //     ...prev,
  //     [accordionGroup]: prev[accordionGroup] === target ? "" : target,
  //   }));
  // };

  // Accordion state
  const [openIndex, setOpenIndex] = useState({});

  const toggleAccordion = (section, idx) => {
    setOpenIndex(prev => ({
      ...prev,
      [section]: prev[section] === idx ? null : idx
    }));
  };

  // if (isLoading) return <p>Loading...</p>;



  return (
    <>
    

      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Frequently Asked Questions</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span></span>
              </div>
              <div className="breadcrumb-item current">FAQs</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}

      {/* FAQ */}
      <section className="s-faq flat-spacing-13">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8">
              <ul className="faq-list">
          {Object.entries(groupedFaqs).map(([section, items]) => (
            <li className="faq-item" key={section}>
              <p className="name-faq">{section}</p>
              <div className="faq-wrap">
                {items.map((faq, idx) => (
                  <div className="widget-accordion" key={faq.id}>
                    <div
                      className={`accordion-title ${openIndex[section] === idx ? "" : "collapsed"}`}
                      onClick={() => toggleAccordion(section, idx)}
                      role="button"
                    >
                      <span>{faq.question}</span>
                      <span className="icon icon-arrow-down"></span>
                    </div>
                    <div
                      className={`accordion-collapse collapse ${openIndex[section] === idx ? "show" : ""}`}
                    >
                      <div className="accordion-body widget-desc">
                        <p className="text-main">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /FAQ */}

      
    </>
  );
};

export default FAQPage;
