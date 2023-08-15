import React from "react";

const Video = ({ src, divStyle, videoStyle }) => {
  // Combine the existing styles with the additional styles
  const combinedDivStyle = `rounded-3xl overflow-hidden flex justify-center ${divStyle}`;

  return (
    <div className={combinedDivStyle}>
      <video autoPlay loop muted className={videoStyle}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

/* "object-cover mix-blend-lighten w-full h-auto min-w-[60rem]" */
