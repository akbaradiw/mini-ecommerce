import React from "react";
import human from "../assets/people.png";
import { MdFavorite } from "react-icons/md";
import { GiHumanPyramid } from "react-icons/gi";

const People = () => {
  return (
    <div className="lg:flex  gap-10 my-20 w-full bg-gradient-to-r from-cyan-100 via-cyan-50 to-cyan-200 rounded-md shadow-md">
      <img
        src={human}
        alt="human"
        className="lg:w-80 px-20 lg:px-0 py-4  lg:ms-10 "
      />
      <div className="lg:mt-10 lg:me-10 ">
        <h1 className="lg:text-3xl text-xl text-center text-fuchsia-500 font-bold">
          10000+ Customer
        </h1>
        <h1 className="lg:text-3xl text-xl text-center text-fuchsia-500 font-bold">
          Di Seluruh Dunia
        </h1>
        <h1 className="lg:text-3xl text-xl text-center mb-5 text-fuchsia-500 font-bold">
          Sudah Memakai Layanan Kami
        </h1>
        <p className="text-fuchsia-500 lg:text-lg text-sm mx-3 lg:mx-0 font-semibold">
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
          <MdFavorite className="text-2xl text-fuchsia-500" />
          <MdFavorite className="text-2xl text-fuchsia-500" />
          <MdFavorite className="text-2xl text-fuchsia-500" />
        </div>
      </div>
    </div>
  );
};

export default People;
