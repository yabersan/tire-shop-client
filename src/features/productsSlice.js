import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filterProducts: [],
  error: false,
  loading: false,
  product: {},
};

export const getProduct = createAsyncThunk(
  "product/get",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/products/product/${id}`);
      const product = await res.json();
      if (product.error) {
        return thunkAPI.rejectWithValue(product.error);
      } else {
        return product;
      }
      
    } catch (error) {}
  }
);

export const getProducts = createAsyncThunk(
  "products/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/products`);
      const products = await res.json();
      if (products.error) {
        return thunkAPI.rejectWithValue(products.error);
      } else {
        return products;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterProducts = createAsyncThunk(
  "products/filter",
  async (tireArray, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tireArray }),
      });
      const products = await res.json();
      if (products.error) {
        return thunkAPI.rejectWithValue(products.error);
      } else {
        return products;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder

      .addCase(getProduct.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(filterProducts.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.filterProducts = action.payload;
      })
      .addCase(filterProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsReducer.reducer;
