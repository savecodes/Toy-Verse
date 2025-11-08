import React from "react";
import { FaTag, FaStar, FaBoxOpen } from "react-icons/fa";
import { useNavigate } from "react-router";
import useToysData from "../../hooks/useToysData";
import LoadingSpinner from "../LoadingSpinner";

const PopularToyCard = ({ toy }) => {
  const { pictureURL, subCategory, toyName, price, rating, availableQuantity } =
    toy;

  const navigate = useNavigate();
  const { loading } = useToysData();
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Category */}
        <p className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
          {subCategory}
        </p>

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2 h-12 overflow-hidden">
          {toyName}
        </h2>

        {/* Price, Rating, Quantity */}
        <div className="space-y-2 text-gray-600 text-sm">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <FaTag /> ${price}
          </div>

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" /> {rating.toFixed(1)} / 5.0
          </div>

          <div className="flex items-center gap-2">
            <FaBoxOpen className="text-indigo-500" /> {availableQuantity} in
            stock
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate(`/toy-details/${toy.toyId}`)}
          className="w-full mt-5 bg-[#24a0f3] hover:bg-[#1788d1] text-white font-medium py-2 rounded-lg transition-all duration-300 cursor-pointer"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default PopularToyCard;
