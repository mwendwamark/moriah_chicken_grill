import { Diamond, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import FooterLogo from "../../../public/assets/MoriahFavicon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Row - Four Columns */}
        <div className="footer-top">
          <div className="footer-column">
            <Diamond className="column-icon" />
            <h3>Pages</h3>
            <div className="footer-content-pages">
              {/* <p>
                12/A, New booston tower,
                <br />
                London, UK
              </p> */}
              <a href="/">Home</a>
              <a href="/">Products</a>
              <a href="/">About Us</a>
              <a href="/">Testimonials</a>
              <a href="/">Contacts</a>
            </div>
          </div>
          <div className="footer-column">
            <Diamond className="column-icon" />
            <h3>Get In Touch</h3>
            <div className="footer-content">
              <p>T. +12 344 0567899</p>
              <p>M. info@example.com</p>
            </div>
          </div>

          <div className="footer-column">
            <Diamond className="column-icon" />
            <h3>Address</h3>
            <div className="footer-content">
              <p>
                71 Madison Ave, New York,
                <br />
                NY 10016
              </p>
            </div>
          </div>

          <div className="footer-column">
            <Diamond className="column-icon" />
            <h3>Opening Hours</h3>
            <div className="footer-content">
              <p>Mon — Thu: 10:00 am — 01:00 am</p>
              <p>Fri — Sun: 10:00 am — 02:00 am</p>
            </div>
          </div>
        </div>

        {/* Horizontal Divider with Logo */}
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="footer-logo">
            <img src={FooterLogo} alt="Logo" />
          </div>
          <div className="divider-line"></div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>Copyright & design by ©Moriah 2025, All rights reserved</p>
          </div>

          <div className="social-links">
            <a href="#" aria-label="FAQ">
              <Linkedin />
            </a>
            <a href="#" aria-label="Careers">
              <Facebook />
            </a>
            <a href="#" aria-label="Terms & Conditions">
              <Twitter />
            </a>
            <a href="#" aria-label="Contact">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
