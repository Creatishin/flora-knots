import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../types/cartType';

// Utility function to load cart from local storage
const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : null;
  } catch (error) {
    console.error('Error loading cart from local storage:', error);
    return null;
  }
};

// Utility function to save cart to local storage
const saveCartToLocalStorage = (cart: CartState) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to local storage:', error);
  }
};

// Load initial state from local storage if available
const initialState: CartState = loadCartFromLocalStorage() || {
  user_id: 'user_123',
  cart_items: [],
  total_price: 0,
  currency: 'INR',
  discount_applied: 0,
  final_price: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart_items.find(
        (item) => item.product_id === action.payload.product_id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      } else {
        state.cart_items.push(action.payload);
      }

      state.total_price = state.cart_items.reduce((sum, item) => sum + item.subtotal, 0);
      state.final_price = state.total_price - state.discount_applied;

      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart_items = state.cart_items.filter((item) => item.product_id !== action.payload);
      state.total_price = state.cart_items.reduce((sum, item) => sum + item.subtotal, 0);
      state.final_price = state.total_price - state.discount_applied;

      saveCartToLocalStorage(state);
    },

    updateQuantity: (state, action: PayloadAction<{ product_id: string; quantity: number }>) => {
      const item = state.cart_items.find((item) => item.product_id === action.payload.product_id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.subtotal = item.price * action.payload.quantity;
      }

      state.total_price = state.cart_items.reduce((sum, item) => sum + item.subtotal, 0);
      state.final_price = state.total_price - state.discount_applied;

      saveCartToLocalStorage(state);
    },

    applyDiscount: (state, action: PayloadAction<number>) => {
      state.discount_applied = action.payload;
      state.final_price = state.total_price - state.discount_applied;

      saveCartToLocalStorage(state);
    },

    clearCart: (state) => {
      state.cart_items = [];
      state.total_price = 0;
      state.discount_applied = 0;
      state.final_price = 0;

      saveCartToLocalStorage(state);
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, applyDiscount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
