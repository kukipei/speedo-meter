import { useEffect, useState } from "react";
import { useGeolocationContext } from "../context/geolocation-context";
import { get } from "../util/http";
import Spinner from "./Spinner";

function Temperature() {
  const { coords } = useGeolocationContext();
  // Round to ~1 km so weather isn't refetched on every GPS fix.
  const lat = coords ? Number(coords.latitude.toFixed(1)) : undefined;
  const lon = coords ? Number(coords.longitude.toFixed(1)) : undefined;
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    if (lat === undefined || lon === undefined) return;

    async function fetchTemperature() {
      try {
        const data = (await get(
          `https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`,
        )) as { temp: number };

        setTemperature(data.temp);
      } catch (error) {
        if (error instanceof Error) {
          //   setError(error.message);
        }
      }
    }

    fetchTemperature();
  }, [lat, lon]);

  if (temperature === null) return <Spinner />;

  return (
    <section className="temperature-section">
      <div>{temperature !== null && `${temperature}°C`}</div>
    </section>
  );
}

export default Temperature;
