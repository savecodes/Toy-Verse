import React from "react";
import Banner from "../components/Heading/Banner";
import PopularToys from "../components/Main/PopularToys";
import AboutPlayLocal from "../components/Main/AboutPlayLocal";
import ExploreByCategory from "../components/Main/ExploreByCategory";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularToys />
      <ExploreByCategory />
      <AboutPlayLocal />
    </div>
  );
};

export default HomePage;
