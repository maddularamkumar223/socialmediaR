import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUSers } from "./../apiCalls";

let loginValidation = createAsyncThunk("auth/login", async (data) => {
  let users = await fetchUSers();
  console.log(users.data);
  let singleUser = users.data.find(
    (value) => value.email === data.email && value.password === data.password
  );
  console.log(singleUser);

  if (singleUser) {
    return singleUser.id;
  }
});
export default loginValidation;
