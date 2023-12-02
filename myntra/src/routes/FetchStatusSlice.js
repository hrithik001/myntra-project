import { createSlice } from "@reduxjs/toolkit";

const fetchItemsSlice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchedDone: false,
    fetchingStart: false,
  },
  reducers: {
    setFetchDone: (state) => {
      state.fetchedDone = true;
    },
    setFetchStart: (state) => {
      state.fetchingStart = true;
    },
    setFetchEnd: (state) => {
      state.fetchingStart = false;
    },
  },
});
export const fetchActions = fetchItemsSlice.actions;
export default fetchItemsSlice;
