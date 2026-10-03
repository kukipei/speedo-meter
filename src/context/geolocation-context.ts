import { createContext, useContext } from "react";
import { useGeolocation } from "../hooks/useGeolocation";

export type GeolocationContextValue = ReturnType<typeof useGeolocation>;

export const GeolocationContext = createContext<GeolocationContextValue | null>(
  null,
);

export function useGeolocationContext() {
  const ctx = useContext(GeolocationContext);
  if (!ctx) {
    throw new Error(
      "useGeolocationContext must be used within a GeolocationProvider",
    );
  }
  return ctx;
}
