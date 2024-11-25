import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores products added to the cart
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, size } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.size === size);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          id,
          title,
          price,
          size,
          quantity: 1,
          totalPrice: price,
        });
      }
      state.totalQuantity += 1;
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
    
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id && item.size === size);

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.splice(existingItemIndex, 1);
      }
      state.totalQuantity -= 1;
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
