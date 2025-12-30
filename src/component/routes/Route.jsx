import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Profile from "../profile/Profile";
import Post from "./../post/Post";
import Homepage from "./../home/Homepage";

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
    ],
  },
]);

export default route;
