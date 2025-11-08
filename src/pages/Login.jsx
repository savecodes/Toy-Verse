import { Mail, Lock, User } from "lucide-react";
import { FiUsers } from "react-icons/fi";
import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);
  const { setUser, logIn, googleRegister, githubRegister } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(`${location.state ? location.state : "/"}`);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleRegister()
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back ",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text:
            error.message ||
            "Something went wrong with Google login. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGithubLogin = () => {
    githubRegister()
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);

        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text:
            error.message ||
            "Something went wrong with Google login. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="flex items-center justify-center py-10 px-6">
      <div className="w-full max-w-3xl">
        <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">
              Login to access your account
            </p>
          </div>

          {/* Social Buttons */}
          <div onClick={handleGoogleLogin} className="space-y-3 mb-6">
            <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg text-base text-gray-700 hover:bg-gray-50 transition">
              <FaGoogle className="text-red-500 text-lg" />
              Login with Google
            </button>

            <button
              onClick={handleGithubLogin}
              className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg text-base text-gray-700 hover:bg-gray-50 transition"
            >
              <FaGithub className="text-gray-800 text-lg" />
              Login with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Email Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent">
                <Mail className="text-gray-400 mr-2" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent">
                <Lock className="text-gray-400 mr-2" size={18} />
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-10 cursor-pointer z-50"
                >
                  {show ? (
                    <FaEye className="w-5 h-5" />
                  ) : (
                    <IoEyeOff className="w-5 h-5" />
                  )}
                </span>
              </div>
            </div>
            {/* Forgot Password */}
            <div className="flex justify-start text-sm">
              <Link
                to="/auth/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="md:col-span-2 space-y-4 mt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md text-sm"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
