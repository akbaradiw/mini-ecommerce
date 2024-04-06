import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { getProduct } from "../redux/features/productSlice";
import { addToCart } from "../redux/features/handleSlice";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [accordion, setAccordion] = useState(null);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
  }

  return (
    <div>
      <Navbar />
      <div className=" grid  gap-6 grid-cols-3  pt-14 pb-14 px-20">
        {products.map((item) => (
          <div
            className="border-2  border-cyan-400 rounded-lg py-5 px-5 m-1 "
            key={item.id}
          >
            <div className="divide-y divide-cyan-400">
            <div className="flex justify-center ">
              <img className=" h-40 mb-6  " src={item.image} alt="store" />
            </div>
            <p className="text-sm font-bold pb-3 pt-4 ">{item.title}</p>
            <p className="pt-3 pb-2 "> $ {item.price}</p>
            </div>
            <button onClick={() => handleAddToCart(item)} className="border-solid border-2 rounded-full px-2 mt-3 bg-cyan-400  border-cyan-400 text-white">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
