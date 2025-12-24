import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";

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
    ],
  },
]);

export default route;
