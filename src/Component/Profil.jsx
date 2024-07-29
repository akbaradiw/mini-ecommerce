import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hatamei from "../assets/meichan.png";
import logo from "../assets/mini.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Profil = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:pt-20 lg:pb-6 pb-3 bg-gradient-to-r from-cyan-200 via-cyan-100 to-cyan-50 ">
      <div
        className="flex justify-center pb-2 lg:pt-0 pt-5 "
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        <img src={logo} alt="logo" className="lg:w-96 w-60" />
      </div>
      <div className="lg:flex grid lg:px-96 px-10">
        <img
          data-aos="flip-up"
          data-aos-duration="2000"
          src={hatamei}
          alt="photo"
          className="lg:w-80 lg:p-0 px-5 pb-4"
        />
        <div
          data-aos="flip-down"
          data-aos-duration="2000"
          className="lg:pt-4 lg:ps-20"
        >
          <h1 className="lg:text-3xl text-xl font-bold pb-4 text-fuchsia-500">
            YOUR TRUSTED E-COMMERCE
          </h1>
          <p className="text-fuchsia-500 pb-1 lg:text-xl text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            nisi venenatis, varius ligula vel, varius lacus. Mauris elementum
            ligula vitae tempus consectetur. Ut a ex urna. Nunc eu augue augue.
            Vivamus sed metus scelerisque, auctor magna et, malesuada sem. Nunc
            porta, nibh in eleifend semper, eros massa molestie est, et aliquet
            ex odio id velit. Sed ac diam nulla.t.
          </p>
          <div>
            <Link to="/products">
              <button className="font-bold border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white   hover:shadow-fuchsia-600  rounded-md px-3 mt-5 mb-2 bg-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Profil;
