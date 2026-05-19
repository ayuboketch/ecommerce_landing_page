import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">New Collection 2026</span>
          <h1 className="hero-title text-balance">
            Curated essentials for mindful living
          </h1>
          <p className="hero-description text-pretty">
            Discover thoughtfully designed pieces that bring elegance and intention to your everyday life.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Shop Collection <ArrowRight size={18} />
            </Link>
            <Link to="/products?category=Home" className="btn btn-secondary">
              Explore Home
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" 
            alt="Minimalist interior with curated objects"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <Link to="/products" className="section-link">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="category-grid">
            <Link to="/products?category=Clothing" className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80" 
                alt="Clothing"
              />
              <div className="category-overlay">
                <span className="category-name">Clothing</span>
              </div>
            </Link>
            <Link to="/products?category=Accessories" className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" 
                alt="Accessories"
              />
              <div className="category-overlay">
                <span className="category-name">Accessories</span>
              </div>
            </Link>
            <Link to="/products?category=Home" className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" 
                alt="Home"
              />
              <div className="category-overlay">
                <span className="category-name">Home</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Pieces</h2>
            <Link to="/products" className="section-link">
              Shop All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="story-image">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
            alt="Artisan crafting"
          />
        </div>
        <div className="story-content">
          <span className="story-label">Our Story</span>
          <h2 className="story-title text-balance">Crafted with intention, designed to last</h2>
          <p className="story-description text-pretty">
            Every piece in our collection is thoughtfully sourced from artisans who share our commitment to quality and sustainability. We believe in fewer, better things.
          </p>
          <Link to="/products" className="btn btn-secondary">
            Learn More <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="container">
          <blockquote className="testimonial-quote">
            <p className="text-balance">
              {'"Atelier has completely transformed how I think about shopping. Every piece feels intentional and beautifully made."'}
            </p>
            <footer>
              <cite>Sarah M., New York</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Join our community</h2>
            <p className="newsletter-description">
              Be the first to know about new arrivals, exclusive offers, and stories from our artisans.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
