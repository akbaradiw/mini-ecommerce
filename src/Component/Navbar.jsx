import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Navbar = ({ cartQuantity, handleOpen }) => {
  return (
    <div>
      <nav className="bg-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <p>test</p>
                <div
                  className="w-12 h-12 relative rounded-full bg-slate-200 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  {cartQuantity?.length ? (
                    <div className="absolute top-1 right-1 text-xs rounded-full bg-red-500 text-white px-1">
                      {cartQuantity.length}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
