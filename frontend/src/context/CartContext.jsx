import { createContext, useState, useContext } from "react";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const pizzaExists = prevCart.find((item) => item.id === pizza.id);
      if (pizzaExists) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Función para actualizar el conteo de un producto
  const updateCartCount = (id, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count + amount } : item
        )
        .filter((item) => item.count > 0); // Filtrar los productos con count <= 0
    });
  };

  // Calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartCount,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useCart = () => useContext(CartContext);
