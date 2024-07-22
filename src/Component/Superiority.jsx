import React from "react";
import { MdPayment, MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GrLike } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";

const Superiority = () => {
  return (
    <div>
      {/* <h1 className="lg:text-2xl text-lg lg:pt-10 pt-5  text-center font-bold text-fuchsia-500">
        Mengapa harus kami?
      </h1> */}

      <div className="lg:mt-10 mt-4 lg:pb-10 grid lg:grid-cols-5 text-center">
        <div className="border-b-2 border-fuchsia-500 mx-10 ">
          <div className="flex justify-center">
            <MdPayment className="lg:text-5xl text-3xl text-fuchsia-500" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3  bg-gradient-to-r from-cyan-200 rounded-sm via-cyan-100 to-cyan-50 text-fuchsia-500 font-bold">
            Secure Payment
          </button>
        </div>
        <div className="border-b-2 lg:pt-0 pt-4 border-fuchsia-500 lg:mx-10 mx-20 ">
          <div className="flex justify-center">
            <MdOutlineSupportAgent className="lg:text-5xl text-3xl text-fuchsia-500" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3  bg-gradient-to-r from-cyan-200 rounded-sm via-cyan-100 to-cyan-50 text-fuchsia-500 font-bold">
            24/7 Support
          </button>
        </div>
        <div className="border-b-2  lg:pt-0 pt-4 border-fuchsia-500 lg:mx-10 mx-10 ">
          <div className="flex justify-center">
            <TbTruckDelivery className="lg:text-5xl text-3xl text-fuchsia-500" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3  bg-gradient-to-r from-cyan-50 rounded-sm via-cyan-100 to-cyan-200 text-fuchsia-500 font-bold">
            Fast Delivery
          </button>
        </div>
        <div className="border-b-2 lg:pt-0 pt-4 border-fuchsia-500 lg:mx-10 mx-20 ">
          <div className="flex justify-center">
            <GrLike className="lg:text-5xl text-3xl text-fuchsia-500" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3   bg-gradient-to-r from-cyan-100 rounded-sm via-cyan-100 to-cyan-50 text-fuchsia-500 font-bold">
            Top Quality Products
          </button>
        </div>
        <div className="border-b-2 lg:pt-0 pt-4 border-fuchsia-500 mx-10 ">
          <div className="flex justify-center">
            <AiOutlineDollar className="lg:text-5xl text-3xl text-fuchsia-500" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3   bg-gradient-to-r from-cyan-100 rounded-sm via-cyan-100 to-cyan-50 text-fuchsia-500 font-bold">
            Affordable Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default Superiority;
