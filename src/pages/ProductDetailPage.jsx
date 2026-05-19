import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Check } from 'lucide-react';
import { getProductById, getFeaturedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, setIsCartOpen } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const relatedProducts = getFeaturedProducts().filter(p => p.id !== product?.id).slice(0, 4);

  if (!product) {
    return (
      <main className="product-not-found">
        <div className="container">
          <h1>Product not found</h1>
          <Link to="/products" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setIsCartOpen(true);
    }, 500);
  };

  return (
    <main className="product-detail">
      <div className="container">
        <Link to="/products" className="back-link">
          <ChevronLeft size={20} />
          Back to Shop
        </Link>

        <div className="product-layout">
          <div className="product-gallery">
            <div className="gallery-main">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="gallery-image"
              />
            </div>
            {product.images.length > 1 && (
              <div className="gallery-thumbs">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-info-detail">
            <span className="product-category-detail">{product.category}</span>
            <h1 className="product-name-detail">{product.name}</h1>
            <p className="product-price-detail">${product.price}</p>

            <p className="product-description">{product.description}</p>

            {product.colors && product.colors.length > 0 && (
              <div className="product-option">
                <label className="option-label">Color: <span>{selectedColor}</span></label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="product-option">
              <label className="option-label">Quantity</label>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span>{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <button 
              className={`btn btn-primary add-to-cart ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {isAdded ? (
                <>
                  <Check size={18} /> Added to Cart
                </>
              ) : product.inStock ? (
                'Add to Cart'
              ) : (
                'Out of Stock'
              )}
            </button>

            <div className="product-meta">
              <div className="meta-item">
                <strong>Free Shipping</strong>
                <span>On orders over $100</span>
              </div>
              <div className="meta-item">
                <strong>Easy Returns</strong>
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2 className="related-title">You May Also Like</h2>
            <div className="related-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
