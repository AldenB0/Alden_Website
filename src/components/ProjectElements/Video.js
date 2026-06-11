import React, { useEffect, useRef } from "react";

const Video = ({ src, divStyle, videoStyle }) => {
  const videoRef = useRef(null);

  // React doesn't reliably write the `muted` attribute to the real DOM
  // (facebook/react#10389), and browsers block autoplay on unmuted video.
  // Setting it via ref before playing keeps autoplay working.
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className={`rounded-3xl overflow-hidden flex justify-center ${
        divStyle ?? ""
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={videoStyle}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
