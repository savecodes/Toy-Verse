import { Mail } from "lucide-react";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router";
import useToysData from "../hooks/useToysData";
import LoadingSpinner from "../components/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const { loading } = useToysData();
  const { resetPassword } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Email Sent!",
          text: "Check your inbox for password reset instructions.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center bg-linear-to-b from-blue-50 to-white py-10 px-6">
      <div className="w-full max-w-3xl">
        <div className="w-full bg-white shadow-2xl rounded-3xl p-10 border border-blue-100 transition-all">
          {/* Top Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-6 rounded-full shadow-md">
                <FiUsers className="w-12 h-12 text-blue-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Forgot Password?
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Enter your email address and we’ll send you a reset link.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleForgotPassword} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-full px-5 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                <Mail className="text-gray-400 mr-3" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Login */}
          <p className="text-center text-gray-600 text-sm mt-8">
            Remember your password?{" "}
            <Link
              to="/auth/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
