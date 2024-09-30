import React, { useEffect } from "react";
import { MdPayment, MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GrLike } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
const Superiority = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="lg:mt-10 mt-4  lg:pb-10 grid lg:grid-cols-5 text-center"
      >
        <div className="border-b-2 border-green-800 mx-10 ">
          <div className="flex justify-center">
            <MdPayment className="lg:text-5xl text-3xl text-green-800" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3  text-green-800 font-bold">
            Secure Payment
          </button>
        </div>
        <div className="border-b-2 lg:pt-0 pt-4 border-green-800 lg:mx-10 mx-20 ">
          <div className="flex justify-center">
            <MdOutlineSupportAgent className="lg:text-5xl text-3xl text-green-800" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3  text-green-800 font-bold">
            24/7 Support
          </button>
        </div>
        <div className="border-b-2  lg:pt-0 pt-4 border-green-800 lg:mx-10 mx-10 ">
          <div className="flex justify-center">
            <TbTruckDelivery className="lg:text-5xl text-3xl text-green-800" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3 text-green-800 font-bold">
            Fast Delivery
          </button>
        </div>
        <div className="border-b-2 lg:pt-0 pt-4 border-green-800 lg:mx-10 mx-20 ">
          <div className="flex justify-center">
            <GrLike className="lg:text-5xl text-3xl text-green-800" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3   text-green-800 font-bold">
            Top Quality Products
          </button>
        </div>
        <div className="border-b-2 lg:pt-0 pt-4 border-green-800 mx-10 ">
          <div className="flex justify-center">
            <AiOutlineDollar className="lg:text-5xl text-3xl text-green-800" />
          </div>
          <button className="lg:text-2xl text-lg px-2 mt-3    text-green-800 font-bold">
            Affordable Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default Superiority;
