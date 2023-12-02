import { createSlice } from "@reduxjs/toolkit";

const fetchItemsSlice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchedDone: false,
    fetchingStart: false,
    // fetchingEnd: true,
  },
  reducers: {
    setFetchDone: (state) => {
      return (state.fetchedDone = true);
    },
    setFetchStart: (state) => {
      return (state.fetchingStart = true);
    },
    setFetchend: (state) => {
      return (state.fetchingStart = false);
    },
  },
});
export const fetchActions = fetchItemsSlice.actions;
export default fetchItemsSlice;
