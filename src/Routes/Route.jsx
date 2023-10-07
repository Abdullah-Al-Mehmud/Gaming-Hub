import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import ServiceReadMore from "../Pages/Home/Service/ServiceReadMore";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/news",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceReadMore></ServiceReadMore>
          </PrivateRoutes>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
