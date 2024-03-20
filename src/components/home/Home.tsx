import { useState } from "react";
import Button from "../button/Button";
import useGeolocation from "../../lib/hooks/useGeolocation";
import Cards from "../cards/Cards";

export default function Home() {
    const [isFindFoodTrucksClicked, setIsFindFoodTrucksClicked] = useState(false);
    const location = useGeolocation();

    if (!location) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center text-2xl font-semibold">Calculating your location...</div>
            </div>
        );
    }

    return (
        <div className="m-5 mb-10">
            <div className="container mx-auto">
                {!isFindFoodTrucksClicked && <Button onButtonClick={() => { setIsFindFoodTrucksClicked(true) }} />}
                {isFindFoodTrucksClicked && <Cards location={location} />}
            </div>
        </div>
    );
}