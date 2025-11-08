import { Lock, Mail, User } from "lucide-react";
import { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    createUser,
    setUser,
    updateUserProfile,
    sendEmailVerify,
    googleRegister,
    githubRegister,
  } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("registered", { name, image, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(name, image).then(() => {
          console.log(user);
          sendEmailVerify().then((res) => {
            console.log(res);
            setUser(user);
            navigate(`${location.state ? location.state : "/"}`);
            console.log(user);
            Swal.fire({
              title: "Register Successful!",
              text: "Welcome",
              icon: "success",
              confirmButtonText: "Okay",
            });
          });
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        Swal.fire({
          title: "Login Failed!",
          text:
            errorMessage ||
            "Something went wrong with Google login. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGoogleRegister = () => {
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

  const handleGithubRegister = () => {
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
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 text-sm mt-1">
              Register to get started
            </p>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogleRegister}
              className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg text-base text-gray-700 hover:bg-gray-50 transition"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Continue with Google
            </button>

            <button
              onClick={handleGithubRegister}
              className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg text-base text-gray-700 hover:bg-gray-50 transition"
            >
              <FaGithub className="text-gray-800 text-lg" />
              Continue with GitHub
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
            onSubmit={handleRegister}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Name Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter your photo URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
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
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent">
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
                  className="absolute right-4 top-3 cursor-pointer z-50"
                >
                  {show ? (
                    <FaEye className="w-5 h-5" />
                  ) : (
                    <IoEyeOff className="w-5 h-5" />
                  )}
                </span>
              </div>
            </div>

            {/* Terms & Register Button */}
            <div className="md:col-span-2 space-y-4 mt-2">
              <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Terms & Conditions
                    </a>
                  </label>
              </div>

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
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
