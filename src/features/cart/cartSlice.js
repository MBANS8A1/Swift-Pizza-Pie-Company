import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cart: [],

  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //payload: a new item object
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload: will be the id of the item object (pizzaId)
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload: will be the id of the item object (pizzaId)

      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload: will be the id of the item object (pizzaId)

      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity > 0) item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
