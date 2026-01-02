import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/thunk/registerThunk";
import Style from "./Messages.module.css";
import { NavLink} from "react-router-dom";

const Messages = () => {
  let users = useSelector((state) => state.login.userId.following);
  let userData = useSelector((state) => state.register.userData);
  let dispatch = useDispatch();
  let filteredData = userData.filter((value) => users?.includes(value.id));
  useEffect(() => {
    dispatch(fetchUserData());
  }, [filteredData.length]);
  return (
    <section id={Style.message}>
      {filteredData.map((value) => {
        return (
          <NavLink to="/displayMessages" state={value}>
            <article>
              <figure>
                <img src={value.image} alt="" />
              </figure>
              <p>{value.name}</p>
            </article>
          </NavLink>
        );
      })}
    </section>
  );
};

export default Messages;
