import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { getProduct } from "../redux/features/productSlice";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
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
  const [openModal, setOpenModal] = useState(true);

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

      <div className="lg:flex grid grid-cols-1 md:grid-cols-2 gap-3 lg:px-0 md:px-40 px-20 lg:justify-end pt-20 lg:pe-10 lg:gap-4">
        <button
          className="cursor-pointer  border border-none text-fuchsia-500 bg-cyan-200 font-semibold  py-1 px-3  hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
          onClick={() => setThisFilter("")}
          s
        >
          All
        </button>
        <button
          className="cursor-pointer  border border-none text-fuchsia-500 bg-cyan-200 font-semibold  py-1 px-3  hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
          onClick={() => setThisFilter("electronics")}
          s
        >
          Electronics
        </button>
        <button
          className="cursor-pointer  border border-none text-fuchsia-500 bg-cyan-200 font-semibold  py-1 px-3  hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
          onClick={() => setThisFilter("Jewelery")}
          s
        >
          Jewelery
        </button>
        <button
          className="cursor-pointer  border border-none text-fuchsia-500 bg-cyan-200 font-semibold  py-1 px-3  hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
          onClick={() => setThisFilter("men's clothing")}
          s
        >
          Men's clothes
        </button>
        <button
          className="cursor-pointer  border border-none text-fuchsia-500 bg-cyan-200 font-semibold  py-1 px-3  hover:bg-fuchsia-500 hover:text-cyan-200 shadow-sm rounded-lg"
          onClick={() => setThisFilter("women's clothing")}
          s
        >
          Women's clothes
        </button>
      </div>

      <div
        className="grid  gap-6 lg:grid-cols-4 md:grid-cols-2 md:pt-10 lg:pt-12 pt-5 pb-14 lg:px-80 "
        id="grid"
      >
        {products
          .filter((item) =>
            item.category.toLowerCase().includes(thisfilter.toLowerCase())
          )
          .map((item) => (
            <div data-aos="flip-down" data-aos-duration="1000">
              <div
                className="p-4 mx-16 lg:mx-0 md:mx-8 border-double border-4 hover:cursor-pointer hover:bg-cyan-50 border-fuchsia-500 rounded-lg "
                key={item.id}
                id="card"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                <div>
                  <button
                    className="fixed ps-40 md:ps-60  lg:ps-60"
                    onClick={() => addProduct(item)}
                  >
                    <GiShoppingCart className="text-3xl text-fuchsia-500 hover:-translate-y-2 hover:cursor-pointer hover:scale-90 transition ease-in-out delay-150" />
                  </button>
                  <img
                    className=" w-20 md:w-40 lg:mb-6"
                    src={item.image}
                    alt="store"
                    id="image"
                  />
                </div>
              </div>
              <div className="border-4 mx-16 md:mx-8 lg:py-0 lg:mx-0 shadow-md border-double  bg-cyan-200  hover:cursor-pointer hover:bg-cyan-300  border-fuchsia-500 mt-3 rounded-lg">
                <p className="lg:text-lg md:text-base text-sm ps-4 text-fuchsia-500  font-mono font-bold pb-3 pt-4 ">
                  {item.title}
                </p>
                <p className="pt-3 pe-4 pb-2 text-fuchsia-500 text-end font-mono font-bold ">
                  {" "}
                  $ {item.price}
                </p>
              </div>
            </div>
          ))}
      </div>
      <CartComp
        product={cart}
        handleQuantity={handleQuantity}
        deleteProduct={deleteProduct}
      />
      {/* <Button
        className="fixed mt-20 right-10"
        onClick={() => setOpenModal(true)}
      >
        Toggle modal
      </Button> */}
    </div>
  );
};

export default ProductPage;
