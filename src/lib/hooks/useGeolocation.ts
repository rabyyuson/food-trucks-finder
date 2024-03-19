import { useEffect, useState } from "react";
import { Location } from "../types/types";

export default function useGeolocation() {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position: any) => { setLocation(position) }, 
            (error: any) => { console.warn(`Unable to fetch location: ${error}`) },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            }
        );
    }, []);

    return location;
}