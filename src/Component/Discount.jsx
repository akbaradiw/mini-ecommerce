import React from "react";
import human from "../assets/caricaricari.jpg";

const Discount = () => {
  return (
    <div className="grid grid-cols-2 py-4">
      <div className="bg-green-800 text-white text-center">
        <p>Get Discount</p>
      </div>
      <div>
        <img src={human} alt="woman" width="100%" />
      </div>
    </div>
  );
};

export default Discount;
