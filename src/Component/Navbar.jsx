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
      <nav className=" bg-lime-50 pb-4 pt-4  shadow-md w-full fixed z-50 hidden lg:block   ">
        <div className="">
          <div className=" ml-10 flex justify-evenly px-20 ">
            <Link
              to="/"
              className="font-semibold hover:text-lime-700 hover:underline hover:decoration-wavy  text-lg "
            >
              Home
            </Link>
            <Link
              to="/products"
              className=" font-semibold hover:text-lime-700 hover:underline hover:decoration-wavy text-lg "
            >
              Products
            </Link>
            <h1 className="font-extrabold font-system-ui text-green-800 italic text-2xl underline decoration-double">
              Mini E-Commerce
            </h1>
            <Link
              to="/login"
              className=" font-semibold hover:text-lime-700 hover:underline hover:decoration-wavy  text-lg "
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="  font-semibold hover:text-lime-700 hover:underline hover:decoration-wavy  text-lg "
            >
              Sign Up
            </Link>
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
                to={"/login"}
                className="flex items-center flex-col justify-center md:text-2xl hover:text-cyan-200"
              >
                <RiLoginBoxLine className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/signup"}
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
