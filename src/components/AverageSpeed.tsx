import { useEffect, useRef, useState } from "react";
import { useGeolocationContext } from "../context/geolocation-context";
import Spinner from "./Spinner";
import Button from "./Button";

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
    const speed = coords?.speed;
    // Only count samples while moving, so standing still doesn't drag the average down
    if (!speed || speed <= 0) return;
    totals.current.sum += speed * 3.6;
    totals.current.count += 1;
    setAverage(totals.current.sum / totals.current.count);
  }, [coords]);

  if (loading) return <Spinner />;
  if (error) return null;

  return (
    <section className="average-speed-section">
      <div className="average-speed">
        <p>{Math.round(average)}</p>
        <Button onClick={resetAverageSpeed}>Reset</Button>
      </div>
    </section>
  );
}

export default AverageSpeed;
