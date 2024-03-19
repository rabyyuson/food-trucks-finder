import Home from "./components/home/Home";
import { FoodTrucks } from "./lib/contexts/FoodTrucks";
import { Geolocation } from "./lib/contexts/Geolocation";
import useFoodTrucks from "./lib/hooks/useFoodTrucks";
import useGeolocation from "./lib/hooks/useGeolocation";

function App() {
  const foodTrucks = useFoodTrucks();
  const location = useGeolocation();

  return (
    <div>
      <Geolocation.Provider value={location}>
        <FoodTrucks.Provider value={foodTrucks}>
          <Home />
        </FoodTrucks.Provider>
      </Geolocation.Provider>
    </div>
  );
}

export default App;
