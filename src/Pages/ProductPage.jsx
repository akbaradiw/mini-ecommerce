import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { getProduct } from "../redux/features/productSlice";
import { GiShoppingCart } from "react-icons/gi";
import CartComp from "../Component/CartComp";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

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
    <div>
      <Navbar />

      {/* Filter Buttons */}
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
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6  px-6 xl:px-20 md:px-10 py-10 bg-white">
        {products
          .filter((item) =>
            item.category.toLowerCase().includes(thisfilter.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              className="transition border-2 border-cyan-300 transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
            >
              <img
                className="w-full  p-6 h-80  2xl:h-96 sm:h-48 md:h-80 lg:h-60 object-cover  rounded-t-lg"
                src={product.image}
                alt={product.name}
              />

              <div className="p-4 bg-white">
                <h3 className="text-gray-900 font-bold text-lg md:text-xl lg:text-2xl mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between  md:gap-4 items-center">
                  <span className="text-lg md:text-xl font-semibold text-green-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addProduct(product)}
                    className="bg-fuchsia-500 text-white px-2 py-1 md:px-1 md:py-2 rounded-lg text-sm md:text-base font-semibold hover:bg-white hover:text-fuchsia-500 border-2 border-fuchsia-500 transition"
                  >
                    Add to Cart
                  </button>
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
  );
};

export default ProductPage;
