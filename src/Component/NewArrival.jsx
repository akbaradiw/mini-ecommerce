import React from "react";
import { NewProduct } from "../Data/NewProduct";
import { MdFavorite } from "react-icons/md";
import meichan2 from "../assets/meichan2.png";

const NewArrival = () => {
  return (
    <div className="lg:mt-20 mt-16 mb-4 lg:ms-20 ms-5 me-4">
      <div className="flex justify-center lg:justify-start gap-4 lg:ms-20">
        <MdFavorite className="lg:text-3xl text-xl text-cyan-200" />
        <MdFavorite className="lg:text-3xl text-xl text-cyan-200" />
        <h1 className="lg:text-3xl text-2xl lg:pb-6 pb-4 font-bold text-fuchsia-500">
          NEW ARRIVALS
        </h1>
        <MdFavorite className="lg:text-3xl text-xl text-cyan-200" />
        <MdFavorite className="lg:text-3xl text-xl text-cyan-200" />
      </div>

      <div className="lg:flex lg:justify-around">
        <img
          src={meichan2}
          alt="photo"
          className="w-96 hidden lg:block bg-gradient-to-r from-cyan-200 via-cyan-100 to-cyan-50 shadow-md rounded-full"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {NewProduct.map((product) => (
            <div key={product.id}>
              <div className="flex justify-center">
                <img
                  className="w-60 shadow-md  lg:p-2 border-double border-4 border-fuchsia-500 rounded-lg hover:-translate-y-2 hover:cursor-pointer hover:scale-90 transition ease-in-out delay-150"
                  src={product.image}
                />
              </div>
              <div className="border-4 mx-16 py-2 lg:py-0 lg:mx-0 shadow-md border-double  bg-cyan-200  hover:cursor-pointer hover:bg-cyan-300  border-fuchsia-500 mt-3 rounded-lg text-center">
                <h1 className="lg:py-2 text-fuchsia-500 font-semibold ">
                  {product.name}
                </h1>
                <p className="text-fuchsia-500 mb-1 font-semibold">
                  $ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
