import { useState } from "react";
import useFoodTrucks from "../../lib/hooks/useFoodTrucks";
import useGeolocation from "../../lib/hooks/useGeolocation";
import haversine from "haversine";
import { Coordinate, FoodTruck, Location } from "../../lib/types/types";
import Card from "../card/Card";
import clsx from "clsx";
import Clock from "react-live-clock";

export default function Cards() {
    const [radius, setRadius] = useState(5);
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
        return haversine(start, end, { threshold: radius, unit: "mile" });
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
                    <span className="font-light">Explore available San Francisco food trucks at</span>
                    {" "}
                    <span className="font-medium">
                        <Clock format={"hh:mm:ss A"} blinking={true} ticking={true} timezone={"US/Pacific"} />
                    </span>
                </h4>
                <select
                    className="border w-40 mt-5 p-2 rounded-md"
                    onChange={(event) => { setRadius(Number(event.target.value)) }}
                >
                    <option value={5}>5 miles</option>
                    <option value={25}>25 miles</option>
                    <option value={50}>50 miles</option>
                    <option value={100}>100 miles</option>
                    <option value={200}>200 miles</option>
                    <option value={999999}>Any distance</option>
                </select>
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
                    <p className="text-center text-xl font-semibold mt-10">
                        Sorry, there are no food trucks nearby within {radius} miles.
                        <br/>
                        Please try again.
                    </p>
                )
            }
        </div>
    );
}
