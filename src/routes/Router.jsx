import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ToysGallery from "../pages/ToysGallery";
import ToyDetails from "../pages/ToyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/toys-gallery",
        element: <ToysGallery />,
      },
      {
        path: "/toy-details/:id",
        element: <ToyDetails />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
