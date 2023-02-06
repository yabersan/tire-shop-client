import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: async (build) => {},
});

export default productsReducer.reducer;
