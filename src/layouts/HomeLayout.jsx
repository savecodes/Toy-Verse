import { Outlet } from "react-router";
import Navbar from "../components/Heading/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Heading/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Login from "../pages/Login";
import useToysData from "../hooks/useToysData";
import LoadingSpinner from "../components/LoadingSpinner";

const HomeLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { loading } = useToysData();
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col">
        <header className="sticky top-0 z-50">
          <Navbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
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
