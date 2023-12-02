import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchItemsSlice from "./FetchStatusSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchstatus: fetchItemsSlice.reducer,
  },
});

export default store;
