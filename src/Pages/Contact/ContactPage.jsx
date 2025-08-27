import React, { useState } from "react";
import { useCreateContactMessageMutation } from "../../services/contactmessage/contactMessageApi";
import { toast } from "react-toastify";
import { useGetContactusQuery } from "../../services/contact/contactusApi";

const ContactPage = () => {
   const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [createContactMessage, { isLoading, isSuccess, error }] =
    useCreateContactMessageMutation();

    // Fetch contact page data
  const { data: contactData, isLoading: isContactLoading } = useGetContactusQuery();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const response = await createContactMessage(form);
     setForm({ name: "", email: "", message: "" }); // reset form
     toast.success(response.data.message || "Message sent successfully!");
   } catch (error) {
     console.error("Failed to create contact message:", error);
     toast.error(error?.data?.message || "Failed to send message.");
   }
  };

   if (isContactLoading) return <p>Loading contact info...</p>;

  const contact = contactData?.data; // your backend returns { data: { content, facebook, etc. } }


  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Contact Us</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current">Contact Us</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}

      {/* Contact */}
      <section className="s-contact flat-spacing-13">
        <div className="container">
          {/* <div className="wg-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27294.62418958524!2d151.25730233429948!3d-33.82005608618041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ab8bc95a137f%3A0x358f04a7f6f5f6a6!2sGrotto%20Point%20Lighthouse!5e0!3m2!1sen!2s!4v1733976867160!5m2!1sen!2s"
              className="map"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div> */}
          <div className="row">
             {/* contact us content */}
            <div className="col-lg-6">
              <div className="content-left">
                 <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: contact?.content }}
                />
               <ul className="tf-social-icon style-large mt-4">
                  {contact?.facebook && (
                    <li>
                      <a
                        href={contact.facebook}
                        className="social-item social-facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon icon-fb" />
                      </a>
                    </li>
                  )}
                  {contact?.instagram && (
                    <li>
                      <a
                        href={contact.instagram}
                        className="social-item social-instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon icon-instagram" />
                      </a>
                    </li>
                  )}
                  {contact?.twitter && (
                    <li>
                      <a
                        href={contact.twitter}
                        className="social-item social-x"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon icon-x" />
                      </a>
                    </li>
                  )}
                  {contact?.snapchat && (
                    <li>
                      <a
                        href={contact.snapchat}
                        className="social-item social-snapchat"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon icon-snapchat" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* get in touch  */}
            <div className="col-lg-6">
              <div className="content-right">
                <div className="title fw-medium display-md-2">Get In Touch</div>
                <p className="sub-title text-main">
                  Please submit all general enquiries in the contact form below
                  and we look forward to hearing from you soon.
                </p>
                <div className="form-contact-wrap">
                  <form
                    onSubmit={handleSubmit}
                    className="form-default"
                    id="contactform"
                  >
                    <div className="wrap">
                      <div className="cols">
                        <fieldset>
                          <label htmlFor="name">Your name*</label>
                          <input
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            className="radius-8"
                            type="text"
                            required
                          />
                        </fieldset>
                        <fieldset>
                          <label htmlFor="email">Your email*</label>
                          <input
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            className="radius-8"
                            type="email"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="cols">
                        <fieldset className="textarea">
                          <label htmlFor="message">Message*</label>
                          <textarea
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="radius-8"
                            defaultValue={""}
                          />
                        </fieldset>
                      </div>
                      <div className="button-submit send-wrap">
                        <button className="tf-btn animate-btn" type="submit">
                          Send
                        </button>

                        {isSuccess && (
  <div className="alert alert-success mt-3">
    ✅ Thank you for reaching out! We’ll get back to you soon.
  </div>
)}
{error && (
  <div className="alert alert-danger mt-3">
    ❌ Oops! Something went wrong. Please try again later.
  </div>
)}

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
