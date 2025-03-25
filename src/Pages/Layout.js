import { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../index.css";
import { RiveNav } from "../assets";
import styles from "../style";
import logo from "../assets/img/overlap test 1.png";

const Layout = () => {
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
    <body id="home" className="bg-Background max-w-[1920px] mx-auto">
      <>
        <nav
          className={`flex ${styles.paddingX} py-5 justify-between items-center navbar text-lg sticky top-0 w-full z-50 max-h-[5.4rem] bg-Background `}
        >
          <div className="flex items-center text-white font-display text-3xl font-bold">
            <HashLink smooth to="/#home" className="flex items-center">
              <img
                src={logo}
                alt="mCODE Coverage Checker"
                className="w-10 h-auto hidden"
              />
              <h1 className="mr-2">Alden Brown.</h1>
            </HashLink>
          </div>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
            <li className="font-body font-semibold text-white cursor-pointer mr-10 top-2 nav_anim">
              <HashLink smooth to="/#mitre">
                Work
              </HashLink>
            </li>
            <li className="font-body font-semibold text-white cursor-pointer mr-10 top-2 nav_anim">
              <HashLink to="/About">About</HashLink>
            </li>
            <li className="font-body font-semibold text-white cursor-pointer top-2 nav_anim">
              <HashLink smooth to="/#footer">
                Contact
              </HashLink>
            </li>
          </ul>

          {/* mobile navbar */}
          <div className="sm:hidden flex overflow-hidden">
            <div
              ref={buttonRef}
              className="w-8 h-8 cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
              onTouchStart={(e) => {
                e.preventDefault(); // Prevent default touch behavior
                setToggle((prev) => !prev);
              }}
            >
              <RiveNav isOpen={toggle} />
            </div>
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
                    to="/#mitre"
                    className={`transition-all duration-300 ${
                      clickedItem === "work" ? "opacity-50 scale-95" : ""
                    }`}
                    onClick={() => handleMenuItemClick("work")}
                  >
                    Work
                  </HashLink>
                </li>
                <li className="font-body font-semibold text-white text-xl cursor-pointer">
                  <Link
                    to="/About"
                    className={`transition-all duration-300 ${
                      clickedItem === "about" ? "opacity-50 scale-95" : ""
                    }`}
                    onClick={() => handleMenuItemClick("about")}
                  >
                    About
                  </Link>
                </li>
                <li className="font-body font-semibold text-white text-xl cursor-pointer">
                  <HashLink
                    smooth
                    to="/#footer"
                    className={`transition-all duration-300 ${
                      clickedItem === "contact" ? "opacity-50 scale-95" : ""
                    }`}
                    onClick={() => handleMenuItemClick("contact")}
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />
      </>
    </body>
  );
};

export default Layout;
