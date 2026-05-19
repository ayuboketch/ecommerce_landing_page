import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const shipping = cartTotal > 100 ? 0 : 12;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    navigate('/checkout/success');
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-empty">
        <div className="container">
          <h1>Your cart is empty</h1>
          <p>Add some items to your cart to proceed with checkout.</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout">
      <div className="checkout-container">
        <div className="checkout-main">
          <Link to="/products" className="back-link">
            <ChevronLeft size={20} />
            Continue Shopping
          </Link>

          <div className="checkout-steps">
            <div className={`checkout-step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Shipping</span>
            </div>
            <div className="step-divider" />
            <div className={`checkout-step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            {step === 1 && (
              <div className="form-section">
                <h2 className="form-title">
                  <Truck size={20} />
                  Shipping Information
                </h2>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Street address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apartment">Apartment, suite, etc. (optional)</label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row form-row-3">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="For delivery updates"
                  />
                </div>

                <button type="submit" className="btn btn-primary checkout-btn">
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-section">
                <h2 className="form-title">
                  <CreditCard size={20} />
                  Payment Details
                </h2>
                
                <div className="shipping-summary">
                  <p><strong>Shipping to:</strong></p>
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.address}{formData.apartment && `, ${formData.apartment}`}</p>
                  <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                  <button 
                    type="button" 
                    className="edit-shipping"
                    onClick={() => setStep(1)}
                  >
                    Edit
                  </button>
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      required
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      placeholder="123"
                      maxLength="4"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary checkout-btn"
                  disabled={isProcessing}
                >
                  <Lock size={18} />
                  {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                </button>

                <p className="secure-notice">
                  <Lock size={14} />
                  Your payment information is encrypted and secure.
                </p>
              </div>
            )}
          </form>
        </div>

        <aside className="checkout-sidebar">
          <div className="order-summary">
            <h3 className="summary-title">Order Summary</h3>
            
            <div className="summary-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}`} className="summary-item">
                  <div className="summary-item-image">
                    <img src={item.images[0]} alt={item.name} />
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                  <div className="summary-item-details">
                    <p className="item-name">{item.name}</p>
                    {item.selectedColor && (
                      <p className="item-variant">{item.selectedColor}</p>
                    )}
                  </div>
                  <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {cartTotal < 100 && (
              <p className="free-shipping-notice">
                Add ${(100 - cartTotal).toFixed(2)} more for free shipping!
              </p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
