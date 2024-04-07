import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { getProduct } from "../redux/features/productSlice";
import Cart from "../Component/Cart";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./style.css";


const Home = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

const handleOpen = () => {
  setOpen(!open);
}

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const addProduct = (data) => {
    const newProduct = {
      ...data,
      qty: 1,
    };
    setCart([...cart, newProduct]);
    console.log(data);
  };

  const deleteProduct = (id) => {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        oldState.splice(productIndex, 1);
      }

      return [...oldState];
    });
  };

  const handleQuantity = (id, qty) => {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        oldState[productIndex].qty = qty;
      }
      return [...oldState];
    });
  };

  return (
    <div>
      <Navbar  />
      <div className="fixed left-3 bottom-10">
        <button onClick={() => setOpen(true)}>
          <ShoppingBagIcon className="size-10 fixed" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
      </div>

      <Cart  
        product={cart}
        onClose={() => setOpen(false)}
        handleQuantity={handleQuantity}
        deleteProduct={deleteProduct}
        visibility={open}

         />
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
            <button onClick={() => addProduct(item)} className="border-solid border-2 rounded-full px-2 mt-3 bg-cyan-400  border-cyan-400 text-white">Add to cart</button>
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default Home;
