import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hatamei from "../assets/meichan.png";
import logo from "../assets/mini.png";
import AOS from "aos";
import "aos/dist/aos.css";
const ProfilComp = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="xl:p-20 p-5 bg-gradient-to-r from-cyan-200 via-cyan-100 to-cyan-50">
      <div
        className="flex justify-center pb-2 lg:pt-0 pt-5 "
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        <img src={logo} alt="logo" className="lg:w-96 w-60" />
      </div>
      <div className=" pt-2  md:mb-4 grid  md:grid-cols-2 md:gap-10 ">
        <img
          src={hatamei}
          alt="white"
          width={340}
          height={200}
          className="mt-10 2xl:ms-60 lg:ms-10 "
          data-aos="fade-down"
          data-aos-duration="1000"
        />

        <div className=" pt-14 ">
          <h1
            className="  lg:text-2xl text-center lg:mb-6 font-extrabold  py-1 px-1 text-fuchsia-500"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            YOUR TRUSTED E-COMMERCE
          </h1>
          <p
            className="lg:mb-6 text-fuchsia-500  lg:text-lg text-sm pt-4 pb-3 "
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            nisi venenatis, varius ligula vel, varius lacus. Mauris elementum
            ligula vitae tempus consectetur. Ut a ex urna. Nunc eu augue augue.
            Vivamus sed metus scelerisque, auctor magna et, malesuada sem. Nunc
            porta, nibh in eleifend semper, eros massa molestie est, et aliquet
            ex odio id velit. Sed ac diam nulla.t.
          </p>

          <Link to="/products">
            <button className="font-bold border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white   hover:shadow-fuchsia-600  rounded-md px-3 mt-2 lg:mt-0 mb-2 bg-white">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfilComp;
