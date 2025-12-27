import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a new item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    },

    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      } else if (existingItem && quantity <= 0) {
        // Remove item if quantity is zero or negative
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;