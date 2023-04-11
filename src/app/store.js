import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../features/jobSlice/jobSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    filters: filterReducer,
  },
});
