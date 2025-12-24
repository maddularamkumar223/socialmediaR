import React, { useState } from "react";
import Form from "../../form/Form";
import { useDispatch } from "react-redux";
import { addUserData } from "../../redux/thunk/registerThunk";

const Register = () => {
  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    contact: "",
    gender: "",
  });

  let { name, email, password, confirmPassword, dob, contact, gender } =
    userDetails;
  let registerData = [
    {
      name: "name",
      type: "text",
      value: name,
    },
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
    {
      name: "confirmPassword",
      type: "password",
      value: confirmPassword,
    },
    {
      name: "dob",
      type: "date",
      value: dob,
    },
    {
      name: "contact",
      type: "tel",
      value: contact,
    },
  ];

  let dispatch = useDispatch();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    if (password === confirmPassword) {
      setUserDetails({ ...userDetails, password: password });
      // console.log(userDetails);
      dispatch(addUserData(userDetails));
    } else {
      alert("Password Mismatch");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Form
        data={registerData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <article name="gender" value={gender} onChange={handleChange}>
        <label htmlFor="">Gender</label>
        <input type="radio" value="male" name="gender" />
        Male
        <input type="radio" value="female" name="gender" />
        Female
        <input type="radio" value="others" name="gender" />
        Others
      </article>
      <button>Submit</button>
    </form>
  );
};

export default Register;
