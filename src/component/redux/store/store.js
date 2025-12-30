import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./../slice/registeSlice";
import loginSlice from "./../slice/loginSlice";
import postSlice from "./../slice/postSlice";
import userSlice from "./../slice/userSlice";

let store = configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
    post: postSlice,
    user: userSlice,
  },
});

export default store;
