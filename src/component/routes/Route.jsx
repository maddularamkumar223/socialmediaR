import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Profile from "../profile/Profile";

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
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
    ],
  },
]);

export default route;
