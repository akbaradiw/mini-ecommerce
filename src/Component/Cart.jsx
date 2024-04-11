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
      <button className="close" onClick={onClose}>Return</button>
        <div>
          <div>
            {product.length === 0 && (
              <span className="empty-text">Your basket is currently empty</span>
            )}
            <div>
              {product.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.image} />
                  <h3>{item.title}</h3>
                  <span className="product-price">
                    {item.price * item.qty}$
                  </span>

                  <select
                    value={item.qty}
                    onChange={(e) => handleQuantity(item.id, e.target.value)}
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
                  <button onClick={() => deleteProduct(item.id)}>delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
