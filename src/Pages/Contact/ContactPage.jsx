import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You'll need to implement form submission logic here
    // This could be using fetch API, axios, or your preferred method
    console.log('Form submitted');
    // In a real app, you would send the form data to your backend
  };

  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Contact Us</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">Home</a>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Contact Us</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}
      
      {/* Contact */}
      <section className="s-contact flat-spacing-13">
        <div className="container">
          <div className="wg-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27294.62418958524!2d151.25730233429948!3d-33.82005608618041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ab8bc95a137f%3A0x358f04a7f6f5f6a6!2sGrotto%20Point%20Lighthouse!5e0!3m2!1sen!2s!4v1733976867160!5m2!1sen!2s" 
              className="map" 
              style={{border: 'none'}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Google Maps Location"
            />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="content-left">
                <div className="title fw-medium display-md-2">
                  Contact Us
                </div>
                <p className="sub-title text-main">
                  Have a question? Please contact us using the customer support <br /> channels below.
                </p>
                <ul className="contact-list">
                  <li>
                    <p>
                      Address:
                      <a className="link" href="https://www.google.com/maps?q=15Yarranst,Punchbowl,NSW,Australia" target="_blank" rel="noopener noreferrer">
                        15 Yarran st, Punchbowl, NSW, Australia
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Phone number:
                      <a className="link" href="tel:123456">
                        +1 234 567
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Email:
                      <a className="link" href="mailto:contact@vineta.com">
                        contact@vineta.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Open:
                      <span className="text-main">
                        8am - 7pm, Mon - Sat
                      </span>
                    </p>
                  </li>
                </ul>
                <ul className="tf-social-icon style-large">
                  <li>
                    <a href="https://www.facebook.com/" className="social-item social-facebook" target="_blank" rel="noopener noreferrer">
                      <i className="icon icon-fb" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" className="social-item social-instagram" target="_blank" rel="noopener noreferrer">
                      <i className="icon icon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/" className="social-item social-x" target="_blank" rel="noopener noreferrer">
                      <i className="icon icon-x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.snapchat.com/" className="social-item social-snapchat" target="_blank" rel="noopener noreferrer">
                      <i className="icon icon-snapchat" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-right">
                <div className="title fw-medium display-md-2">
                  Get In Touch
                </div>
                <p className="sub-title text-main">
                  Please submit all general enquiries in the contact form below and we look forward to
                  hearing from you soon.
                </p>
                <div className="form-contact-wrap">
                  <form onSubmit={handleSubmit} className="form-default" id="contactform">
                    <div className="wrap">
                      <div className="cols">
                        <fieldset>
                          <label htmlFor="name">Your name*</label>
                          <input name="name" id="name" className="radius-8" type="text" required />
                        </fieldset>
                        <fieldset>
                          <label htmlFor="email">Your email*</label>
                          <input name="email" id="email" className="radius-8" type="email" required />
                        </fieldset>
                      </div>
                      <div className="cols">
                        <fieldset className="textarea">
                          <label htmlFor="message">Message*</label>
                          <textarea name="message" id="message" required className="radius-8" defaultValue={""} />
                        </fieldset>
                      </div>
                      <div className="button-submit send-wrap">
                        <button className="tf-btn animate-btn" type="submit">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Contact */}
    </div>
  );
};

export default ContactPage;