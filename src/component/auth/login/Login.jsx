import React, { useEffect, useState } from "react";
import Form from "./../../form/Form";
import { useDispatch, useSelector } from "react-redux";
import loginValidation from "../../redux/thunk/loginThunc";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  let { isLogin } = useSelector((state) => state.login);
  let navigate = useNavigate();
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
  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin]);
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
