import axios from "axios";
import { useEffect, useState } from "react";

const useToysData = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("/toysData.json")
      .then((data) => setToys(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { toys, loading, error };
};

export default useToysData;
