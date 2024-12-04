import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      dispatch(updateQuantity(item.id, newQuantity));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>{item.price} VND</p>
      </div>
      <div className="cart-item-actions">
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
          className="cart-item-quantity"
        />
        <button onClick={handleRemove} className="remove-item-btn">
          Xóa
        </button>
      </div>
    </div>
  );
};

export default CartItem;
