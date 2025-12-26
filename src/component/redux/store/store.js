import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./../slice/registeSlice";
import loginSlice from "./../slice/loginSlice";

let store = configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
  },
});

export default store;
