import { useLeanAngle } from "../hooks/useLeanAngle";
import Button from "./Button";

function LeanAngle() {
  const { angle, maxLeft, maxRight, permission, requestPermission } =
    useLeanAngle();

  if (permission === "unsupported") return null;

  if (permission === "required") {
    return (
      <section className="lean-angle-section">
        <div className="lean-angle">
          <Button onClick={requestPermission}>Enable lean angle</Button>
        </div>
      </section>
    );
  }

  const side = angle === 0 ? "" : angle > 0 ? "R" : "L";

  return (
    <section className="lean-angle-section">
      <div className="title">Lean Angle</div>
      <div className="lean-angle-row">
        <span className="lean-max" title="Max left">
          {maxLeft}°
        </span>
        <div className="lean-angle">
          <p>{Math.abs(angle)}°</p>
          <span className="lean-side">{side}</span>
        </div>
        <span className="lean-max" title="Max right">
          {maxRight}°
        </span>
      </div>
    </section>
  );
}

export default LeanAngle;
