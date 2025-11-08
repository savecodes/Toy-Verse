import { useOutletContext } from "react-router";
import useToysData from "../hooks/useToysData";
import LoadingSpinner from "../components/LoadingSpinner";
import AllToysCard from "../components/Main/AllToysCard";

const ToysGallery = () => {
  const { selectedCategory } = useOutletContext();
  const { toys, loading } = useToysData();

  if (loading) return <LoadingSpinner />;

  const filteredToys =
    selectedCategory === "All"
      ? toys
      : toys.filter((toy) => toy.subCategory === selectedCategory);
  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-6">
        Showing: {selectedCategory}
      </h2>

      {filteredToys.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredToys.map((toy) => (
            <AllToysCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No toys found in this category.
        </p>
      )}
    </div>
  );
};

export default ToysGallery;
