import { useCallback, useEffect, useState } from "react";

type Permission = "granted" | "required" | "unsupported";

// iOS Safari only exposes requestPermission on DeviceOrientationEvent
type PermissionedOrientationEvent = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

function getInitialPermission(): Permission {
  if (typeof DeviceOrientationEvent === "undefined") return "unsupported";
  const ctor = DeviceOrientationEvent as PermissionedOrientationEvent;
  return typeof ctor.requestPermission === "function" ? "required" : "granted";
}

/**
 * Lean angle in degrees: rotation of the screen in its own plane, as seen by
 * someone looking at it (positive = clockwise = leaning right). Assumes the
 * device is mounted upright, facing the rider.
 */
function computeLeanAngle(beta: number, gamma: number): number {
  const toRad = Math.PI / 180;
  const b = beta * toRad;
  const g = gamma * toRad;

  // World "up" expressed in the device frame (third row of the W3C rotation matrix)
  const upX = -Math.cos(b) * Math.sin(g);
  const upY = Math.sin(b);

  // Account for the screen being rotated (portrait / landscape)
  const theta = (screen.orientation?.angle ?? 0) * toRad;
  const alongScreenUp = upX * Math.sin(theta) + upY * Math.cos(theta);
  const alongScreenRight = upX * Math.cos(theta) - upY * Math.sin(theta);

  return Math.atan2(-alongScreenRight, alongScreenUp) / toRad;
}

export function useLeanAngle() {
  const [permission, setPermission] =
    useState<Permission>(getInitialPermission);
  const [angle, setAngle] = useState<number>(0);
  const [maxLeft, setMaxLeft] = useState<number>(0);
  const [maxRight, setMaxRight] = useState<number>(0);

  const requestPermission = useCallback(async () => {
    const ctor = DeviceOrientationEvent as PermissionedOrientationEvent;
    try {
      const result = await ctor.requestPermission?.();
      setPermission(result === "granted" ? "granted" : "unsupported");
    } catch (err) {
      console.warn("Orientation permission failed:", err);
      setPermission("unsupported");
    }
  }, []);

  useEffect(() => {
    if (permission !== "granted") return;

    const onOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta === null || event.gamma === null) return;
      const rounded = Math.round(computeLeanAngle(event.beta, event.gamma));
      setAngle(rounded);
      if (rounded < 0) setMaxLeft((max) => Math.max(max, -rounded));
      else if (rounded > 0) setMaxRight((max) => Math.max(max, rounded));
    };

    window.addEventListener("deviceorientation", onOrientation);
    return () => window.removeEventListener("deviceorientation", onOrientation);
  }, [permission]);

  return { angle, maxLeft, maxRight, permission, requestPermission };
}
