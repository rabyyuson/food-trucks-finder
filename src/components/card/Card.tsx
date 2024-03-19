import { FoodTruck } from "../../lib/types/types";
import Clock from "../icons/Clock";
import MapPin from "../icons/MapPin";

export default function Card({
    foodTruck,
}: {
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
                        <MapPin />
                    </span>
                    {foodTruck.location}
                </p>
            </div>
        </>
    );
}