import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit/";

const initialState = {
  loading: false,
  error: null,
  reviews: [],
};

export const modalWindow = createAction("modal");
export const exitModalWindow = createAction("exitmodal");

export const addReview = createAsyncThunk(
  "reviews/addreviews",
  async ({ input, id }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const res = await fetch("http://localhost:4040/reviews/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.authReducer.token}`,
        },
        body: JSON.stringify({ textReview: input, productId: id }),
      });
      const review = await res.json();
      if (review.error) {
        return thunkAPI.rejectWithValue(review.error);
      } else {
        return review;
      }
    } catch (error) {}
  }
);

// export const removeReview = createAsyncThunk(
//   "reviews/removereview",
//   async (id, thunkAPI) => {
//     const state = thunkAPI.getState();
//     try {
//       const res = await fetch(`http://localhost:4040/comments/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${state.authSlice.token}`,
//         },
//       });
//       const comment = await res.json();
//       if (comment.error) {
//         return thunkAPI.rejectWithValue(comment.error);
//       } else {
//         return comment;
//       }
//     } catch (error) {
//       thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const getReview = createAsyncThunk(
  "reviews/getreviews",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/reviews/${id}`);

      const reviews = await res.json();
      if (reviews.error) {
        return thunkAPI.rejectWithValue(reviews.error);
      } else {
        return reviews;
      }
    } catch (error) {}
  }
);

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   .addCase(exitModalWindow, (state, action) => {
      //     state.modal = false;
      //   })
      //   .addCase(modalWindow, (state, action) => {
      //     state.modal = action.payload;
      //   })
      .addCase(addReview.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.reverse();
      })
      .addCase(addReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getReview.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.reverse();
      })
      .addCase(getReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    //   .addCase(removeComment.pending, (state, action) => {
    //     state.loading = true;
    //   })
    //   .addCase(removeComment.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.comments = state.comments.filter((item) => {
    //       return item._id !== action.payload;
    //     });
    //   })
    //   .addCase(removeComment.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export default reviewsSlice.reducer;
