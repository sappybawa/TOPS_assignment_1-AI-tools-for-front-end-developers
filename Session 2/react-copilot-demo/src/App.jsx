import PlaylistCard from "./components/PlaylistCard";
import ProductCard from "./components/ProductCard";
import RestaurantList from "./components/RestaurantList";
import VideoList from "./components/VideoList";

function App() {
  return (
    <div>
      <h1>Session 2 - AI Coding Tools</h1>

      <PlaylistCard
        name="Chill Vibes"
        creator="Sappy"
        songCount={25}
      />

      <ProductCard
        image="https://example.com/product.jpg"
        title="iPhone 15"
        price="69,999"
      />

      <RestaurantList />

      <VideoList />
    </div>
  );
}

export default App;