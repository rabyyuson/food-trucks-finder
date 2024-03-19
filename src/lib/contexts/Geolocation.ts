import { createContext } from "react";
import { Location } from "../types/types";

export const Geolocation = createContext<Location | null>(null);