import React from "react";
import logo from "../assets/mini3.png";
import { Link } from "react-router-dom";

const BannerRight = () => {
  return (
    <div className="bg-green-800 px-20  py-40">
      <h1 className="lg:text-3xl font-extrabold pb-6 font-roboto text-white text-center">
        Belanja Lebih Mudah, Hidup Lebih Praktis
      </h1>

      <p className="text-white px-4 text-sm sm:text-base md:text-lg lg:text-lg">
        lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque id nisi venenatis, varius ligula vel, varius lacus. Mauris
        elementum ligula vitae tempus consectetur. Ut a ex urna. Nunc eu augue
        augue. Vivamus sed metus scelerisque, auctor magna et, malesuada sem.
        Nunc porta, nibh in eleifend semper, eros massa molestie est, et aliquet
        ex odio id velit. Sed ac diam nulla.
      </p>

      <div className="pt-4 text-end pe-6">
        <Link
          to="/products"
          className="text-white font-semibold border-8 border-double border-white bg-green-800 hover:bg-white shadow-md hover:text-green-800 px-3 py-2 rounded-md text-sm sm:text-base md:text-lg"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default BannerRight;
