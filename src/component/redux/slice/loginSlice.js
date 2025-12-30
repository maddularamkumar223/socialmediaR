import { createSlice } from "@reduxjs/toolkit";
import loginValidation from "../thunk/loginThunc";

let loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    userId: "",
    isLogin: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginValidation.fulfilled, (state, action) => {
      state.userId = action.payload;
      if (action.payload) {
        state.isLogin = true;
      }
    });
  },
});
export let { logOut } = loginSlice.actions;
export default loginSlice.reducer;
