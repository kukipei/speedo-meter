import { Outlet } from "react-router-dom";
import NavMenu from "./components/NavMenu";

function AppLayout() {
  return (
    <div className="app">
      <NavMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
