import React from "react";

const Section = ({
  title,
  callout,
  text,
  text2,
  listItems = [],
  pros = [],
  protitle,
  cons = [],
  constitle,
}) => {
  return (
    <div className="flex flex-col justify-center text-white py-8">
      <h2 className="md:text-xl text-lg font-bold font-body opacity-50">
        {title}
      </h2>
      <p className="md:text-4xl text-2xl font-bold font-display my-3">
        {callout}
      </p>
      <p className="font-body md:text-lg text-md">{text}</p>
      {listItems.length > 0 && (
        <ul className="md:text-lg text-md font-body pt-5 font-bold">
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <p className="font-body md:text-lg text-md pt-5">{text2}</p>
      {(pros.length > 0 || cons.length > 0) && (
        <div>
          <div className="flex flex-row justify-between">
            {pros.length > 0 && (
              <div className="flex flex-col font-body">
                <h3 className="md:text-lg text-md font-bold opacity-50 mt-5">
                  {protitle}
                </h3>
                <ul className="md:text-lg text-md font-body pt-3 max-w-xl">
                  {pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {cons.length > 0 && (
              <div className="flex flex-col font-body">
                <h3 className="md:text-lg text-md font-bold opacity-50 mt-5">
                  {constitle}
                </h3>
                <ul className="md:text-lg text-md font-body pt-3 max-w-xl">
                  {cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;
