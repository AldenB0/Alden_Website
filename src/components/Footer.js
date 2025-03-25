import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "../index.css";
import ClipboardJS from "clipboard";
import { toast, ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  useEffect(() => {
    // Initialize ClipboardJS library
    new ClipboardJS(".icon-email");
  }, []);

  const handleClick = () => {
    // Copy email address to clipboard
    const email = "aldenjohnsonbrown@gmail.com";
    navigator.clipboard.writeText(email);
  };

  const bounceFade = cssTransition({
    enter: "fade-in",
    exit: "fade-in-rev",
  });

  const notify = () =>
    toast("Email copied to clipboard", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <ToastContainer
        className="my-toast"
        style={{
          textAlign: "center",
          width: "250px",
          borderRadius: "50px",
          left: "50%", // Position from center of viewport horizontally
          transform: "translateX(-50%)", // Offset by half its width
          bottom: "20px", // Explicitly set bottom distance
          position: "fixed", // Ensure fixed positioning
        }}
        position="bottom-center"
        autoClose={2000}
        limit={3}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        closeButton={false}
        transition={bounceFade}
      />
      <div id="footer" className="pt-28">
        <div className="pb-60">
          <h1 className="md:text-5xl text-4xl font-bold font-display text-white text-center py-5">
            Thanks <br></br> for hanging
          </h1>
          <h2 className="md:text-xl text-sm font-body font-bold text-white opacity-50 text-center py-5">
            If you liked what you saw and want to work together,<br></br> shoot
            me a message, and we'll figure something out.
          </h2>
          <div className="flex justify-center">
            <ul className="flex justify-between list-none text-center font-bold font-body text-white py-5 w-72">
              <Icon
                icon="ic:round-email"
                style={{ width: "25px", height: "25px" }}
                className={`icon cursor-pointer ${clicked ? "clicked" : ""}`}
                onClick={() => {
                  handleClick();
                  notify();
                  setClicked(true);
                  setTimeout(() => {
                    setClicked(false);
                  }, 300);
                }}
              />

              <a
                href="https://www.linkedin.com/in/alden-brown/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="ri:linkedin-fill"
                  style={{ width: "25px", height: "25px" }}
                  className="icon"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1xWwApoATRWt_vNbQ331tmdIq2qcdaY0T/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:resume"
                  style={{ width: "25px", height: "25px" }}
                  className="icon cursor-pointer"
                />
              </a>
            </ul>
          </div>
        </div>
        <hr className="border-t border-white mt-5 mb-2 hidden" />
        <p className="text-white text-xs font-body text-center pb-1 opacity-50">
          Coded + Animated + Designed by{" "}
          <span className="font-bold opacity-100">Alden Brown</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
