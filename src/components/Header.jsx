import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" className="logo">
          <span className="logo-text">ATELIER</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/products?category=Clothing" className="nav-link" onClick={() => setIsMenuOpen(false)}>Clothing</Link>
          <Link to="/products?category=Home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products?category=Accessories" className="nav-link" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button 
            className="icon-btn cart-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
