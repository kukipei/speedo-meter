import { useGeolocationContext } from "../context/geolocation-context";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";

function Velocity() {
  const { loading, coords, error } = useGeolocationContext();

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <NavLink to="/velocity" style={{ display: "contents" }}>
      <section className="velocity-section">
        <p className="velocity">{Math.round((coords?.speed ?? 0) * 3.6)}</p>
      </section>
    </NavLink>
  );
}

export default Velocity;
