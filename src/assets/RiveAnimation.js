import { useRive } from "rive-react";

const RiveTest = () => {
  const { RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    autoplay: true,
  });

  return (
    <div className="w-full h-[400px] bg-slate-800">
      <RiveComponent />
    </div>
  );
};

export default RiveTest;
