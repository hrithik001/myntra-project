import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter((ele) => ele !== action.payload);
    },
  },
});

export const wishListActions = wishlistSlice.actions;
export default wishlistSlice;
