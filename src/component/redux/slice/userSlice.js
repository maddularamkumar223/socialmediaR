import { createSlice } from "@reduxjs/toolkit";
import { follow_followers } from "../thunk/userThunk";

let userSlice = createSlice({
  name: "userSlice",
  initialState: { userFollowingList: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(follow_followers.fulfilled, (state, action) => {
      state.userFollowingList = action.payload;
    });
  },
});

export default userSlice.reducer;
