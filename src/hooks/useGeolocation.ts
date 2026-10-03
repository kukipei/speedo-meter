import { useEffect, useState } from "react";

type GeoData = {
  loading: boolean;
  coords: GeolocationCoordinates | null;
  error: GeolocationPositionError | null;
};

export function useGeolocation(options: PositionOptions = {}) {
  const [geoData, setGeoData] = useState<GeoData>({
    loading: true,
    coords: null,
    error: null,
  });
  const { enableHighAccuracy, maximumAge, timeout } = options;

  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      return;
    }

    let cancelled = false;

    const onSuccess = (pos: GeolocationPosition) => {
      if (cancelled) return;
      setGeoData({
        loading: false,
        coords: pos.coords,
        error: null,
      });
    };
    const onError = (err: GeolocationPositionError) => {
      if (cancelled) return;
      setGeoData((s) => ({ ...s, loading: false, error: err }));
    };

    const watchId: number = navigator.geolocation.watchPosition(
      onSuccess,
      onError,
      {
        enableHighAccuracy,
        maximumAge,
        timeout,
      },
    );

    return () => {
      cancelled = true;
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
    };
  }, [enableHighAccuracy, maximumAge, timeout]);

  return geoData;
}
