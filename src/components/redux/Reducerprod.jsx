
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.wishlist.find(item => item.title === product.title);
      if (exists) {
        state.wishlist = state.wishlist.filter(item => item.title !== product.title);
      } else {
        state.wishlist.push(product);
      }
    },
  },
});

export const { toggleWishlist } = productSlice.actions;
export default productSlice.reducer;
