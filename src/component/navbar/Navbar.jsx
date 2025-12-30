import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../redux/slice/loginSlice";

const Navbar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleLogOut = () => {
    sessionStorage.removeItem("id");
    dispatch(logOut(false));
    navigate("/");
  };
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/addPost">Add Post</NavLink>
      <NavLink to="/home">Home</NavLink>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Navbar;
