// actions.js

import { ADD_TO_CART, CALCULATE_TOTAL, REMOVE_FROM_CART, SAVED_PRICE, UPDATE_CART_QUANTITY } from "./Actiontypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const updateCartQuantity = (id, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { id, quantity },
});

export const calculateTotal = () => ({
  type: CALCULATE_TOTAL,
});

// export const savedPrice = () => ({
//   type: SAVED_PRICE,
// });

