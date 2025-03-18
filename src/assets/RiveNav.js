import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import riveExample from "./animations/ham_nav.riv";

/**
 * RiveNav Component
 *
 * A simple component that displays a Rive hamburger menu animation
 * and allows controlling it through the isOpen prop.
 */
const RiveNav = ({ isOpen }) => {
  const { RiveComponent, rive } = useRive({
    src: riveExample,
    stateMachines: "Hamburger interaction",
    autoplay: true,
  });

  // Get the state machine input
  const openInput = useStateMachineInput(
    rive,
    "Hamburger interaction",
    "Open?"
  );

  // Update the Rive animation when isOpen changes
  useEffect(() => {
    if (
      openInput &&
      typeof isOpen === "boolean" &&
      openInput.value !== isOpen
    ) {
      openInput.value = isOpen;
    }
  }, [isOpen, openInput]);

  return (
    <div className="w-full h-full">
      <RiveComponent />
    </div>
  );
};

export default RiveNav;
