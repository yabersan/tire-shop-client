import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  cart: [],
  error: false,
  loading: false,
  removeLoader: false,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default cartReducer.reducer;
