import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { getProduct } from "../redux/features/productSlice";
import { GiShoppingCart } from "react-icons/gi";
import CartComp from "../Component/CartComp";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { IoIosStar } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductPage = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [thisfilter, setThisFilter] = useState("");

  useEffect(() => {
    dispatch(getProduct());
  }, [cart]);

  useEffect(() => {
    AOS.init();
  }, []);

  const addProduct = (data) => {
    const newProduct = {
      ...data,
      qty: 1,
    };
    setCart([...cart, newProduct]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Produk ditambahkan ke keranjang",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  const deleteProduct = (id) => {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        oldState.splice(productIndex, 1);
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Produk dihapus dari keranjang",
        showConfirmButton: false,
        timer: 500,
      });

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
    <div className="bg-lime-50">
      <Navbar />
      <div className="grid grid-cols-2">
        {" "}
        <div className="lg:flex grid grid-cols-1 md:grid-cols-2 gap-3 lg:px-0 md:px-40 px-6 lg:justify-end pt-20 lg:pe-10 lg:gap-4">
          <button
            className="cursor-pointer border border-none text-fuchsia-500 bg-cyan-200 font-semibold py-1 px-3 hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
            onClick={() => setThisFilter("")}
          >
            All
          </button>
          <button
            className="cursor-pointer border border-none text-fuchsia-500 bg-cyan-200 font-semibold py-1 px-3 hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
            onClick={() => setThisFilter("electronics")}
          >
            Electronics
          </button>
          <button
            className="cursor-pointer border border-none text-fuchsia-500 bg-cyan-200 font-semibold py-1 px-3 hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
            onClick={() => setThisFilter("Jewelery")}
          >
            Jewelery
          </button>
          <button
            className="cursor-pointer border border-none text-fuchsia-500 bg-cyan-200 font-semibold py-1 px-3 hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
            onClick={() => setThisFilter("men's clothing")}
          >
            Men's clothes
          </button>
          <button
            className="cursor-pointer border border-none text-fuchsia-500 bg-cyan-200 font-semibold py-1 px-3 hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
            onClick={() => setThisFilter("women's clothing")}
          >
            Women's clothes
          </button>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6  px-6 xl:px-20 md:px-10 py-10 ">
          {products
            .filter((item) =>
              item.category.toLowerCase().includes(thisfilter.toLowerCase())
            )
            .map((product) => (
              <div
                key={product.id}
                className="transitio bg-lime-100 shadow-md transform hover:scale-105  rounded-lg overflow-hidden"
              >
                <img
                  className="w-full rounded-md p-6 h-80  2xl:h-96 sm:h-48 md:h-80 lg:h-60 object-cover  "
                  src={product.image}
                  alt={product.name}
                />

                <div className=" mx-16 py-2 lg:py-0 lg:mx-0 ">
                  <h1 className="lg:py-2 text-center text-green-800 font-bold ">
                    {product.title}
                  </h1>
                  <div className="flex justify-evenly">
                    <p className="text-green-800 text-center mb-1 font-semibold">
                      $ {product.price}
                    </p>
                    <div className="flex items-center  ">
                      <IoIosStar className="text-lg text-yellow-400" />
                      <IoIosStar className="text-lg text-yellow-400" />
                      <IoIosStar className="text-lg text-yellow-400" />
                      <IoIosStar className="text-lg text-yellow-400" />
                      <p className="text-black text-lg ps-4">
                        {product.rating.rate}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end p-2">
                    <MdOutlineShoppingBag
                      className="text-2xl cursor-pointer text-green-800"
                      onClick={() => addProduct(product)}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Cart Component */}
        <CartComp
          product={cart}
          handleQuantity={handleQuantity}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};

export default ProductPage;
