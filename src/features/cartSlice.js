import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  cart: [],
  error: false,
  loading: false,
  removeLoader: false,
  inCart: false
};

export const productAdd = createAsyncThunk("post/addProduct", async(act, thunkAPI) => {
  try {
    console.log(act.id)
    const res = await fetch("http://localhost:4040/cart/add", {
      method: "POST",
      body: JSON.stringify({
        count: act.count,
        prodId: act.id,
        checked: act.checked
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return res.json()
  } catch (error) {
    return thunkAPI.rejectWithValue(Error)
  }
})

export const addProducts = createAsyncThunk("post/addProducts", async(act, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4040/cart/addProds", {
      method: "POST",
      body: JSON.stringify({
        act
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return res.json()
  } catch (error) {
    return thunkAPI.rejectWithValue(Error)
  }
})

export const isInCart = createAsyncThunk("post/isInCart", async(act, thunkAPI) => {
  try {
    console.log("ISINCART")
    const res = await fetch("http://localhost:4040/cart/isInCart", {
      method: "POST",
      body: JSON.stringify({
        prodId: act.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return res.json()
  } catch (error) {
    return thunkAPI.rejectWithValue(Error)
  }
})

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productAdd.fulfilled, (state, action) => {

      state.inCart = true
      console.log("Mans")
    }).addCase(addProducts.fulfilled, (state,action) => {
      state.cart = action.payload
      localStorage.setItem("cart", JSON.stringify([]))
    }).addCase(addProducts.rejected, () => {
      console.log("add products error")
    }).addCase(isInCart.fulfilled, (state, action) => {
      state.inCart = true
    }).addCase(isInCart.rejected, (state, action) => {
      state.inCart = false
    })
  },
});

export default cartReducer.reducer;
