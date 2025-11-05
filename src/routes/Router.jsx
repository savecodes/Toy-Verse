import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "home",
        element: <h2>Hello from home</h2>,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
