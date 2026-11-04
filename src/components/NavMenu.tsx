import { NavLink } from "react-router-dom";
import { IoIosSpeedometer } from "react-icons/io";
import { TbTemperatureSun, TbAlarmAverage } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { RxAngle } from "react-icons/rx";
import { LuPlaneTakeoff } from "react-icons/lu";

function NavMenu() {
  return (
    <header className="app-header">
      <ul>
        <li>
          <NavLink to="/velocity">
            <IoIosSpeedometer />
          </NavLink>
        </li>
        <li>
          <NavLink to="/temperature">
            <TbTemperatureSun />
          </NavLink>
        </li>
        <li>
          <NavLink to="/average-speed">
            <TbAlarmAverage />
          </NavLink>
        </li>
        <li>
          <NavLink to="/gears">
            <GiGearStickPattern />
          </NavLink>
        </li>
        <li>
          <NavLink to="/lean-angle">
            <RxAngle />
          </NavLink>
        </li>
        <li>
          <NavLink to="/altitude">
            <LuPlaneTakeoff />
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default NavMenu;
