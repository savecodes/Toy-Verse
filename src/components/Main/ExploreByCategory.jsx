import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSmartToy } from "react-icons/md";
import { useNavigate, useOutletContext } from "react-router";

const categories = [
  {
    icon: <FaRegBuilding className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Building Blocks",
    color: "color-primary",
  },
  {
    icon: <IoCarSportOutline className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Toy Cars",
    color: "color-primary",
  },
  {
    icon: <HiOutlinePaintBrush className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Arts & Crafts",
    color: "color-primary",
  },
  {
    icon: <MdOutlineSmartToy className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Dolls & Action Figures",
    color: "color-primary",
  },
];

const ExploreByCategory = () => {
  const { setSelectedCategory } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="bg-base-300">
      <section className="w-11/12 max-w-7xl mx-auto py-12 sm:py-16">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Find the perfect toy from our wide range of categories.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCategory(category.title);
                navigate("/toys-gallery");
              }}
              className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 p-6 bg-white rounded-2xl shadow-md
                       hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`flex items-center justify-center p-4 rounded-full ${category.color} text-white text-2xl
                         transform hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>
              <div className="text-left sm:text-left lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreByCategory;
