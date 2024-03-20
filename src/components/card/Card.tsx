import { FoodTruck } from "../../lib/types/types";
import Clock from "../icons/Clock";
import MapPin from "../icons/MapPin";
import Map from "../icons/Map";

export default function Card({
    distance,
    foodTruck,
}: {
    distance: number;
    foodTruck: FoodTruck;
}) {
    return (
        <>
            <h3 className="text-lg font-semibold">
                {foodTruck.applicant}
            </h3>
            <p className="my-2 text-sm">
                {foodTruck.optionaltext}
            </p>
            <div className="flex flex-row justify-between mt-10">
                <p className="text-sm flex flex-row text-left items-center gap-2">
                    <span>
                        <Clock />
                    </span>
                    {foodTruck.starttime} - {foodTruck.endtime}
                </p>
                <p className="text-sm flex flex-row text-left items-center gap-2">
                    <span>
                        <Map />
                    </span>
                    {Math.floor(distance)}
                    {" "}
                    miles
                </p>
                <p className="text-sm flex flex-row text-left items-center gap-2">
                    <span>
                        <MapPin />
                    </span>
                    {foodTruck.location}
                </p>
            </div>
        </>
    );
}