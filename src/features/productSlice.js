import { createAction, createReducer } from "@reduxjs/toolkit/";

const initialState = {
  qty: 1,
  checked: [false, false, false]
};

export const increaseQty = createAction("setQty");
export const decreaseQty = createAction("decQty");
export const check = createAction("check");
export const checkNull = createAction("checkNull");



const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increaseQty, (state, action) => {
      state.qty = state.qty + 1;
    })
    .addCase(decreaseQty, (state, action) => {
      if (state.qty > 1) {
        state.qty = state.qty - 1;
      }
    }).addCase(check, (state, action) => {
      state.checked[action.payload] = !state.checked[action.payload]
      
    }).addCase(checkNull, (state, action) => {
      state.checked = action.payload
    })
});
export default productReducer;
