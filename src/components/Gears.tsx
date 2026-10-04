import { useState } from "react";
import { useGeolocationContext } from "../context/geolocation-context";
import Spinner from "./Spinner";

function Gears() {
  const { loading, coords, error } = useGeolocationContext();
  const [showGearsList, setShowGearsList] = useState(false);

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  const speed = (coords?.speed ?? 0) * 3.6; // m/s -> km/h

  let gearOnUp: string = "N";
  let gearOnDown: string = "N";

  if (speed <= 2) {
    gearOnUp = "N";
    gearOnDown = "N";
  } else if (speed <= 15) {
    gearOnDown = "1";
  } else if (speed <= 27) {
    gearOnUp = "1";
    gearOnDown = "2";
  } else if (speed <= 45) {
    gearOnUp = "2";
    gearOnDown = "3";
  } else if (speed <= 58) {
    gearOnUp = "3";
    gearOnDown = "4";
  } else if (speed <= 71) {
    gearOnUp = "4";
    gearOnDown = "5";
  } else if (speed <= 83) {
    gearOnUp = "5";
    gearOnDown = "6";
  } else {
    gearOnUp = "6";
  }

  return (
    <div className="gears">
      <span className="gear-label">Recomended gear</span>
      <div className="gear-current">
        <div className="gear-item">
          <span className="gear-label">On up</span>
          <h2>{gearOnUp}</h2>
        </div>
        <div className="gear-item">
          <span className="gear-label">On down</span>
          <h2>{gearOnDown}</h2>
        </div>
      </div>
      <button onClick={() => setShowGearsList(!showGearsList)}>
        Gear list
      </button>
      {showGearsList && (
        <div className="gear-lists">
          <div>
            <h3>1. → 2. 27 km/h</h3>
            <h3>2. → 3. 45 km/h</h3>
            <h3>3. → 4. 58 km/h</h3>
            <h3>4. → 5. 71 km/h</h3>
            <h3>5. → 6. 83 km/h</h3>
          </div>
          <div>
            <h3>6. → 5. 71 km/h</h3>
            <h3>5. → 4. 58 km/h</h3>
            <h3>4. → 3. 45 km/h</h3>
            <h3>3. → 2. 27 km/h</h3>
            <h3>2. → 1. 15 km/h</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gears;
