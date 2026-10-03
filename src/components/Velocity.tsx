import { useGeolocationContext } from "../context/geolocation-context";
import Spinner from "./Spinner";

function Velocity() {
  const { loading, coords, error } = useGeolocationContext();

  console.log(coords);
  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  return <p className="velocity">{coords?.speed ?? "0"}</p>;
}

export default Velocity;
