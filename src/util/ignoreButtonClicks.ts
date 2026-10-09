import type { MouseEvent } from "react";

// Stops a link from navigating when the click came from a button inside it.
export function ignoreButtonClicks(event: MouseEvent) {
  if ((event.target as HTMLElement).closest("button")) {
    event.preventDefault();
  }
}
