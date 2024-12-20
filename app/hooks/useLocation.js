import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useLocation() {
    const [location, setLocation] = useState();
    const getLocation = async () => {
        try {
            const { granted } = await Location.requestBackgroundPermissionsAsync(); // Use foreground permissions
            if (!granted) {
                console.log("Permission not granted");
                return;
            }

            const lastKnownLocation = await Location.getLastKnownPositionAsync();

            if (lastKnownLocation) {
                const { latitude, longitude } = lastKnownLocation.coords;
                setLocation({ latitude, longitude });
            } else {
                const currentPosition = await Location.getCurrentPositionAsync();
                const { latitude, longitude } = currentPosition.coords;
                setLocation({ latitude, longitude });
            }
        } catch (error) {
            console.log("Error getting location:", error);
        }
        return location;
    };
    useEffect(() => {
        getLocation();
    },[])
}