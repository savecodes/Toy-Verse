import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center bg-linear-to-b from-blue-50 to-white">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
