import React from "react";
import { useRive } from "rive-react";
import riveAnimation from "./animations/star_rating.riv";

/**
 * RiveStar — experiment: self-contained interactivity.
 *
 * `automaticallyHandleEvents` lets the .riv's state machine handle
 * pointer input (hover/click on each star) with no React wiring at all.
 */
const RiveStar = () => {
  const { RiveComponent } = useRive({
    src: riveAnimation,
    stateMachines: "State Machine 1",
    automaticallyHandleEvents: true,
    autoplay: true,
  });

  return (
    <div className="w-full h-full">
      <RiveComponent />
    </div>
  );
};

export default RiveStar;
