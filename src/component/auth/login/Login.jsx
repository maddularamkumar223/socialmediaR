import React, { useState } from "react";
import Form from "./../../form/Form";
import { useDispatch, useSelector } from "react-redux";
import loginValidation from "../../redux/thunk/loginThunc";

const Login = () => {
  let [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  let { userId, isLogin } = useSelector((state) => state.login);
  console.log(userId);
  console.log(isLogin);

  let dispatch = useDispatch();

  let { email, password } = userDetails;
  let loginData = [
    {
      name: "email",
      type: "email",
      value: email,
    },
    {
      name: "password",
      type: "password",
      value: password,
    },
  ];

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginValidation(userDetails));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Form data={loginData} handleChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
