import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ cartQuantity, handleOpen }) => {
  return (
    <div>
      <nav className=" bg-white shadow-sm w-full fixed z-50 hidden lg:block  ">
        <div className="flex items-center justify-between h-16">
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
    </div>
  );
};

export default Navbar;
