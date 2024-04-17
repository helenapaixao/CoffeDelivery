import { useEffect, useState } from "react";
import axios from "axios";

type LocationData = {
  results: any;
  city: string;
  state: string;
};

const useUserLocation = (): string | null => {
  const [userLocation, setUserLocation] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get<LocationData>(
              `https://api.opencagedata.com/geocode/v1/json?key=ec7758ac89324cbab7e4d86369d6f802&q=${latitude},${longitude}&pretty=1&no_annotations=1`
            );
            const { city, state } = response.data.results[0].components;
            setUserLocation(`${city}, ${state}`);
          } catch (error) {
            console.error("Error fetching user location:", error);
          }
        });
      }
    };

    fetchUserLocation();
  }, []);

  return userLocation;
};

export default useUserLocation;
