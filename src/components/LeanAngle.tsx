import { useLeanAngle } from "../hooks/useLeanAngle";
import Button from "./Button";

function LeanAngle() {
  const { angle, permission, requestPermission } = useLeanAngle();

  if (permission === "unsupported") return null;

  if (permission === "required") {
    return (
      <div className="lean-angle">
        <Button onClick={requestPermission}>Enable lean angle</Button>
      </div>
    );
  }

  if (angle === null) return <div className="lean-angle">--</div>;

  const side = angle === 0 ? "" : angle > 0 ? "R" : "L";

  return (
    <div className="lean-angle">
      <p>{Math.abs(angle)}°</p>
      <span className="lean-side">{side}</span>
    </div>
  );
}

export default LeanAngle;
