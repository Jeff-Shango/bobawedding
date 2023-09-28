import React, { createContext, useState, useMemo } from "react";
import { getProductsData } from "./stripeFunctions.js";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

function calculateTotalCost(cartProducts) {
  let totalCost = 0;
  cartProducts.forEach((cartItem) => {
    const productData = getProductsData(cartItem.id);
    totalCost += productData.price * cartItem.quantity;
  });
  return totalCost;
}

function updateCartProducts(cartProducts, id, operation) {
  return cartProducts.map((product) =>
    product.id === id
      ? { ...product, quantity: operation(product.quantity) }
      : product
  );
}

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const contextValue = useMemo(() => {
    function getProductQuantity(id) {
      const quantity = cartProducts.find((product) => product.id === id)?.quantity;
      return quantity || 0;
    }

    function addOneToCart(id) {
      const updatedCartProducts = getProductQuantity(id) === 0
        ? [...cartProducts, { id, quantity: 1 }]
        : updateCartProducts(cartProducts, id, (quantity) => quantity + 1);
      setCartProducts(updatedCartProducts);
    }

    function removeOneFromCart(id) {
      const quantity = getProductQuantity(id);
      if (quantity === 1) {
        deleteFromCart(id);
      } else {
        const updatedCartProducts = updateCartProducts(cartProducts, id, (quantity) => quantity - 1);
        setCartProducts(updatedCartProducts);
      }
    }

    function deleteFromCart(id) {
      const updatedCartProducts = cartProducts.filter((currentProduct) => currentProduct.id !== id);
      setCartProducts(updatedCartProducts);
    }

    return {
      items: cartProducts,
      getProductQuantity,
      addOneToCart,
      removeOneFromCart,
      deleteFromCart,
      getTotalCost: () => calculateTotalCost(cartProducts),
    };
  }, [cartProducts]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
