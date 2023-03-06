import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filterProducts: [],
  error: false,
  loading: false,
  product: {},
  cart: [],
  cartLength: [],
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

export const getProductsById = createAsyncThunk(
  "products/getId",
  async (act, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/products/products`, {
        method: "POST",
        body: JSON.stringify({
          arr: act.arr,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeChecked: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item._doc._id === action.payload[0]
          ? { ...item, checked: action.payload[1] }
          : item;
      });
      state.cartLength = state.cart;
    },
    delProd: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item._doc._id === action.payload ? null : item;
      });
      state.cartLength = state.cart;
    },
  },
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
      })
      .addCase(getProductsById.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartLength = state.cart;
      });
  },
});
export const { changeChecked, delProd } = productsReducer.actions;

export default productsReducer.reducer;
