import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUSers } from "../apicalls";

let loginValidation = createAsyncThunk("auth/login", async (data) => {
  let users = await fetchUSers();
  console.log(users.data);
  let singleUser = users.data.find(
    (value) => value.email === data.email && value.password === data.password
  );
  console.log(singleUser);

  if (singleUser) {
    sessionStorage.setItem("id", singleUser.id);
    return singleUser;
  }
});
export default loginValidation;
