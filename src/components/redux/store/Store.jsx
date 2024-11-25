import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Reducerprod'; // Wishlist or product reducer
import cartReducer, { loadCart } from '../reducer/Cartreducer';


// Load preloaded state asynchronously for cart
const loadPreloadedState = async () => {
  const preloadedCart = await loadCart(); // Assuming loadCart fetches the cart from localStorage or similar
  return {
    cart: preloadedCart, // Preloaded state for cart
  };
};

// Function to create the store
const createAppStore = async () => {
  const preloadedState = await loadPreloadedState();

  const store = configureStore({
    reducer: {
      products: productReducer, // Wishlist (products) reducer
      cart: cartReducer,        // Cart reducer
    },
    preloadedState, // Set preloaded state for the cart
  });

  return store;
};

export default createAppStore;
