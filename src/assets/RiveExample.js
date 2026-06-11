import React from "react";
import { useRive, useStateMachineInput } from "rive-react";
import riveExample from "./animations/hamburger_time.riv";

/**
 * RiveTest — experiment: firing a trigger input from React.
 *
 * The state machine exposes a "Switch" trigger; calling .fire() from an
 * onClick shows how React events can drive a Rive state machine directly.
 */
const RiveTest = () => {
  const { RiveComponent, rive } = useRive({
    src: riveExample,
    stateMachines: "Basic State Machine",
    autoplay: true,
  });

  const onClickInput = useStateMachineInput(
    rive,
    "Basic State Machine",
    "Switch"
  );

  return (
    <div className="w-full h-full">
      <RiveComponent onClick={() => onClickInput?.fire()} />
    </div>
  );
};

export default RiveTest;
