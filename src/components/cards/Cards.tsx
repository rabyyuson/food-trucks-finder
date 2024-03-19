import { useState } from "react";
import useFoodTrucks from "../../lib/hooks/useFoodTrucks";
import useGeolocation from "../../lib/hooks/useGeolocation";

export default function Cards() {
    const foodTrucks = useFoodTrucks();
    const location = useGeolocation();

    console.log(location)

    return (
        <div>
            <ul className="grid grid-cols-4 gap-5">
                {foodTrucks.map((foodTruck, key) => (
                    <li
                        key={key}
                        className="border border-2 p-10 rounded-lg"
                    >
                        <h3 className="text-2xl font-bold">
                            {foodTruck.applicant}
                        </h3>
                        <p className="my-5">
                            <label className="font-bold">Serves:</label>
                            {" "}
                            {foodTruck.optionaltext}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
