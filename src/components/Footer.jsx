import { Link } from 'react-router-dom';
import { Mail, Globe, Send } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">ATELIER</Link>
            <p className="footer-tagline">
              Curated essentials for mindful living. Quality craftsmanship meets timeless design.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Email us" className="social-link">
                <Mail size={20} />
              </a>
              <a href="#" aria-label="Visit our website" className="social-link">
                <Globe size={20} />
              </a>
              <a href="#" aria-label="Contact us" className="social-link">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Shop</h4>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?category=Clothing">Clothing</Link></li>
              <li><Link to="/products?category=Accessories">Accessories</Link></li>
              <li><Link to="/products?category=Home">Home</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Support</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Atelier. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
