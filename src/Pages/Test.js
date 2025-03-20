import { useState, useRef, useEffect } from "react";
import "../index.css";
import styles from "../style";
import { RiveNav } from "../assets";

const Test = () => {
  const [toggle, setToggle] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggle &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  const handleMenuItemClick = (item) => {
    setClickedItem(item);

    // Reset after animation completes
    setTimeout(() => {
      setClickedItem(null);
      setToggle(false);
    }, 300);
  };

  return (
    <div className="bg-Background max-w-[1920px] min-h-screen p-16">
      <div className="flex flex-col items-center mb-8">
        <div className="text-white mb-2">
          Menu State: {toggle ? "Open" : "Closed"}
        </div>

        <div
          ref={buttonRef}
          className="w-10 h-10 mb-2 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <RiveNav isOpen={toggle} />
        </div>
      </div>

      {/* Test menu */}
      <div
        ref={menuRef}
        className={`transition-all duration-300 ease-in-out ${
          toggle ? "flex fade-in" : "opacity-0 pointer-events-none fade-in-rev"
        } backdrop-blur-md backdrop-brightness-[.7] rounded-xl w-full`}
      >
        <ul className="list-none flex flex-col w-full py-8 space-y-6 items-center ml-0">
          <li className="font-body font-semibold text-white text-xl cursor-pointer">
            <button
              className={`transition-all duration-300 ${
                clickedItem === "work" ? "opacity-50 scale-95" : ""
              }`}
              onClick={() => handleMenuItemClick("work")}
            >
              Work
            </button>
          </li>
          <li className="font-body font-semibold text-white text-xl cursor-pointer">
            <button
              className={`transition-all duration-300 ${
                clickedItem === "about" ? "opacity-50 scale-95" : ""
              }`}
              onClick={() => handleMenuItemClick("about")}
            >
              About
            </button>
          </li>
          <li className="font-body font-semibold text-white text-xl cursor-pointer">
            <button
              className={`transition-all duration-300 ${
                clickedItem === "contact" ? "opacity-50 scale-95" : ""
              }`}
              onClick={() => handleMenuItemClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Test;
