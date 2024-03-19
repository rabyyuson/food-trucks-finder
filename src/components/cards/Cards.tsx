import useFoodTrucks from "../../lib/hooks/useFoodTrucks";
import useGeolocation from "../../lib/hooks/useGeolocation";
import haversine from "haversine";
import { Coordinate, FoodTruck, Location } from "../../lib/types/types";
import config from "../../config.json";
import Card from "../card/Card";
import clsx from "clsx";
import Clock from "react-live-clock";

export default function Cards() {
    const foodTrucks = useFoodTrucks();
    const location = useGeolocation();

    if (!location) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center text-2xl font-semibold">Loading location... Please wait...</div>
            </div>
        );
    }

    function isNearby(start: Coordinate, end: Coordinate) {
        return haversine(start, end, { threshold: config.FOODTRUCK_MILE_RADIUS, unit: "mile" });
    }

    function getNearbyFoodTrucks(foodTrucks: FoodTruck[], location: Location) {
        return foodTrucks
            .filter(foodTruck => {
                const now = new Date();
                const startingDate = new Date();
                const endingDate = new Date();
                const [ startHour, startMinutes ] = foodTruck.start24.split(":").map(Number);
                const [ endHour, endMinutes ] = foodTruck.end24.split(":").map(Number);

                startingDate.setHours(startHour);
                startingDate.setMinutes(startMinutes);

                endingDate.setHours(endHour);
                endingDate.setMinutes(endMinutes);

                const isWithinBusinessHours = now > startingDate && now < endingDate;

                const isNearMe = isNearby(
                    { latitude: location.coords.latitude, longitude: location.coords.longitude },
                    { latitude: Number(foodTruck.latitude), longitude: Number(foodTruck.longitude) },
                );

                return isNearMe && now.getDay() === Number(foodTruck.dayorder) && isWithinBusinessHours;
            })
            .slice(0,5);
    }

    const nearbyFoodTrucks = getNearbyFoodTrucks(foodTrucks, location);

    return (
        <div>
            <div className="text-center mb-10">
                <h4 className="font-bold text-2xl">
                    <span className="font-light">Explore available food trucks at</span>
                    {" "}
                    <span className="font-medium">
                        <Clock format={"hh:mm:ss A"} blinking={true} ticking={true} timezone={"US/Pacific"} />
                    </span>
                </h4>
            </div>
            {nearbyFoodTrucks.length 
                ? (
                    <ul className="grid grid-row lg:grid-cols-2 gap-5">
                        {nearbyFoodTrucks.map((foodTruck, key) => (
                            <li
                                key={key}
                                className={clsx(
                                    "p-5 rounded-lg hover:bg-blue-500 hover:border-blue-500 hover:text-white",
                                    key % 2 ? "bg-slate-200" : "border-2 border-slate-200"
                                )}
                            >
                                <Card foodTruck={foodTruck} />
                            </li>
                        ))}
                    </ul>
                )
                : (
                    <p className="text-center text-2xl font-semibold mt-10">
                        Sorry, there are no food trucks nearby within a 5 mile radius.
                    </p>
                )
            }
        </div>
    );
}
