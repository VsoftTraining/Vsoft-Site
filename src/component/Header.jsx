import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/vsFinallogo.avif";
import StepUp from "../assets/StepUp-final.avif";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const productsRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const toggleProductsDropdown = (e) => {
    e.stopPropagation();
    setProductsDropdownOpen(!productsDropdownOpen);
    setServicesDropdownOpen(false); // Close services dropdown when products opens
  };

  const toggleServicesDropdown = (e) => {
    e.stopPropagation();
    setServicesDropdownOpen(!servicesDropdownOpen);
    setProductsDropdownOpen(false); // Close products dropdown when services opens
  };

  // Handle mouse enter for desktop
  const handleProductsMouseEnter = () => {
    if (window.innerWidth > 768) {
      setProductsDropdownOpen(true);
      setServicesDropdownOpen(false);
    }
  };

  const handleServicesMouseEnter = () => {
    if (window.innerWidth > 768) {
      setServicesDropdownOpen(true);
      setProductsDropdownOpen(false);
    }
  };

  // Handle mouse leave for desktop
  const handleProductsMouseLeave = () => {
    if (window.innerWidth > 768) {
      setProductsDropdownOpen(false);
    }
  };

  const handleServicesMouseLeave = () => {
    if (window.innerWidth > 768) {
      setServicesDropdownOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains('hamburger') &&
        !event.target.parentElement?.classList.contains('hamburger')
      ) {
        setMenuOpen(false);
        setProductsDropdownOpen(false);
        setServicesDropdownOpen(false);
      }

      if (
        productsRef.current &&
        !productsRef.current.contains(event.target)
      ) {
        setProductsDropdownOpen(false);
      }

      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/home">
            <img src={logo} alt="VSoft Solutions" className="logo-image" />
          </a>
        </div>

        {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}

        <div className={`nav-wrapper ${menuOpen ? "menu-open" : ""}`}>
          <button
            className="close-menu-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <span className="close-icon" style={{ fontSize: "30px" }}>×</span>
          </button>

          <nav ref={navRef} className="navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={closeMenu}>
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link" onClick={closeMenu}>
                  <b>About us</b>
                </a>
              </li>
              {/* Services Dropdown */}
              <li
                className="nav-item dropdown-container"
                ref={servicesRef}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="dropdown-toggle"
                  onClick={toggleServicesDropdown}
                  aria-expanded={servicesDropdownOpen}
                >
                  <b>Our Services</b>
                  <svg
                    className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <ul className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <a href="/servicespage" className="dropdown-item" onClick={closeMenu}>
                      All Services
                    </a>
                  </li>
                  <li>
                    <a href="/website-development" className="dropdown-item" onClick={closeMenu}>
                      Website Development
                    </a>
                  </li>
                  <li>
                    <a href="/app-development" className="dropdown-item" onClick={closeMenu}>
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="/digital-marketing" className="dropdown-item" onClick={closeMenu}>
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="/ui-ux-design" className="dropdown-item" onClick={closeMenu}>
                      UI/UX Design
                    </a>
                  </li>
                </ul>
              </li>

              {/* Products Dropdown */}
              <li
                className="nav-item dropdown-container"
                ref={productsRef}
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button
                  className="dropdown-toggle"
                  onClick={toggleProductsDropdown}
                  aria-expanded={productsDropdownOpen}
                >
                  <b>Products</b>
                  <svg
                    className={`dropdown-arrow ${productsDropdownOpen ? 'open' : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <ul className={`dropdown-menu ${productsDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <a
                      href="https://vconstech.thevsoft.com/"
                      className="dropdown-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      Vconstech
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://simplepos.in/"
                      className="dropdown-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      POS Billing Software
                    </a>
                  </li> */}
                </ul>
              </li>

              <li className="nav-item">
                <a href="/career" className="nav-link" onClick={closeMenu}>
                  <b>Career</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="/culture" className="nav-link" onClick={closeMenu}>
                  <b>Our Culture</b>
                </a>
              </li>
              <li className="nav-item contact-btn-container">
                <a href="/contact" className="contact-btn" onClick={closeMenu}>
                  Contact us
                </a>
              </li>
              <li className="nav-item stepup-btn-container">
                <a href="/vstepup" className="stepup-link" onClick={closeMenu}>
                  <div className="stepup-content">
                    <img
                      src={StepUp}
                      alt="StepUp"
                      className="stepup-image"
                    />
                    <span className="stepup-text">Explore our upskilling courses</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hamburger-container">
          <button
            className={`hamburger-btn dots-btn ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;