import { DEFAULT_ITEMS } from "../data/items";
import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    initialData: (store, action) => {
      return store;
    },
  },
});

export const sliceActions = itemSlice.actions;
export default itemSlice;
