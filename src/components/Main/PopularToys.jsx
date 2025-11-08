import React from "react";
import useToysData from "../../hooks/useToysData";
import LoadingSpinner from "../LoadingSpinner";
import PopularToyCard from "./PopularToyCard";

const PopularToys = () => {
  const { toys, loading } = useToysData();
  //   console.log(toys, loading);

  const sortedToys = [...toys].sort((a, b) => b.rating - a.rating);
  const topToys = sortedToys.slice(0, 6);
    // console.log(topToys);
  return (
    <div className="w-11/12 mx-auto py-16">
      {/* Text Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Popular Toys</h1>
        <p className="text-gray-600 max-w-xl mx-auto">Discover the toys that kids are loving right now!</p>
      </div>
      {loading ? (
        <LoadingSpinner fullScreen={true} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topToys.map((toy) => {
            return <PopularToyCard key={toy.toyId} toy={toy} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PopularToys;
