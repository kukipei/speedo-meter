import { useEffect, useRef } from "react";

export function useWakeLock(enabled = true) {
  const lockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!enabled || !("wakeLock" in navigator)) return;

    const request = async () => {
      try {
        lockRef.current = await navigator.wakeLock.request("screen");
      } catch (err) {
        console.warn("Wake lock failed:", err); // e.g. battery saver on
      }
    };

    // The browser releases the lock when the tab is hidden, so re-acquire it on return
    const onVisibility = () => {
      if (document.visibilityState === "visible") request();
    };

    request();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      lockRef.current?.release();
      lockRef.current = null;
    };
  }, [enabled]);
}
