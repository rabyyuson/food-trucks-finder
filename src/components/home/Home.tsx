import { useState } from "react";
import Button from "../button/Button";
import Cards from "../cards/Cards";

export default function Home() {
    const [isFindFoodTrucksClicked, setIsFindFoodTrucksClicked] = useState(false);

    return (
        <div className="m-5">
            <div className="container mx-auto">
                {!isFindFoodTrucksClicked && <Button onButtonClick={() => { setIsFindFoodTrucksClicked(true) }} />}
                {isFindFoodTrucksClicked && <Cards />}
            </div>
        </div>
    );
}