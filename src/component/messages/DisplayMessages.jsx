import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Style from "./Messages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMessageData, fetchMessagesData } from "./../redux/messageTnunk";
import { addNotification } from "../redux/apiCalls";

const DisplayMessages = () => {
  let { state } = useLocation();
  let userId = sessionStorage.getItem("id");
  let [message, setMessages] = useState({
    senderId: userId,
    receiverId: state.id,
    messageData: "",
  });
  let dispatch = useDispatch();
  let displayMessagesData = useSelector((state) => state.message.messages);

  let filterMessages = displayMessagesData.filter(
    (value) =>
      (value.senderId === userId && value.receiverId === state.id) ||
      (value.senderId === state.id && value.receiverId === userId)
  );

  useEffect(() => {
    dispatch(fetchMessagesData());
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setMessages({ ...message, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessageData(message));
    dispatch(
      addNotification({
        senderId: userId,
        receiverId: state.id,
        message: `${state.name} messaged you`,
        isNotification: false,
      })
    );
    setMessages({
      senderId: sessionStorage.getItem("id"),
      receiverId: state.id,
      messageData: "",
    });
  };
  return (
    <section className={Style.displayMessages}>
      <article>
        <img src={state.image} alt="" />
        <span>{state.name}</span>
      </article>
      <article>
        {filterMessages.map((value) => {
          return (
            <p
              className={value.senderId === userId && Style.right}
              id={Style.messageValue}
            >
              {value.messageData}
            </p>
          );
        })}
      </article>
      <article>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter The message"
            name="messageData"
            value={message.messageData}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </article>
    </section>
  );
};

export default DisplayMessages;
