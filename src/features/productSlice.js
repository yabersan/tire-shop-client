import { createAction, createReducer } from "@reduxjs/toolkit/";

const initialState = {
  qty: 1,
};

export const increaseQty = createAction("setQty");
export const decreaseQty = createAction("decQty");

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increaseQty, (state, action) => {
      state.qty = state.qty + 1;
    })
    .addCase(decreaseQty, (state, action) => {
      if (state.qty > 1) {
        state.qty = state.qty - 1;
      }
    });
});
export default productReducer;
