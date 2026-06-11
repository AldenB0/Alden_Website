import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RiveNav } from "../assets";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const closeTimer = useRef(null);

  // Close the menu when clicking outside of it
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

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  const handleMenuItemClick = (item) => {
    setClickedItem(item);

    // Reset after the item feedback animation completes
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setClickedItem(null);
      setToggle(false);
    }, 300);
  };

  const itemClass = (item) =>
    `transition-all duration-300 ${
      clickedItem === item ? "opacity-50 scale-95" : ""
    }`;

  return (
    <div className="sm:hidden flex overflow-hidden">
      <button
        type="button"
        ref={buttonRef}
        aria-label="Menu"
        aria-expanded={toggle}
        className="w-8 h-8 cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
        onTouchStart={(e) => {
          // The Rive canvas suppresses synthetic click events on touch
          // devices, so toggle on touchstart and prevent a duplicate click.
          e.preventDefault();
          setToggle((prev) => !prev);
        }}
      >
        <RiveNav isOpen={toggle} />
      </button>
      {/* Mobile menu with bounce transition */}
      <div
        ref={menuRef}
        className={`transform transition-all duration-300 ${
          toggle
            ? "flex opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } backdrop-blur-md backdrop-brightness-[.7] absolute top-16 right-0 left-0 mx-4 my-2 rounded-xl`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <ul className="list-none flex flex-col w-full py-8 space-y-6 items-center ml-0">
          <li className="font-body font-semibold text-white text-xl cursor-pointer">
            <HashLink
              smooth
              to="/#work"
              className={itemClass("work")}
              onClick={() => handleMenuItemClick("work")}
            >
              Work
            </HashLink>
          </li>
          <li className="font-body font-semibold text-white text-xl cursor-pointer">
            <Link
              to="/About"
              className={itemClass("about")}
              onClick={() => handleMenuItemClick("about")}
            >
              About
            </Link>
          </li>
          <li className="font-body font-semibold text-white text-xl cursor-pointer">
            <HashLink
              smooth
              to="/#footer"
              className={itemClass("contact")}
              onClick={() => handleMenuItemClick("contact")}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
