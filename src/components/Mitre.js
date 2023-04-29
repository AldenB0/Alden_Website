import React from "react";
import mcodeShowcase from "../assets/img/mcodeShowcase.png";

import { Link } from "react-router-dom";

const Mitre = () => {
  return (
    <div id="mitre" className="w-5/6 sm:py-16 py-10">
      <div className="text-white py-3">
        <h3 className="text-Rose font-display text-lg">MITRE</h3>
        <h1 className="md:text-4xl text-3xl font-bold font-display">
          mCODE Coverage Checker
        </h1>
        <h2 className="md:text-base text-sm font-bold font-body opacity-50 pt-2">
          An app designed to explore fluid interactions and user motivation.
        </h2>
      </div>
      <Link to="/Coverage_CaseStudy">
        <div className="sm:h-[35rem] h-[25rem] rounded-3xl overflow-hidden flex justify-center video">
          <img
            src={mcodeShowcase}
            alt="mCODE Coverage Checker"
            className="object-cover w-full h-auto min-w-[60rem]"
          />
        </div>
      </Link>
    </div>
  );
};

export default Mitre;
