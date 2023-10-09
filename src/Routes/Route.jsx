import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ServiceReadMore from "../Pages/Home/Service/ServiceReadMore";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Pages/Blog/Blog";
import Hardware from "../Pages/Hardware/Hardware";

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
        path: "/hardware",
        element: (
          <PrivateRoutes>
            <Hardware></Hardware>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blog></Blog>
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
