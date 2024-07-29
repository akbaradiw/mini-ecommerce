import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiHomeHeartLine, RiLoginBoxLine } from "react-icons/ri";
import { BsFlower1 } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <div>
      <nav className=" bg-white shadow-sm w-full fixed z-50 hidden lg:block   ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div>
              <div className=" ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white font-semibold  border-2 border-white bg-fuchsia-500 hover:bg-white hover:text-fuchsia-500 hover:border-fuchsia-500 px-3 py-2 rounded-md text-sm "
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="hover:text-white font-semibold border-2 hover:border-white hover:bg-fuchsia-500 bg-white text-fuchsia-500  border-fuchsia-500 px-3 py-2 rounded-md text-sm "
                >
                  Products
                </Link>
                <Link
                  to="/login"
                  className="text-white font-semibold  border-2 border-white bg-fuchsia-500 hover:bg-white hover:text-fuchsia-500 hover:border-fuchsia-500 px-3 py-2 rounded-md text-sm "
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:text-white font-semibold border-2 hover:border-white hover:bg-fuchsia-500 bg-white text-fuchsia-500  border-fuchsia-500 px-3 py-2 rounded-md text-sm "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <button
        onClick={() => toggle()}
        className="text-fuchsia-500 z-50 focus:outline-none fixed lg:hidden  top-4 right-4 transition-opacity duration-200"
        type="button"
      >
        <BsFlower1 className="md:w-10 md:h-10 w-6 h-7" />
      </button>
      <nav className=" px-4 lg:hidden">
        <div
          className={`fixed z-50 bottom-0 right-0 left-0 w-full  bg-fuchsia-500 p-4 text-white transition-transform duration-400   ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex justify-between md:justify-around">
            <li>
              <Link
                to={"/"}
                className="flex items-center flex-col justify-center md:text-2xl hover:text-cyan-200 "
              >
                <RiHomeHeartLine className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                className="flex items-center flex-col justify-center md:text-2xl  hover:text-cyan-200"
              >
                <MdOutlineProductionQuantityLimits className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/login"
                className="flex items-center flex-col justify-center md:text-2xl hover:text-cyan-200"
              >
                <RiLoginBoxLine className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="flex items-center flex-col justify-center md:text-2xl  hover:hover:text-cyan-200"
              >
                <FaCashRegister className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
