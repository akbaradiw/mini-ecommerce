import React from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({
  product,
  visibility,
  onClose,
  deleteProduct,
  handleQuantity,
  handleCategory,
}) => {
  const notify = () => toast("Checkout Success!");

  return (
    <div
      className="modal"
      style={{
        display: visibility ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="flex justify-end">
          <button
            className=" font-bold border-solid border-2 rounded-full px-3 ms-3 mt-2 fixed  bg-red-400  border-black hover:shadow-lg hover:shadow-red-600  "
            onClick={onClose}
          >
            X
          </button>
          <div>
            {product.length === 0 && (
              <div className="border-solid border-2 rounded-lg py-8 px-2 m-1 bg-white shadow-lg shadow-neutral-600 hover:opacity-80 ">
                <p className="font-mono">
                  ...Your basket is currently empty....
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="font-mono ">
              {product.map((item) => (
                <div className="product" key={item.id}>
                  <div className="divide-y divide-neutral-400 hover:translate-x-2 duration-200">
                    <img src={item.image} />
                    <h3 className="mt-6">{item.title}</h3>
                    <p className="pt-3 pb-2">{item.price * item.qty}$</p>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          handleQuantity(item.id, e.target.value)
                        }
                        className="font-mono"
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
                    <div>
                      <button
                        className="font-bold border-solid border-2 rounded-full px-2 mt-5 mb-2 bg-neutral-400 hover:shadow-lg hover:shadow-neutral-400  border-black"
                        onClick={() => deleteProduct(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {product.length > 0 && (
              <div>
                <button
                  onClick={notify}
                  className="font-mono font-bold border-solid border-2 rounded-full px-2 mt-3 bg-lime-400 hover:shadow-lg hover:translate-x-2 duration-150 hover:shadow-lime-600   border-black"
                >
                  Checkout
                  <ToastContainer />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
