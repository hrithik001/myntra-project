import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchItemsSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchstatus: fetchItemsSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default store;
