import { useEffect, useRef, useState } from "react";
import { useGeolocationContext } from "../context/geolocation-context";
import Spinner from "./Spinner";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { ignoreButtonClicks } from "../util/ignoreButtonClicks";

function AverageSpeed() {
  const { loading, coords, error } = useGeolocationContext();
  const totals = useRef({ sum: 0, count: 0 });
  const [average, setAverage] = useState(0);

  function resetAverageSpeed() {
    totals.current.sum = 0;
    totals.current.count = 0;
    setAverage(0);
  }

  useEffect(() => {
    if (!coords) return;
    const speed = (coords.speed ?? 0) * 3.6;
    totals.current.sum += speed;
    totals.current.count += 1;
    setAverage(totals.current.sum / totals.current.count);
  }, [coords]);

  if (loading) return <Spinner />;
  if (error) return null;

  return (
    <NavLink
      to="/average-speed"
      style={{ display: "contents" }}
      onClick={ignoreButtonClicks}
    >
      <section className="average-speed-section">
        <div className="average-speed">
          <p>{Math.round(average)}</p>
          <Button onClick={resetAverageSpeed}>Reset</Button>
        </div>
      </section>
    </NavLink>
  );
}

export default AverageSpeed;
