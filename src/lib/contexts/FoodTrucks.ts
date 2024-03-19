import { createContext } from "react";
import { FoodTruck } from "../types/types";

export const FoodTrucks = createContext<FoodTruck[]>([]);