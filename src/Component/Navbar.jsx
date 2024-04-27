import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Navbar = ({ cartQuantity, handleOpen }) => {
  return (
    <div className="w-full fixed ">
      <nav className="bg-gradient-to-r from-neutral-300 via-zinc-500  to-stone-300">
        <div className="flex items-center justify-between h-16"></div>
      </nav>
    </div>
  );
};

export default Navbar;
