import { useEffect, useState } from "react";
import "./Navbar.css";
import NavbarLogo from "../../../public/assets/MoriahFavicon.png";
import { NavLink } from "react-router-dom";
import { AlignRight, Search, ShoppingBag, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY >= 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className={`main_navbar ${scrolled ? "scroll_navbar" : ""}`}>
        <div className="main_navbar-container container">
          {/* Logo Section */}
          <NavLink to="/" className="main_navbar-logo">
            <img src={NavbarLogo} alt="Moriah Chicken Grill Logo" />
          </NavLink>

          {/* Navigation Links */}
          <div className={`main_navbar-links ${menuOpen ? "active_menu" : ""}`}>
            <NavLink
              to="/"
              onClick={closeMenu}
              className="main_navbar-nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={closeMenu}
              className="main_navbar-nav-link"
            >
              Products
            </NavLink>
            <NavLink
              to="/about_us"
              onClick={closeMenu}
              className="main_navbar-nav-link"
            >
              About Us
            </NavLink>
            <NavLink
              to="/testimonials"
              onClick={closeMenu}
              className="main_navbar-nav-link"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={closeMenu}
              className="main_navbar-nav-link"
            >
              Contacts
            </NavLink>
          </div>

          {/* Icons Section */}
          <div className="main_navbar-right-section">
            <div className="main_navbar-right-icons hide-on-small">
              <div className="main_navbar-icon">
                <Search size={24} />
              </div>
              <div className="main_navbar-icon">
                <ShoppingBag size={24} />
              </div>
            </div>
            <div className="main_navbar-small-screen-right-icons">
              <div className="main_navbar-right-icons hide-on-large">
                <div className="main_navbar-icon">
                  <Search size={24} />
                </div>
                <div className="main_navbar-icon">
                  <ShoppingBag size={24} />
                </div>
              </div>
              <div className="main_navbar-menu-icon" onClick={toggleMenu}>
                {menuOpen ? (
                  <X size={24} className="close_menu" />
                ) : (
                  <AlignRight size={24} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
