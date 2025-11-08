import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ToysGallery from "../pages/ToysGallery";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile";

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
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
          {
            path: "/auth/forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
