import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AverageSpeed from "./components/AverageSpeed";
import Gears from "./components/Gears";
import LeanAngle from "./components/LeanAngle";
import Temperature from "./components/Temperature";
import Velocity from "./components/Velocity";
import { GeolocationProvider } from "./context/GeolocationProvider";
import { useWakeLock } from "./hooks/useWakeLock";
import AppLayout from "./AppLayout";

function App() {
  useWakeLock(true);

  return (
    <GeolocationProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/velocity" replace />} />
            <Route path="velocity" element={<Velocity />} />
            <Route path="temperature" element={<Temperature />} />
            <Route path="average-speed" element={<AverageSpeed />} />
            <Route path="gears" element={<Gears />} />
            <Route path="lean-angle" element={<LeanAngle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GeolocationProvider>
  );
}

export default App;
