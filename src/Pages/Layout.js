import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../index.css";
import { Menu } from "../assets";
import styles from "../style";
import logo from "../assets/img/overlap test 1.png";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

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
            <div onClick={() => setToggle((prev) => !prev)}>
              <Menu />
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                toggle ? "flex" : "opacity-0 scale-95"
              } p-6 backdrop-blur-md backdrop-brightness-[.7] absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
              <ul className="list-none flex flex-col justify-end">
                <li className="font-body font-semibold text-white cursor-pointer mb-4">
                  <HashLink
                    smooth
                    to="/#mitre"
                    onClick={() => setToggle(false)}
                  >
                    Work
                  </HashLink>
                </li>
                <li className="font-body font-semibold text-white cursor-pointer mb-4">
                  <Link to="/About" onClick={() => setToggle(false)}>
                    About
                  </Link>
                </li>
                <li className="font-body font-semibold text-white cursor-pointer">
                  <HashLink
                    smooth
                    to="/#footer"
                    onClick={() => setToggle(false)}
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>{" "}
        </nav>

        <Outlet />
      </>
    </body>
  );
};

export default Layout;
