import AverageSpeed from "./AverageSpeed";
import Gears from "./Gears";
import LeanAngle from "./LeanAngle";
import Temperature from "./Temperature";
import Velocity from "./Velocity";

function Home() {
  return (
    <div className="home">
      <Temperature />

      <Velocity />

      <AverageSpeed />

      <Gears />

      <LeanAngle />
    </div>
  );
}

export default Home;
