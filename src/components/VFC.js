import React from "react";
import outside from "../assets/video/OutsideShowcase.mp4";
import { Link } from "react-router-dom";

const VFC = () => {
  return (
    <div id="mitre" className="w-5/6 sm:py-16 py-10">
      <div className="text-white py-3">
        <h3 className="text-Blue font-display text-lg">UMD</h3>
        <h1 className="md:text-4xl text-3xl font-bold font-display">
          Virtual Financial Coach
        </h1>
        <h2 className="md:text-base text-sm font-bold font-body opacity-50 pt-2">
          A product concept developed to provide a centralized location for
          financhial education & management.
        </h2>
      </div>
      <Link to="/VFC_CaseStudy">
        <div className="sm:h-[35rem] h-[25rem] rounded-3xl overflow-hidden flex justify-center video">
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
      </Link>
    </div>
  );
};

export default VFC;
