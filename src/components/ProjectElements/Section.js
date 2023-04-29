import React from "react";

const Section = ({ title, callout, text }) => {
  return (
    <div className="flex flex-col justify-center text-white py-5">
      <h2 className="text-xl font-bold font-body opacity-50">{title}</h2>
      <p className="md:text-4xl text-2xl font-bold font-display my-3">
        {callout}
      </p>
      <p className="text-lg font-body">{text}</p>
    </div>
  );
};

export default Section;
