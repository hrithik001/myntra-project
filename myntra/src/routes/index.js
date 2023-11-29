import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

export default store;
