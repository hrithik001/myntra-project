import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    initialData: (state, action) => {
      return action.payload;
    },
  },
});

export const sliceActions = itemSlice.actions;
export default itemSlice;
