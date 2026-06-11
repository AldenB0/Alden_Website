import React, { useEffect } from "react";
import { useRive, EventType } from "rive-react";
import riveAnimation from "./animations/Button.riv";

/**
 * RiveButton — experiment: listening to Rive-reported events.
 *
 * The .riv file fires named events (click, hover-on, hover-off) from its
 * state machine; subscribing via rive.on(EventType.RiveEvent) lets React
 * react to what happens *inside* the animation. The optional onEvent prop
 * receives each event name.
 */
const RiveButton = ({ onEvent }) => {
  const { RiveComponent, rive } = useRive({
    src: riveAnimation,
    stateMachines: "Button animation",
    autoplay: true,
  });

  useEffect(() => {
    if (rive) {
      const handleRiveEvent = (event) => {
        onEvent?.(event.data.name);
      };

      rive.on(EventType.RiveEvent, handleRiveEvent);

      return () => {
        rive.off(EventType.RiveEvent, handleRiveEvent);
      };
    }
  }, [rive, onEvent]);

  return (
    <div className="w-full h-full">
      <RiveComponent />
    </div>
  );
};

export default RiveButton;
