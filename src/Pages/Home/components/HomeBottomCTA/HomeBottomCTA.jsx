import React from 'react';
import './HomeBottomCTA.css';
// import homeCtaImg from "../../../../assets/HomeCTA.jpg";
import homeCtaImg from "../../../../assets/chef1.webp";

import { Mail, PhoneCall } from 'lucide-react';

const HomeBottomCTA = () => {
  return (
    <section className="cta-section section">
      <div className="cta-container">
        {/* Left Side - Image */}
        <div className="cta-image-section">
          <img 
            src={homeCtaImg}
            alt="Professional chef preparing grilled chicken in restaurant kitchen"
            className="cta-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="cta-content-section">
          <div className="cta-content">
            <h2 className="cta-heading">
              Savor Authentic Taste at Moriah Chicken Grill
            </h2>
            
            <p className="cta-paragraph">
              Book a table or order in to experience the finest grilled chicken in town. 
              Whether you're planning a family dinner or craving a solo treat, we've got you covered.
            </p>

            <div className="cta-buttons-group">
              <button className="btn btn-outline btn-icon">
                <PhoneCall/>
                0712 345 678
              </button>
              
              <button className="btn btn-outline btn-icon">
                <Mail/>
                info@moriahgrill.co.ke
              </button>
              
              <button className="btn btn-yellow">
                Make Order
              </button>
            </div>

            {/* Hand-drawn arrow */}
            <div className="cta-arrow">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 25C25 15, 45 35, 65 20C80 10, 90 30, 105 25" 
                  stroke="#f5c412" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                />
                <path 
                  d="M95 20L105 25L100 35" 
                  stroke="#f5c412" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBottomCTA;