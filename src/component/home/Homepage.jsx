import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/thunk/registerThunk";
import { fetchPostData } from "../redux/thunk/postThunk";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Styles from "./home.module.css";
import { FaHeart } from "react-icons/fa";
import { follow_followers } from "../redux/thunk/userThunk";

const Homepage = () => {
  let users = useSelector((state) => state.register.userData);
  let post = useSelector((state) => state.post.posts);
  let dispatch = useDispatch();
  let userId = sessionStorage.getItem("id");
  let user = useSelector((state) => state.login.userId.following);
  let [like, setLike] = useState(false);

  let handleLike = () => {
    setLike(true);
  };

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchPostData());
  }, []);
  return (
    <section id={Styles.home}>
      <section>
        {users
          .filter((value) => value.id !== userId)
          .map((value) => {
            return (
              <article>
                <figure>
                  <img src={value.image} alt="" />
                </figure>
                <p>{value.name}</p>
                <button
                  onClick={() =>
                    dispatch(
                      follow_followers({
                        senderId: userId,
                        receiverId: value.id,
                      })
                    )
                  }
                >
                  {user?.includes(value.id) ? "Following" : "Follow"}
                </button>
              </article>
            );
          })}
      </section>
      <section>
        {post.map((value) => {
          return (
            <article>
              <figure>
                <img src={value.image} alt="" />
                <figcaption>
                  <FaHeart
                    className={like && Styles.like}
                    onDoubleClick={handleLike}
                  />
                  <FaComment />
                  <FaShare />
                </figcaption>
              </figure>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Homepage;
