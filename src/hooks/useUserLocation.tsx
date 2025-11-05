import { useEffect, useState } from "react";

type LocationData = {
  address?: {
    city?: string;
    state?: string;
    town?: string;
    county?: string;
    state_code?: string;
    region?: string;
  };
  display_name?: string;
};

const useUserLocation = (): string | null => {
  const [userLocation, setUserLocation] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      if (!("geolocation" in navigator)) {
        setUserLocation("Localização não disponível");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
            );

            if (!response.ok) {
              throw new Error("Erro na requisição");
            }

            const data: LocationData = await response.json();

            if (data.address) {
              const city = data.address.city || data.address.town || data.address.county || "";
              const state = data.address.state || data.address.region || data.address.state_code || "";
              
              if (city && state) {
                const stateShort = state.length > 2 ? state.substring(0, 2).toUpperCase() : state.toUpperCase();
                setUserLocation(`${city}, ${stateShort}`);
              } else if (city) {
                setUserLocation(city);
              } else if (data.display_name) {
                const parts = data.display_name.split(",").map(p => p.trim());
                if (parts.length >= 2) {
                  setUserLocation(`${parts[0]}, ${parts[parts.length - 1]}`);
                } else {
                  setUserLocation(parts[0]);
                }
              } else {
                setUserLocation("Localização não identificada");
              }
            } else if (data.display_name) {
              const parts = data.display_name.split(",").map(p => p.trim());
              if (parts.length >= 2) {
                setUserLocation(`${parts[0]}, ${parts[parts.length - 1]}`);
              } else {
                setUserLocation(parts[0]);
              }
            } else {
              setUserLocation("Localização não identificada");
            }
          } catch (error) {
            console.error("Error fetching user location:", error);
            setUserLocation("Erro ao obter localização");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          if (error.code === error.PERMISSION_DENIED) {
            setUserLocation("Permissão de localização negada");
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            setUserLocation("Localização indisponível");
          } else {
            setUserLocation("Erro ao obter localização");
          }
        },
        {
          timeout: 10000,
          enableHighAccuracy: false,
        }
      );
    };

    fetchUserLocation();
  }, []);

  return userLocation;
};

export default useUserLocation;
