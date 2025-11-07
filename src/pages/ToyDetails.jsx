import React, { useState } from "react";
import { useParams } from "react-router";
import toyData from "../../public/toysData.json";
import {
  FaBoxOpen,
  FaUserCircle,
  FaStar,
  FaUser,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const ToyDetails = () => {
  const { id } = useParams();
  const toy = toyData.find((t) => t.toyId === parseInt(id));

  const [formData, setFormData] = useState({ name: "", email: "" });

  if (!toy) {
    return (
      <div className="text-center py-10 text-red-500 text-lg font-semibold">
        Toy not found!
      </div>
    );
  }

  const {
    toyName,
    pictureURL,
    sellerName,
    price,
    rating,
    availableQuantity,
    description,
    subCategory,
  } = toy;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! We'll contact you soon about trying the ${toyName}.`
    );
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-10 flex flex-col gap-12">
      {/* --- Toy Info Section --- */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={pictureURL}
            alt={toyName}
            className="rounded-2xl shadow-lg border border-gray-200 w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            {subCategory}
          </p>
          <h2 className="text-3xl font-bold text-gray-900">{toyName}</h2>
          <p className="text-2xl font-semibold text-blue-600">
            ${price.toFixed(2)}
          </p>

          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="text-gray-700">{rating} out of 5 stars</span>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mt-6 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <FaBoxOpen className="text-blue-500" />
              <span>
                <strong>Available Quantity:</strong> {availableQuantity}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaUserCircle className="text-blue-500" />
              <span>
                <strong>Seller:</strong> {sellerName}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Try Now Form --- */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 w-full mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Try Now!
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Interested in this toy? Fill out the form to request a trial.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus-within:border-blue-500">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus-within:border-blue-500">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 color-primary hover:bg-blue-400 text-white font-semibold py-2 rounded-md transition-colors cursor-pointer"
          >
            <FaPaperPlane />
            Submit Try Now Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToyDetails;
