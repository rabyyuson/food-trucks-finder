import { useEffect, useState } from "react";
import { FoodTruck } from "../types/types";

export default function useFoodTrucks() {
    const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/food-trucks`);
                const data = await response.json();
                setFoodTrucks(data);
            }
            fetchData();
        } catch(error) {
            console.error(`Error fetching food trucks from api: ${error}`);
        }
    }, []);

    return foodTrucks;
}