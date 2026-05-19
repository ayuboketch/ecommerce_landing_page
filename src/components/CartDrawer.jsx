import { Link } from 'react-router-dom';
import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button 
            className="cart-close" 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <Link to="/products" className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}`} className="cart-item">
                  <img 
                    src={item.images[0]} 
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    {item.selectedColor && (
                      <p className="cart-item-color">{item.selectedColor}</p>
                    )}
                    <p className="cart-item-price">${item.price}</p>
                    <div className="cart-item-quantity">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id, item.selectedColor)}
                    aria-label="Remove item"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="cart-shipping">Shipping calculated at checkout</p>
              <Link 
                to="/checkout" 
                className="btn btn-primary cart-checkout"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout <ArrowRight size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
