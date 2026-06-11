import React from "react";

const CaseStudyHeader = ({
  category,
  categoryColor = "text-white",
  title,
  description,
  meta = [],
}) => {
  return (
    <div className="flex flex-col justify-center text-white pt-20">
      <h2 className={`text-lg font-body font-bold ${categoryColor}`}>
        {category}
      </h2>
      <h1 className="md:text-6xl text-5xl font-bold font-display">{title}</h1>
      {description && <p className="pt-2 font-body">{description}</p>}
      <div className="flex sm:flex-row flex-col justify-between gap-x-4 my-12">
        {meta.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col sm:max-w-[15rem] font-body ${
              index > 0 ? "sm:pt-0 pt-4" : ""
            }`}
          >
            <h3 className="md:text-lg text-base font-bold opacity-50">
              {item.label}
            </h3>
            {item.content ?? <p>{item.value}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyHeader;
