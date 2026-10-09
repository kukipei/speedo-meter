import { RxAngle } from "react-icons/rx";
import { useLeanAngle } from "../hooks/useLeanAngle";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { ignoreButtonClicks } from "../util/ignoreButtonClicks";

function LeanAngle() {
  const { angle, permission, requestPermission } = useLeanAngle();

  if (permission === "unsupported") return null;

  if (permission === "required") {
    return (
      <NavLink
        to="/lean-angle"
        style={{ display: "contents" }}
        onClick={ignoreButtonClicks}
      >
        <section className="lean-angle-section">
          <RxAngle />
          <div className="lean-angle">
            <Button onClick={requestPermission}>Enable lean angle</Button>
          </div>
        </section>
      </NavLink>
    );
  }

  // if (angle === null) return <div className="lean-angle">--</div>;

  const side = angle === 0 ? "" : angle > 0 ? "R" : "L";

  return (
    <NavLink to="/lean-angle" style={{ display: "contents" }}>
      <section className="lean-angle-section">
        <RxAngle />
        <div className="lean-angle">
          <p>{Math.abs(angle)}°</p>
          <span className="lean-side">{side}</span>
        </div>
      </section>
    </NavLink>
  );
}

export default LeanAngle;
