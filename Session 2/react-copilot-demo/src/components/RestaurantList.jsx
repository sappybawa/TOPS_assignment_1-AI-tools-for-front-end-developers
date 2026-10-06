// import useRestaurants from "./useRestaurants";
import useRestaurants from "../hooks/useRestaurants";

function RestaurantList() {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Restaurants</h2>
      {restaurants.map((restaurant) => (
        <article key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.cuisine}</p>
        </article>
      ))}
    </div>
  );
}

export default RestaurantList;

/*
Info: The code snippet provided is a React component that fetches and displays a list of restaurants. It uses a custom hook `useRestaurants` to manage the fetching logic. The component handles loading and error states, displaying appropriate messages when necessary. When the data is successfully fetched, it maps over the list of restaurants and renders their names and cuisines in an article format.

Error: The AI made a mistake in the import statement for `useRestaurants`. The correct path should be `../hooks/useRestaurants` instead of `./useRestaurants`. This correction ensures that the component can properly import and use the custom hook to fetch restaurant data.

*/