import useFoodTrucks from "../../lib/hooks/useFoodTrucks";
import useGeolocation from "../../lib/hooks/useGeolocation";
import haversine from "haversine";
import { Coordinate } from "../../lib/types/types";
import Card from "../card/Card";

function calculateDistance(start: Coordinate, end: Coordinate) {
    return haversine(start, end, { threshold: 5, unit: "mile" });
}

export default function Cards() {
    const foodTrucks = useFoodTrucks();
    const location = useGeolocation();

    if (!location) {
        return (
            <div>Loading location... Please wait...</div>
        );
    }

    const nearbyFoodTrucks = foodTrucks
        .filter(foodTruck => calculateDistance(
            {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            },
            {
                latitude: Number(foodTruck.latitude),
                longitude: Number(foodTruck.longitude),
            }
        ));

    return (
        <div>
            {nearbyFoodTrucks.length 
                ? (
                    <ul className="grid grid-cols-4 gap-5">
                        {nearbyFoodTrucks.map((foodTruck, key) => <Card key={key} foodTruck={foodTruck} />)}
                    </ul>
                )
                : <p>Sorry, there are no food trucks nearby within a 5 mile radius.</p>
            }
        </div>
    );
}
