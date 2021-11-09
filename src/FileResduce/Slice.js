import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "email",
  initialState: {
    email: "null",
  },
  reducers: {
    login: (state, action) => {
      state.email = action;
    },
    // change: (state, action) => {
    //   state.email = action;
    // },
  },
});

export const { login } = Slice.actions;
export default Slice.reducer;
