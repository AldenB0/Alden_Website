import { useState, useRef, useEffect } from "react";
import "../index.css";
import styles from "../style";
import { RiveNav } from "../assets";

const Test = () => {
  const [toggle, setToggle] = useState(false);
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

  const handleMenuItemClick = () => {
    setToggle(false);
  };

  return (
    <div className="bg-Background max-w-[1920px] min-h-screen p-4">
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
          toggle ? "flex" : "opacity-0 scale-95 pointer-events-none"
        } p-6 bg-gray-800 max-w-[200px] mx-auto rounded-xl`}
      >
        <ul className="list-none flex flex-col w-full">
          <li className="text-white cursor-pointer mb-4 p-2 hover:bg-gray-700 rounded">
            <button onClick={handleMenuItemClick}>Menu Item 1</button>
          </li>
          <li className="text-white cursor-pointer mb-4 p-2 hover:bg-gray-700 rounded">
            <button onClick={handleMenuItemClick}>Menu Item 2</button>
          </li>
          <li className="text-white cursor-pointer p-2 hover:bg-gray-700 rounded">
            <button onClick={handleMenuItemClick}>Menu Item 3</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Test;
