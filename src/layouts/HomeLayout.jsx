import { Outlet } from "react-router";
import Navbar from "../components/Heading/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Heading/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const HomeLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {/* <Banner/> */}
        </header>
        <main className="flex-1">
          <Outlet context={{ selectedCategory, setSelectedCategory }} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default HomeLayout;
