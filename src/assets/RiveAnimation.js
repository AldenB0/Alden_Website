import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import riveAnimation from "./animations/hamburger_time.riv";

/**
 * RiveTest Component
 *
 * Features:
 * - Displays Rive animation
 * - Logs rive contents to console
 * - Handles click interactions
 */

const RiveTest = () => {
  const { RiveComponent, rive } = useRive({
    src: riveAnimation,
    stateMachines: "Basic State Machine",
    autoplay: true,
  });

  // Log the Rive contents to the console
  useEffect(() => {
    if (rive) {
      console.log("Rive contents:", rive);
      console.log("Available animations:", rive.animationNames);
      console.log("Available state machines:", rive.stateMachineNames);
    }
  }, [rive]);

  const onClickInput = useStateMachineInput(
    rive,
    "Basic State Machine",
    "Switch"
  );

  return (
    <div className="w-full h-[400px]">
      <RiveComponent onClick={() => onClickInput?.fire()} />
    </div>
  );
};

export default RiveTest;
