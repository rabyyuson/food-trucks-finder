import { useEffect, useState } from "react";
import config from "../../config.json";
import { FoodTruck } from "../types/types";

export default function useFoodTrucks() {
    const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch(`${config.BACKEND_URL}/api/food-trucks`);
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