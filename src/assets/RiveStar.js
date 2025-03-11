import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import riveAnimation from "./animations/star_rating.riv";

const RiveStar = () => {
  const { RiveComponent, rive } = useRive({
    src: riveAnimation,
    stateMachines: "State Machine 1",
    automaticallyHandleEvents: true,
    autoplay: true,
  });

  useEffect(() => {
    if (rive) {
      console.log("Rive contents:", rive);
      console.log("Available animations:", rive.animationNames);
      console.log("Available state machines:", rive.stateMachineNames);
    }
  }, [rive]);

  return (
    <div className="w-full h-[600px]">
      <RiveComponent />
    </div>
  );
};

export default RiveStar;
