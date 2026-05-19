import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import './CheckoutSuccessPage.css';

export default function CheckoutSuccessPage() {
  return (
    <main className="checkout-success">
      <div className="success-container">
        <div className="success-icon">
          <CheckCircle size={64} strokeWidth={1.5} />
        </div>
        
        <h1 className="success-title">Thank you for your order!</h1>
        
        <p className="success-message">
          Your order has been confirmed and will be shipped within 2-3 business days.
          {"We've"} sent a confirmation email with your order details.
        </p>

        <div className="success-info">
          <div className="info-item">
            <Package size={24} />
            <div>
              <strong>Order Number</strong>
              <span>#ATL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <Link to="/products" className="btn btn-primary">
            Continue Shopping <ArrowRight size={18} />
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
