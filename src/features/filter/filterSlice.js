import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFilter: "",
  sortFilter: "",
};

// create reducer

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchAc: (state, action) => {
      state.searchFilter = action.payload;
    },
    sortFilterAc: (state, action) => {
      state.sortFilter = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { searchAc, sortFilterAc } = filterSlice.actions;
