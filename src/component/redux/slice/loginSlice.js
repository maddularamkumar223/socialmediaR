import { createSlice } from "@reduxjs/toolkit";
import loginValidation from "../thunk/loginThunc";

let loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    userId: "",
    isLogin: false,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(loginValidation.fulfilled, (state, action) => {
      state.userId = action.payload;
      if (action.payload) {
        state.isLogin = true;
      }
    });
  },
});

export default loginSlice.reducer;
