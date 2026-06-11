import { useState } from "react";
import "../index.css";
import { RiveNav, RiveTest, RiveStar, RiveButton } from "../assets";

/**
 * Playground — a dev-only sandbox for animation experiments.
 *
 * Only routed in development (see index.js), so anything here is safe to
 * break. Each card shows a different way of wiring Rive to React.
 */

const Card = ({ title, principle, children }) => (
  <div className="flex flex-col bg-white/5 rounded-2xl p-6">
    <h2 className="text-white font-display font-bold text-xl">{title}</h2>
    <p className="text-TextMuted font-body text-sm pt-1 pb-4">{principle}</p>
    <div className="flex-1 flex items-center justify-center min-h-[16rem]">
      {children}
    </div>
  </div>
);

const Playground = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [lastButtonEvent, setLastButtonEvent] = useState("none yet");

  return (
    <div className="bg-Background max-w-[1920px] min-h-screen p-8 sm:p-16">
      <h1 className="text-white font-display font-bold text-3xl pb-2">
        Playground
      </h1>
      <p className="text-TextMuted font-body pb-10">
        Dev-only sandbox — experiments with Rive ↔ React wiring. Not included
        in the deployed site.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          title="Hamburger nav"
          principle="Boolean state-machine input driven by a React prop (isOpen). This is what powers the live mobile menu."
        >
          <div className="flex flex-col items-center">
            <div className="text-white font-body mb-2">
              Menu state: {navOpen ? "Open" : "Closed"}
            </div>
            <button
              type="button"
              aria-label="Toggle menu animation"
              className="w-16 h-16 cursor-pointer"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <RiveNav isOpen={navOpen} />
            </button>
          </div>
        </Card>

        <Card
          title="Trigger input"
          principle="A trigger input fired imperatively from an onClick — React events driving the state machine."
        >
          <div className="w-full h-[16rem]">
            <RiveTest />
          </div>
        </Card>

        <Card
          title="Rive events"
          principle="The animation reports its own events (click, hover-on, hover-off) back to React via rive.on(EventType.RiveEvent)."
        >
          <div className="flex flex-col items-center w-full">
            <div className="text-white font-body mb-2">
              Last event: {lastButtonEvent}
            </div>
            <div className="w-full h-[16rem]">
              <RiveButton onEvent={setLastButtonEvent} />
            </div>
          </div>
        </Card>

        <Card
          title="Star rating"
          principle="automaticallyHandleEvents — the .riv handles its own pointer input with zero React wiring."
        >
          <div className="w-full h-[16rem]">
            <RiveStar />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Playground;
