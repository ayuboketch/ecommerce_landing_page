import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
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
  );
}
