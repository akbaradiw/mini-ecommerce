import React from "react";
import Modal from "react-modal";
import "./style.css";

const Cart = ({
  product,
  visibility,
  onClose,
  deleteProduct,
  handleQuantity,
  handleCategory,
}) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div
      className="modal"
      style={{
        display: visibility ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="flex justify-center">
          <button
            className=" font-bold border-solid border-2 rounded-full px-3 ms-3 mt-7 mb-3  bg-neutral-400  border-black"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div>
          <div>
            {product.length === 0 && (
              <span className="empty-text">Your basket is currently empty</span>
            )}
            <div className="font-mono">
              {product.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.image} />
                  <h3>{item.title}</h3>
                  <span className="product-price">
                    {item.price * item.qty}$
                  </span>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) => handleQuantity(item.id, e.target.value)}
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
                      className="font-bold border-solid border-2 rounded-full px-2 mt-3 mb-2 bg-neutral-400  border-black"
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                  {/* {item.price * item.qty} */}
                </div>
              ))}
              {product.length > 0 && <button>Checkout</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
