import { createContext, useContext } from "react";
import { type GeoData } from "../hooks/useGeolocation";

// export type GeolocationContextValue = ReturnType<GeoData>;

export const GeolocationContext = createContext<GeoData | null>(null);

export function useGeolocationContext() {
  const ctx = useContext(GeolocationContext);
  if (!ctx) {
    throw new Error(
      "useGeolocationContext must be used within a GeolocationProvider",
    );
  }
  return ctx;
}
