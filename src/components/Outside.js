import React from "react";
import outside from "../assets/video/OutsideShowcase.mp4";

const Outside = () => {
  return (
    <div id="mitre" className="w-5/6 py-16">
      <div className="text-white py-3">
        <h3 className="text-Green font-display text-lg">UMD</h3>
        <h1 className="text-4xl font-bold font-display">Outside</h1>
        <h2 className="text-1xl font-bold font-body opacity-50 pt-2">
          An app designed to explore fluid interactions and user motovation.
        </h2>
      </div>
      <div className="h-[35rem] rounded-3xl overflow-hidden flex justify-center video">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-auto min-w-[60rem]"
        >
          <source src={outside} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Outside;
