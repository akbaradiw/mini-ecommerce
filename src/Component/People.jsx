import React, { useEffect } from "react";
import human from "../assets/caricaricari.jpg";
import { MdFavorite } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const People = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:flex  gap-10 my-20 w-full bg-green-800 rounded-md shadow-md">
      {/* <img
        src={human}
        alt="human"
        className="lg:w-80 lg:h-full  lg:px-0 py-4  lg:ms-10 "
        data-aos="fade-down"
        data-duration="1000"
      /> */}
      <div
        className="lg:mt-10 lg:me-10"
        data-aos="fade-up"
        data-duration="1000"
      >
        <h1 className="lg:text-3xl text-xl text-center text-white font-bold">
          10000+ Customer
        </h1>
        <h1 className="lg:text-3xl text-xl text-center text-white font-bold">
          Di Seluruh Dunia
        </h1>
        <h1 className="lg:text-3xl text-xl text-center mb-5 text-white font-bold">
          Sudah Memakai Layanan Kami
        </h1>
        <p className="text-white lg:text-lg text-sm mx-3 lg:mx-0 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          nisi venenatis, varius ligula vel, varius lacus. Mauris elementum
          ligula vitae tempus consectetur. Ut a ex urna. Nunc eu augue augue.
          Vivamus sed metus scelerisque, auctor magna et, malesuada sem. Nunc
          porta, nibh in eleifend semper, eros massa molestie est, et aliquet ex
          odio id velit. Sed ac diam nulla.t. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque id nisi venenatis, varius ligula
          vel, varius lacus. Mauris elementum ligula vitae tempus consectetur.
          Ut a ex urna. Nunc eu augue augue. Vivamus sed metus scelerisque,
          auctor magna et, malesuada sem. Nunc porta, nibh in eleifend semper,
          eros massa molestie est, et aliquet ex odio id velit. Sed ac diam
          nulla.t.
        </p>
        <div className="flex lg:justify-end justify-center lg:pt-2 pt-4 pb-4">
          <MdFavorite className="text-2xl text-white" />
          <MdFavorite className="text-2xl text-white" />
          <MdFavorite className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default People;
