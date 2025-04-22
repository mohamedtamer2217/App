import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 px-md-4 py-2">
      <div className="container-fluid">

        {/* Logo - Made larger */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/logo-gh.png"
            alt="Logo"
            className="logo-img"
          />
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links and Right Section */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center gap-3 gap-lg-4 mt-3 mt-lg-0">

            {/* Nav Links */}
            <ul className="navbar-nav nav-underline mb-2 mb-lg-0">
              <li className="nav-item mx-lg-1 mx-xl-2">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item mx-lg-1 mx-xl-2">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item dropdown mx-lg-1 mx-xl-2">
                <a
                  className="nav-link dropdown-toggle with-arrow"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul className="dropdown-menu enhanced-dropdown">
                  <li><a className="dropdown-item" href="#">Project 1</a></li>
                  <li><a className="dropdown-item" href="#">Project 2</a></li>
                  <li><a className="dropdown-item" href="#">Project 3</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">All Projects</a></li>
                </ul>
              </li>
              <li className="nav-item mx-lg-1 mx-xl-2">
                <a className="nav-link" href="#">G-community</a>
              </li>
              <li className="nav-item mx-lg-1 mx-xl-2">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>

            {/* Right Section: Contact & Icons */}
            <div className="right-section d-flex align-items-center gap-3">
              <span className="contact-badge text-white">
                <i className="bi bi-telephone-fill"></i>
                <span className="contact-number">19086</span>
              </span>
              
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook text-white"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram text-white"></i>
                </a>
                <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
                  <i className="bi bi-whatsapp text-white"></i>
                </a>
              </div>
              
              <span className="language-switcher text-white">العربية</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;