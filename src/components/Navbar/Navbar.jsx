import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <NavLink to="/" className="logo" onClick={closeMenu}>
            Nova<span>Flow</span>
          </NavLink>

          <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/features" onClick={closeMenu}>
              Features
            </NavLink>

            <NavLink to="/solutions" onClick={closeMenu}>
              Solutions
            </NavLink>

            <NavLink to="/pricing" onClick={closeMenu}>
              Pricing
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink
              to="/contact"
              className="mobile-get-started"
              onClick={closeMenu}
            >
              Get Started
            </NavLink>
          </div>

          <NavLink to="/contact" className="nav-button">
            Get Started
          </NavLink>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </nav>

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}

export default Navbar;