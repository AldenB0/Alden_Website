import React from "react";

const Img = ({ imgSrc, altText, imgStyle }) => {
  return (
    <div className="rounded-3xl overflow-hidden flex justify-center my-6">
      <img src={imgSrc} alt={altText} className={imgStyle} />
    </div>
  );
};

export default Img;
