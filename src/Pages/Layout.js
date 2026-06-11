import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../index.css";
import MobileMenu from "../components/MobileMenu";
import styles from "../style";

const Layout = () => {
  return (
    <div id="home" className="bg-Background max-w-[1920px] mx-auto">
      <nav
        className={`flex ${styles.paddingX} py-5 justify-between items-center navbar text-lg sticky top-0 w-full z-50 max-h-[5.4rem] bg-Background `}
      >
        <div className="flex items-center text-white font-display text-3xl font-bold">
          <HashLink smooth to="/#home" className="flex items-center">
            <h1 className="mr-2">Alden Brown.</h1>
          </HashLink>
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
          <li className="font-body font-semibold text-white cursor-pointer mr-10 top-2 nav_anim">
            <HashLink smooth to="/#work">
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

        <MobileMenu />
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
