import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./../slice/registeSlice";

let store = configureStore({
  reducer: {
    register: registerSlice,
  },
});

export default store;
