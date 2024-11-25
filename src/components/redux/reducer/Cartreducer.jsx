import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_TO_CART, CALCULATE_TOTAL, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../action/Actiontypes';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item =>
        item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.title === action.payload.title
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.title === action.payload.title
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalPrice: state.totalPrice + action.payload.discountedPrice,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        totalPrice: state.totalPrice + action.payload.discountedPrice,
      };

      case REMOVE_FROM_CART:
        console.log('Before REMOVE_FROM_CART:', state.items);
        console.log('Payload:', action.payload);
        const filteredItems = state.items.filter(
          item => !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
        );
        console.log('After REMOVE_FROM_CART:', filteredItems);
        return {
          ...state,
          items: filteredItems,
          totalPrice: state.totalPrice - action.payload.quantity * action.payload.discountedPrice,
        };
      
      
        case UPDATE_CART_QUANTITY:
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
                ? { ...item, quantity: action.payload.quantity }
                : item
            ),
            totalPrice: state.items.reduce(
              (sum, item) =>
                sum +
                (item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
                  ? action.payload.quantity * item.discountedPrice
                  : item.quantity * item.discountedPrice),
              0
            ),
          };


        

    case CALCULATE_TOTAL:
      const total = state.items.reduce(
        (sum, item) => sum + (item.discountedPrice * item.quantity),
        0
      );
      return {
        ...state,
        totalPrice: total,
      };

    default:
      return state;
  }
};

// Persist cart data to AsyncStorage
export const saveCart = async (cartItems) => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Error saving cart', error);
  }
};

// Load cart data from AsyncStorage
export const loadCart = async () => {
  try {
    const savedCart = await AsyncStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart', error);
  }
  return initialState;
};

export default cartReducer;
