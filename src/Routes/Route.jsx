import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import ServiceReadMore from "../Pages/Home/Service/ServiceReadMore";

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
        element: <News></News>,
      },
      {
        path: "/service/:id",
        element: <ServiceReadMore></ServiceReadMore>,
        loader: () => fetch("/events.json"),
      },
    ],
  },
]);
export default router;
