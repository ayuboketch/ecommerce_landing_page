import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1, selectedColor = null) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedColor === selectedColor
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity, selectedColor }];
    });
  };

  const removeFromCart = (productId, selectedColor) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === productId && item.selectedColor === selectedColor))
    );
  };

  const updateQuantity = (productId, selectedColor, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
