import type { ReactNode } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { GeolocationContext } from "./geolocation-context";

export function GeolocationProvider({ children }: { children: ReactNode }) {
  const geoData = useGeolocation({ enableHighAccuracy: true });

  return (
    <GeolocationContext.Provider value={geoData}>
      {children}
    </GeolocationContext.Provider>
  );
}
