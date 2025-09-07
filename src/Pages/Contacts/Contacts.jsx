import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import "./Contacts.css";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import SEO from "../../Components/SEO/SEO";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  // Structured data for Contact Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Moriah Chicken Grill",
    "description": "Get in touch with Moriah Chicken Grill. We'd love to hear from you about our delicious chicken dishes and catering services.",
    "publisher": {
      "@type": "Restaurant",
      "name": "Moriah Chicken Grill",
      "servesCuisine": ["Chicken Dishes", "Grilled Food"],
      "priceRange": "$$",
      "image": "https://moriahchickengrill.vercel.app/assets/logo.png"
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Moriah Chicken Grill"
        description="Get in touch with Moriah Chicken Grill. We're here to answer your questions and take your orders. Visit us or contact us today!"
        keywords="contact Moriah Chicken Grill, chicken restaurant contact, order chicken, catering services, Moriah Grill contact"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="contacts_page below-navbar">
      <div className="contacts_container container">
        <div className="contacts_right-section">
          <div className="contacts_page-title">
            <h1>Get in touch with us.</h1>
            <span>We'd like to hear from you</span>
          </div>
          <div className="contacts_page-description">
            <p>
              If you have any inquiries, or just want to say hi, please use
              the contact form.
            </p>
          </div>
          <div className="contact_socials">
            <div className="contact_email">
              <Mail size={20} /> 
              <span>info@moriahchickengrill.org</span>
            </div>
            <div className="contacts_page-social-media">
              <a 
                href="https://linkedin.com" 
                className="contact_linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                className="contact_facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                className="contact_insta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                className="contact_twitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="contacts_left-section">
          <form onSubmit={handleSubmit} className="contact_form">
            <div className="customer_names">
              {/* First Name */}
              <div className="input_group">
                <input 
                  type="text" 
                  id="first_name" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required 
                />
                <label htmlFor="first_name">First Name</label>
              </div>

              {/* Last Name */}
              <div className="input_group">
                <input 
                  type="text" 
                  id="last_name" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required 
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            {/* Email */}
            <div className="input_group">
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <label htmlFor="email">Email *</label>
            </div>

            {/* Message */}
            <div className="input_group textarea_group">
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="message">Message</label>
            </div>

            <div className="send_button">
              <button type="submit" className="send_btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contacts;