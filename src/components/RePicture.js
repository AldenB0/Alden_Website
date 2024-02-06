import React from "react";
import RePic from "../assets/img/RepictureCover.png";
import { Link } from "react-router-dom";

const RePicture = () => {
  return (
    <div id="mitre" className="w-5/6 sm:py-16 py-10">
      <Link to="/RePicture_CaseStudy">
        <div className="text-white py-3">
          <h3 className="text-white opacity-70 italic font-body text-md">
            RePicture
          </h3>
          <h1 className="md:text-4xl text-3xl font-bold font-display">
            RePicture
          </h1>
          <h2 className="md:text-base text-sm font-bold font-body opacity-50 pt-2">
            Redesigning a job search platform to meet the needs of recruiters.
          </h2>
        </div>

        <div className="sm:h-[30rem] h-[25rem] rounded-3xl overflow-hidden flex justify-center video">
          <img
            src={RePic}
            alt="Repicture Screens"
            className="object-cover w-full h-auto min-w-[60rem]"
          />
        </div>
      </Link>
    </div>
  );
};

export default RePicture;
