import { useLeanAngle } from "../hooks/useLeanAngle";
import Button from "./Button";

function LeanAngle() {
  const { angle, permission, requestPermission } = useLeanAngle();

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

  if (angle === null) return <div className="lean-angle">--</div>;

  const side = angle === 0 ? "" : angle > 0 ? "R" : "L";

  return (
    <section className="lean-angle-section">
      <div className="lean-angle">
        <p>{Math.abs(angle)}°</p>
        <span className="lean-side">{side}</span>
      </div>
    </section>
  );
}

export default LeanAngle;
