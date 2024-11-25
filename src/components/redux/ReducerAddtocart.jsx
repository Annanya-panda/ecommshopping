import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,

};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, size, imageUrl } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.size === size);
    
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      } else {
        // Use the first image in the array or a fallback
        const validImageUrl = Array.isArray(imageUrl) && imageUrl.length > 0 ? imageUrl[0] : null;
        state.items.push({ id, title, price, size, imageUrl: validImageUrl, quantity: 1, totalPrice: price });
      }
    
      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id && item.size === size);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items.splice(existingItemIndex, 1);
      }
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
