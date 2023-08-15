import React from "react";

const Highlight = ({ color, title, text, boxH, quote }) => {
  return (
    <div className="py-12 relative">
      <div className={`${color} w-[500%] ml-[-200%] ${boxH} text-center`} />
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white opacity-75 text-xl font-bold mb-4">
          {title}
        </h2>
        <div className="flex flex-col items-end">
          <p className="text-white xl:text-3xl sm:text-2xl text-lg font-bold h-">
            {text}
          </p>
          <p className="text-white font-bold opacity-75 right md:text-sm text-xs pt-4">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
