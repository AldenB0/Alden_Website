import React from "react";

const Img = ({ imgSrc, altText, imgStyle }) => {
  return (
    <div className="rounded-2xl overflow-hidden flex justify-center my-6">
      <img src={imgSrc} alt={altText} className={`max-w-screen ${imgStyle}`} />
    </div>
  );
};

export default Img;
