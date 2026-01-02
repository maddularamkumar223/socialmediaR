import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Profile from "../profile/Profile";
import Post from "./../post/Post";
import Homepage from "./../home/Homepage";
import Messages from "../messages/Messages";
import DisplayMessages from "../messages/DisplayMessages";
import Notification from "../notification/Notification";

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/addPost",
        element: <Post />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/displayMessages",
        element: <DisplayMessages />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
]);

export default route;
