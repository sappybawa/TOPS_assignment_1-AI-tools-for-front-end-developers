import { useEffect, useState } from "react";

function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch restaurant data");
        }

        const data = await response.json();

        const restaurantData = data.map((restaurant) => ({
          id: restaurant.id,
          name: restaurant.name,
          location: restaurant.address.city,
        }));

        setRestaurants(restaurantData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  return {
    restaurants,
    loading,
    error,
  };
}

export default useRestaurants;