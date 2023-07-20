import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);
  const addItemToCartHandler = (item) => {
    updateItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      const existingCartItem = prevItems[existingItemIndex];

      let updatedItem;
      let updatedItems;

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          quantity: Number(existingCartItem.quantity) + Number(item.quantity),
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      } else {
        return [item, ...prevItems];
      }
    });
  };

  const removeItemFromCartHandler = (item) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount - item.price;
    });

    updateItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      const existingCartItem = prevItems[existingItemIndex];

      let updatedItems;

      if(existingCartItem.quantity === 1) {
        updatedItems = prevItems.filter(filterItem => filterItem.id !== existingCartItem.id);
        return updatedItems;
      }else {
        const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity - 1};
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      }
    });
  };

  const totalAmountUpdateHandler = (amount) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount + amount;
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    updateTotalAmount: totalAmountUpdateHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
