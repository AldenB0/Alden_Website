import React, { useEffect } from "react";
import { useRive, EventType } from "rive-react";
import riveAnimation from "./animations/Button.riv";

// Example of event logging

const RiveButton = () => {
  const { RiveComponent, rive } = useRive({
    src: riveAnimation,
    stateMachines: "Button animation",
    autoplay: true,
  });

  useEffect(() => {
    if (rive) {
      // Define the event handler
      const handleRiveEvent = (event) => {
        const eventName = event.data.name;
        console.log(`Event triggered: ${eventName}`);

        switch (eventName) {
          case "click":
            console.log("Click event detected!");
            // Add your click event logic here
            break;
          case "hover-on":
            console.log("Hover-on event detected!");
            // Add your hover-on event logic here
            break;
          case "hover-off":
            console.log("Hover-off event detected!");
            // Add your hover-off event logic here
            break;
          default:
            console.log(`Unhandled event: ${eventName}`);
        }
      };

      // Subscribe to Rive events
      rive.on(EventType.RiveEvent, handleRiveEvent);

      // Cleanup event listener on component unmount
      return () => {
        rive.off(EventType.RiveEvent, handleRiveEvent);
      };
    }
  }, [rive]);

  return (
    <div className="w-full h-[600px]">
      <RiveComponent />
    </div>
  );
};

export default RiveButton;
