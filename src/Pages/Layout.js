import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {


  return (
    <body className="bg-Background">
    <>
      <nav className="w-full flex py-5 px-16 justify-between items-center navbar text-lg">
        <div className="text-white font-display text-3xl font-bold">
          Alden Brown.
        </div>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          <li className='font-body font-medium text-white cursor-pointer mr-10'>
            <Link to="/">Home</Link>
          </li>
          <li className='font-body font-medium text-white cursor-pointer mr-10'>
            <Link to="/About">About</Link>
          </li>
          <li className='font-body font-medium text-white cursor-pointer'>
            Contact
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end tiems-center text-white font-bold">
          X
        </div>

      </nav> 

      <Outlet />
    </>
    </body>
  )
};

export default Layout;
