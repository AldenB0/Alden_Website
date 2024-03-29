import React from "react";
import mcodeShowcase from "../assets/img/mcodeShowcase.jpg";

import { Link } from "react-router-dom";

const Mitre = () => {
  return (
    <div id="mitre" className="w-5/6 sm:py-16 py-10">
      <Link to="/Coverage_CaseStudy">
        <div className="text-white py-3">
          <h3 className="text-white opacity-70 font-body italic text-md">
            MITRE
          </h3>
          <h1 className="md:text-4xl text-3xl font-bold font-display">
            mCODE Coverage Checker
          </h1>
          <h2 className="md:text-base text-sm font-bold font-body opacity-50 pt-2">
            An open-source healthcare dashboard with in-depth and flexible data
            visualizations.
          </h2>
        </div>

        <div className="sm:h-[30rem] h-[25rem] rounded-3xl overflow-hidden flex justify-center video">
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
