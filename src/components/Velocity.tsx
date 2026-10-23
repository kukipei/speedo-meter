import { useGeolocationContext } from "../context/geolocation-context";
import Spinner from "./Spinner";

function Velocity() {
  const { loading, coords, error } = useGeolocationContext();

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="velocity-section">
      <div className="title">Velocity</div>
      <p className="velocity">{Math.round((coords?.speed ?? 0) * 3.6)}</p>
    </section>
  );
}

export default Velocity;
