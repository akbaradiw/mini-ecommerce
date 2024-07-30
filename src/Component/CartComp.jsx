import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BsCart3 } from "react-icons/bs";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { MdFavorite } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const CartComp = ({ product, deleteProduct, handleQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const notify = () => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Pembelian gagal!  Silahkan login terlebih dahulu",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div className="flex justify-start ps-4 lg:justify-end lg:pe-5">
        <button
          onClick={toggleSidebar}
          className=" text-fuchsia-500  fixed top-4  z-50 hover:text-cyan-300"
        >
          <BsCart3 className="text-3xl" />
          {/* {isOpen ? "x" : ""} */}
          {/* {cart.length > 0 && <span className="cart-count">{cart.length}</span>} */}
        </button>
      </div>
      <div
        id="sidebar"
        className={`fixed inset-0  bg-white pb-20  transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" lg:px-4 px-10 pt-20 ">
          <div className="flex justify-center lg:pb-0 pb-10 gap-5">
            <MdFavorite className="text-3xl text-fuchsia-500" />
            <h1 className="text-3xl text-fuchsia-500  lg:pb-20">Cart</h1>
            <MdFavorite className="text-3xl text-fuchsia-500" />
          </div>

          <div className="font-mono grid lg:grid-cols-2 md:grid-cols-2 ">
            {product.map((item) => (
              <div
                className="lg:pb-10 pb-2 border-2 mx-4 shadow-md border-cyan-300 rounded-xl pt-4 mb-10 lg:mx-20"
                key={item.id}
              >
                <div className="divide-y-2 divide-cyan-300  hover:translate-y-2 duration-200">
                  <div className="flex justify-center">
                    <img className="w-40 " src={item.image} />
                  </div>
                  <h3 className="mt-6 text-center text-fuchsia-500">
                    {item.title}
                  </h3>
                  <p className="text-fuchsia-500 text-center pb-2">
                    {item.price * item.qty}$
                  </p>
                  <div className="text-center">
                    <select
                      value={item.qty}
                      onChange={(e) => handleQuantity(item.id, e.target.value)}
                      className="font-mono  text-fuchsia-500"
                    >
                      {[...Array(10).keys()].map((number) => {
                        const num = number + 1;
                        return (
                          <option value={num} key={num}>
                            {num}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="text-end">
                    <button
                      className=" px-2 mt-5 mb-2   "
                      onClick={() => deleteProduct(item.id)}
                    >
                      <FaRegTrashCan className="text-fuchsia-500 text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {product.length > 0 && (
            <div className="flex justify-center pt-20">
              <button
                className="fixed border bg-fuchsia-500 hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-500 px-6 py-2 rounded-md text-sm text-white "
                onClick={notify}
              >
                BUY
                <ToastContainer />
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${isOpen ? "ml-64" : ""} transition-all duration-200`}
      ></div>
    </div>
  );
};

export default CartComp;
