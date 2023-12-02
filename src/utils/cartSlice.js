import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // redux Toolkit
      // We have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // OriginalState = ["cart"]
    clearCart: (state, action) => {
      // RTK - either mutate the existing state or return a new State

      state.items.length = 0; // originalState = []

      // return { items: []};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
