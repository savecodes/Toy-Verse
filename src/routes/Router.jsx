import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
        {
            path: "/home",
            element: <h2>Hello from home</h2>
        }
    ]
  },
]);
