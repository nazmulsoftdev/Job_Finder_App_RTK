import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJobs, getJobs, postJobs, updateJobs } from "./jobAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: "",
  editing: {},
};

// create thunk fetch Jobs
export const fetchJobs = createAsyncThunk(
  "jobs/fetchjobs",
  async (sortFilter) => {
    const response = await getJobs(sortFilter);
    return response;
  }
);

// create thunk post Jobs

export const createJobs = createAsyncThunk("jobs/createjobs", async (data) => {
  const response = await postJobs(data);
  return response;
});

// create thunk update jobs

export const changeJobs = createAsyncThunk(
  "jobs/changejobs",
  async ({ id, data }) => {
    const response = await updateJobs({ id, data });
    return response;
  }
);

//  create thunk delete jobs

export const removeJobs = createAsyncThunk("jobs/removejobs", async (id) => {
  const response = await deleteJobs(id);

  return response;
});

// create reducer

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.jobs = [];
        state.error = action.error?.message;
      })
      .addCase(createJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(changeJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(changeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.jobs.findIndex(
          (i) => i.id === action.payload
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(changeJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })

      .addCase(removeJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs.filter((item) => item.id !== action.payload);
      })
      .addCase(removeJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;

export const { editActive, editInActive } = jobSlice.actions;
