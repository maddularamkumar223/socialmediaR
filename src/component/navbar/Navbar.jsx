import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../redux/slice/loginSlice";
import {
  fetchNotificationData,
  patchNotificationData,
} from "../redux/thunk/notificationThunk";
const Navbar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let notificationData = useSelector(
    (state) => state.notification.notification
  );

  let [notificationLength, setNotificationLength] = useState(0);

  let filterNotification = notificationData.filter(
    (value) =>
      value.receiverId === sessionStorage.getItem("id") &&
      value.isNotification === false
  );
  console.log(filterNotification);
  useEffect(() => {
    dispatch(fetchNotificationData());
    if (filterNotification.length > 0) {
      setNotificationLength(filterNotification.length);
    }
  }, []);
  let handleLogOut = () => {
    sessionStorage.removeItem("id");
    dispatch(logOut(false));
    navigate("/");
  };

  let handleNotification = () => {
    navigate("/notification");
    filterNotification.map((value) => {
      dispatch(
        patchNotificationData({ id: value.id, value: { isNotification: true } })
      );
    });
  };
  console.log(notificationLength);
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/addPost">Add Post</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <button onClick={handleNotification}>
        Notification <sup>{notificationLength}</sup>
      </button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Navbar;
