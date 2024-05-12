import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { getProduct } from "../redux/features/productSlice";
import Cart from "../Component/Cart";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import "./style.css";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [thisfilter, setThisFilter] = useState("");

  useEffect(() => {
    dispatch(getProduct());
  }, [cart]);

  const addProduct = (data) => {
    const newProduct = {
      ...data,
      qty: 1,
    };
    setCart([...cart, newProduct]);
    alert("Product added to cart");
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
      <Navbar />
      <div className="select">
        <select
          className="fixed right-14 top-6 font-mono font-bold border-2 rounded-full px-3 me-16 hover:-translate-x-3 duration-100     border-black"
          onChange={(e) => setThisFilter(e.target.value)}
          id="category"
        >
          <option value={""}>Choose Category</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"jewelery"}>Jewelery</option>
          <option value={"men's clothing"}>Men's clothing</option>
          <option value={"women's clothing"}>Women's clothing</option>
        </select>
      </div>
      <div className="fixed left-3 bottom-10 hover:-translate-y-3 duration-300">
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
      <div className="grid  gap-6 grid-cols-3 pt-24 pb-14 px-20 " id="grid">
        {products
          .filter((item) =>
            item.category.toLowerCase().includes(thisfilter.toLowerCase())
          )
          .map((item) => (
            <motion.div
              initial={{ opacity: 0, x: 100, y: -10 }}
              animate={{ opacity: 1, x: 2, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div
                className="border-2  border-neutral-400 rounded-lg py-6 px-5 m-1 shadow-lg shadow-neutral-400 hover:-translate-y-3 duration-300"
                key={item.id}
                id="card"
              >
                <div
                  className="divide-y-2 divide-dashed divide-neutral-400"
                  id="item"
                >
                  <div className="flex justify-center ">
                    <img
                      className=" h-40 mb-6  "
                      src={item.image}
                      alt="store"
                      id="image"
                    />
                  </div>

                  <p className="text-sm font-mono font-bold pb-3 pt-4 ">
                    {item.title}
                  </p>
                  <p className="pt-3 pb-2 font-mono font-bold ">
                    {" "}
                    $ {item.price}
                  </p>
                </div>
                <button
                  onClick={() => addProduct(item)}
                  className="font-mono font-bold border-solid border-2 rounded-full px-2 mt-3 bg-gradient-to-r from-zinc-300 to-gray-400 hover:shadow-lg hover:shadow-neutral-400   border-black "
                >
                  Add to cart
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Home;
