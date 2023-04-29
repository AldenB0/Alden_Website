import React from "react";

const Highlight = ({ color, title, text }) => {
  return (
    <div className="py-12">
      <div className={`${color} w-[500%] ml-[-200%] py-16 text-center`}>
        <h2 className="text-white opacity-75 text-xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-white text-4xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Highlight;
