import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/thunk/registerThunk";

const Profile = () => {
  let userData = useSelector((state) => state.register.userData);
  console.log(userData);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  return (
    <div>
      {userData.map((value) => {
        return <img src={`${value.image}`} alt="" height="200px" />;
      })}
    </div>
  );
};

export default Profile;
