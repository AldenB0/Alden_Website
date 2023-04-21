import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import "../index.css";
import { Menu } from "../assets";
import styles from "../style";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  // You should remove the nav_anim from the ul once you reroute the contact li
  return (
    <body className="bg-Background">
      <>
        <nav
          className={`flex ${styles.paddingX} py-5 justify-between items-center navbar text-lg sticky top-0 w-full z-50 bg-Background `}
        >
          <div className={`text-white font-display text-3xl font-bold`}>
            <Link to="/">Alden Brown.</Link>
          </div>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
            <li className="font-body font-semibold text-white cursor-pointer mr-10 top-2 nav_anim">
              <HashLink smooth to="//#mitre">
                Work
              </HashLink>
            </li>
            <li className="font-body font-semibold text-white cursor-pointer mr-10 top-2 nav_anim">
              <Link to="/About">About</Link>
            </li>
            <li className="font-body font-semibold text-white cursor-pointer top-2 nav_anim">
              <HashLink smooth to="//#footer">
                Contact
              </HashLink>
            </li>
          </ul>
          {/* mobile navbar */}
          <div className="sm:hidden flex">
            <div onClick={() => setToggle((prev) => !prev)}>
              <Menu />
            </div>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6  bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                <li className="font-body font-semibold text-white cursor-pointer mb-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="font-body font-semibold text-white cursor-pointer mb-4">
                  <Link to="/About">About</Link>
                </li>
                <li className="font-body font-semibold text-white cursor-pointer">
                  <Scroll
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Contact
                  </Scroll>
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
