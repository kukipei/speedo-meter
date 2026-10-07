import { FaHome } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
import { RxAngle } from "react-icons/rx";
import { TbAlarmAverage, TbTemperatureSun } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <header className="app-header">
      <ul>
        <li>
          <NavLink to="/" end>
            <FaHome />
          </NavLink>
        </li>
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
      </ul>
    </header>
  );
}

export default NavMenu;
