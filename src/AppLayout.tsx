import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
