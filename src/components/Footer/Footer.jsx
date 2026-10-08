import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo">
              Nova<span>Flow</span>
            </div>

            <p>
              Smart automation for modern businesses.
              Simplify your workflows and grow faster.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">◎</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Product</h3>

            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Integrations</a>
            <a href="#">Pricing</a>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>

            <a href="#">Documentation</a>
            <a href="#">Help Center</a>
            <a href="#">Community</a>
            <a href="#">API</a>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 NovaFlow. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;