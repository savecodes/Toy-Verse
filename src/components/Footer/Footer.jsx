import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ftImg from "../../assets/ft-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5 md:px-20 mt-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={ftImg} alt="ToyVerse" className="w-8 h-6" />
            <h2 className="text-white font-bold text-xl">
              Toy<span className="text-[#24a0f3]">V</span>erse
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            A vibrant and playful online marketplace for kids' toys, connecting
            families with local sellers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-[#24a0f3] transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/my-toys"
                className="hover:text-[#24a0f3] transition duration-200"
              >
                My Toys
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-[#24a0f3] transition duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-[#24a0f3] transition duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-1">Email: support@toyverse.com</p>
          <p className="text-sm mb-1">Phone: +880 0000 000 000</p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://facebook.com"
              className="hover:text-[#24a0f3] transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-[#24a0f3] transition duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-[#24a0f3] transition duration-200"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p className="text-gray-400">
          © 2025 <span className="text-[#24a0f3] font-semibold">Toy-Verse</span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
