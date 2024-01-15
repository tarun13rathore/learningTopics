import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createTask = createAsyncThunk(
  "createTask",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://657fc2666ae0629a3f53998c.mockapi.io/api/curd",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    try {
      const res = await response.json();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default taskSlice.reducer;
