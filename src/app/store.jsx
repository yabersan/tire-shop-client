import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";
import productsReducer from "../features/productsSlice";
import chatsReducer from "../features/chatSlice";
import filterReducer from "../features/filterProductSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    cartReducer,
    productsReducer,
    chatsReducer,
    filterReducer,
  },
});
