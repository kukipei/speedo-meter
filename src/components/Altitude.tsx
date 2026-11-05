import { useGeolocationContext } from "../context/geolocation-context";
import Spinner from "./Spinner";

function Altitude() {
  const { loading, coords, error } = useGeolocationContext();

  if (loading) return <Spinner />;
  if (error) return null;

  //   console.log(coords);

  if (coords?.altitude === null)
    return <div>Altitude not available on this device</div>;

  return (
    <section className="altitude-section">
      <div className="title">Altitude</div>
      <div className="section-content">{Math.round(coords!.altitude)}</div>
    </section>
  );
}

export default Altitude;
