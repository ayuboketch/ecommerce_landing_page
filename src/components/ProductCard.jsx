import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    
    setIsAdding(true);
    addToCart(product, 1, product.colors?.[0] || null);
    setTimeout(() => {
      setIsAdding(false);
      setIsCartOpen(true);
    }, 300);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    
    addToCart(product, 1, product.colors?.[0] || null);
    navigate('/checkout');
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          {!product.inStock && (
            <span className="product-badge sold-out">Sold Out</span>
          )}
        </div>
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
      
      {product.inStock && (
        <div className="product-actions">
          <button 
            className={`btn-add-cart ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} />
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
          <button 
            className="btn-buy-now"
            onClick={handleBuyNow}
            aria-label={`Buy ${product.name} now`}
          >
            <Zap size={16} />
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}
