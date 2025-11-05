import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
      isActive
        ? "text-[#24a0f3] underline underline-offset-4"
        : "text-gray-700 hover:text-[#24a0f3]"
    }`;

  return (
    <nav className="bg-base-200 p-4 shadow-sm">
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
                dropdownOpen ? "text-[#24a0f3]" : "text-gray-700 hover:text-[#24a0f3]"
              }`}
            >
              Category
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-md rounded-md z-50 w-48">
                <ul className="flex flex-col text-gray-700">
                  {[
                    "Building Blocks",
                    "Toy Cars",
                    "Arts & Crafts",
                    "Dolls & Action Figures",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-[#24a0f3] hover:text-white cursor-pointer"
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

        {/* Right Side Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="btn bg-[#24a0f3] text-white rounded-md px-6 hover:bg-[#1b86d1] flex items-center gap-2">
            <FaRegUserCircle /> Profile
          </button>
          <button className="btn bg-[#24a0f3] text-white rounded-md px-6 hover:bg-[#1b86d1]">
            Login
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#24a0f3]"
        >
          <BiMenuAltRight />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
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
                {[
                  "Building Blocks",
                  "Toy Cars",
                  "Arts & Crafts",
                  "Dolls & Action Figures",
                ].map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 text-gray-600 hover:text-[#24a0f3]"
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
            <button className="btn bg-[#24a0f3] text-white rounded-md w-full flex items-center justify-center gap-2">
              <FaRegUserCircle /> Profile
            </button>
            <button className="btn bg-[#24a0f3] text-white rounded-md w-full">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;