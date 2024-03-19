import { useState } from "react";
import Button from "../button/Button";
import Cards from "../cards/Cards";

export default function Home() {
    const [isFindFoodTrucksClicked, setIsFindFoodTrucksClicked] = useState(false);

    return (
        <div className="container mx-auto my-5">
            {!isFindFoodTrucksClicked && <Button onButtonClick={() => { setIsFindFoodTrucksClicked(true) }} />}
            {isFindFoodTrucksClicked && <Cards />}
        </div>
    );
}