import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  cart: [],
  cartLength: [],
  error: false,
  loading: false,
  removeLoader: false,
  inCart: false,
};

export const productAdd = createAsyncThunk(
  "post/addProduct",
  async (act, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/cart/add", {
        method: "POST",
        body: JSON.stringify({
          count: act.count,
          prodId: act.id,
          checked: act.checked,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(Error);
    }
  }
);

export const addProducts = createAsyncThunk(
  "post/addProducts",
  async (act, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/cart/addProds", {
        method: "POST",
        body: JSON.stringify({
          act,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(Error);
    }
  }
);

export const isInCart = createAsyncThunk(
  "post/isInCart",
  async (act, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/cart/isInCart", {
        method: "POST",
        body: JSON.stringify({
          prodId: act.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(Error);
    }
  }
);

export const deleteProd = createAsyncThunk(
  "post/deleteProd",
  async (act, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/cart/delete", {
        method: "POST",
        body: JSON.stringify({
          prodId: act,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(Error);
    }
  }
);

export const getProdsFromCart = createAsyncThunk(
  "get/cart",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        "http://localhost:4040/cart/getProductsFromCart",
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productAdd.fulfilled, (state, action) => {

        state.inCart = true;
        if(action.payload.length === 3){
          state.cartLength = action.payload[0][0].products
          state.cart = state.cart.map(item => {
            return item._doc._id === action.payload[1] ? {...item, checked: action.payload[2]} : item
          })
        }else{
          state.cartLength = action.payload[0].products
        }
       

      })
      .addCase(addProducts.fulfilled, (state, action) => {
        localStorage.setItem("cart", JSON.stringify([]));
      })
      .addCase(addProducts.rejected, () => {})
      .addCase(isInCart.fulfilled, (state, action) => {
        state.inCart = true;
      })
      .addCase(isInCart.rejected, (state, action) => {
        state.inCart = false;
      })
      .addCase(getProdsFromCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartLength = action.payload
      })
      .addCase(deleteProd.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartLength = action.payload;

      });
  },
});

export default cartReducer.reducer;
