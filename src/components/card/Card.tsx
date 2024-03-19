import { FoodTruck } from "../../lib/types/types";

export default function Card({
    key,
    foodTruck,
}: {
    key: number;
    foodTruck: FoodTruck;
}) {
    return (
        <li
            key={key}
            className="border border-2 p-10 rounded-lg"
        >
            <h3 className="text-2xl font-bold">
                {foodTruck.applicant}
            </h3>
            <p className="my-5">
                <label className="font-bold">Hours:</label>
                {" "}
                {foodTruck.starttime} - {foodTruck.endtime}
            </p>
            <p className="my-5">
                <label className="font-bold">Location:</label>
                {" "}
                {foodTruck.locationdesc}
            </p>
            <p className="my-5">
                <label className="font-bold">Serves:</label>
                {" "}
                {foodTruck.optionaltext}
            </p>
        </li>
    );
}