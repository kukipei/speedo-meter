import Gears from "./components/Gears";
import Temperature from "./components/Temperature";
import Velocity from "./components/Velocity";
import { GeolocationProvider } from "./context/GeolocationProvider";

function App() {
  return (
    <GeolocationProvider>
      <main>
        <section className="temperature-section">
          <Temperature />
        </section>
        <section className="velocity-section">
          <Velocity />
        </section>
        <section className="gears-section">
          <Gears />
        </section>
      </main>
    </GeolocationProvider>
  );
}

export default App;
