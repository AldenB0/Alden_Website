import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import ClipboardJS from "clipboard";
import { toast } from "react-toastify";

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

  const notify = () =>
    toast("email added to clipboard", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div id="footer" className="pt-28">
      <div className="pb-60">
        <h1 className="text-5xl font-bold font-display text-white text-center py-5">
          Thanks <br></br> for hanging
        </h1>
        <h2 className="text-xl font-body font-bold text-white opacity-50 text-center py-5">
          If you liked what you saw and want to work together,<br></br> shoot me
          a message, and we'll figure something out.
        </h2>
        <div className="flex justify-center">
          <ul className="flex justify-between list-none text-center font-bold font-body text-white py-5 w-1/2">
            <Icon
              icon="ic:round-email"
              style={{ width: "25px", height: "25px" }}
              className="icon cursor-pointer"
              onClick={() => {
                handleClick();
                notify();
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
            <Icon
              icon="mdi:resume"
              style={{ width: "25px", height: "25px" }}
              className="icon cursor-pointer"
            />
          </ul>
        </div>
      </div>
      <hr className="border-t border-white mt-5 mb-2 hidden" />
      <p className="text-white text-xs font-body text-center pb-1 opacity-50">
        Coded + Animated + Designed by{" "}
        <span className="font-bold opacity-100">Alden Brown</span>
      </p>
    </div>
  );
}

export default Footer;
