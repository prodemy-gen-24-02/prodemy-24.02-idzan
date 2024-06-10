import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        // Produk sudah ada dalam keranjang, tambahkan quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: isHomePage
            ? updatedItems[existingItemIndex].quantity + 1
            : updatedItems[existingItemIndex].quantity + product.quantity,
        };
        return updatedItems;
      } else {
        // Produk belum ada dalam keranjang, tambahkan sebagai item baru dengan quantity 1
        return [
          ...prevItems,
          {
            ...product,
            quantity: isHomePage ? 1 : product.quantity,
          },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalQuantity += cartItems[i].quantity;
    }
    return totalQuantity;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
