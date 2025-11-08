import React, { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { CiLogin, CiLogout } from "react-icons/ci";
import Swal from "sweetalert2";

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, lotOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // console.log("User trying to logout");

    lotOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful!",
          text: "See you again soon",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Logout Failed!",
          text:
            error.message ||
            "Something went wrong while logging out. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const categories = [
    "All",
    "Building Blocks",
    "Toy Cars",
    "Arts & Crafts",
    "Dolls & Action Figures",
  ];

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
      isActive
        ? "text-[#24a0f3] underline underline-offset-4"
        : "text-gray-700 hover:text-[#24a0f3]"
    }`;

  return (
    <nav className="bg-linear-to-r from-blue-50 via-white to-blue-100 backdrop-blur-md shadow-sm border-b border-blue-100 p-4">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="font-bold text-2xl text-gray-800">
          Toy<span className="text-[#24a0f3]">V</span>erse
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {/* Category Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                dropdownOpen
                  ? "text-[#24a0f3]"
                  : "text-gray-700 hover:text-[#24a0f3]"
              }`}
            >
              Category
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-md rounded-md z-50 w-52">
                <ul className="flex flex-col text-gray-700">
                  {categories.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        setSelectedCategory(item);
                        navigate("/toys-gallery");
                        setDropdownOpen(false);
                      }}
                      className={`px-4 py-2 cursor-pointer transition-all ${
                        selectedCategory === item
                          ? "bg-[#24a0f3] text-white"
                          : "hover:bg-[#24a0f3] hover:text-white"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex gap-3">
          {user && (
            <Link
              to="/profile"
              className="px-4 py-2 rounded-md bg-[#24a0f3] text-white hover:bg-[#1b86d1]"
            >
              Profile
            </Link>
          )}

          {user ? (
            <Link
              onClick={handleLogOut}
              className="btn bg-[#24a0f3] text-white rounded-md px-6 hover:bg-[#1b86d1]"
            >
              <CiLogout className="text-white/80" />
              Logout
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-[#24a0f3] text-white rounded-md px-6 hover:bg-[#1b86d1]"
            >
              <CiLogin className="text-white/80" />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#24a0f3]"
        >
          <BiMenuAltRight />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-md p-4 space-y-3">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left px-3 py-2 rounded-md font-medium text-gray-700 hover:text-[#24a0f3]"
            >
              Category
            </button>
            {dropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                {categories.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelectedCategory(item);
                      navigate("/toys-gallery");
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className={`px-3 py-1 cursor-pointer transition-all ${
                      selectedCategory === item
                        ? "text-[#24a0f3] font-semibold"
                        : "text-gray-600 hover:text-[#24a0f3]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <div className="flex flex-col gap-2 mt-3">
            {user && (
              <Link
                to="/profile"
                className="px-4 py-2 rounded-md bg-[#24a0f3] text-white hover:bg-[#1b86d1]"
              >
                Profile
              </Link>
            )}
            {user ? (
              <Link
                onClick={handleLogOut}
                className="btn bg-[#24a0f3] text-white rounded-md px-6 hover:bg-[#1b86d1]"
              >
                <CiLogout className="text-white/80" />
                Logout
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className="btn bg-[#24a0f3] text-white rounded-md px-6 hover:bg-[#1b86d1]"
              >
                <CiLogin className="text-white/80" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
