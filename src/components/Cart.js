import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/actions";

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN");
};

const CartPage = () => {
  const [isPurchased, setIsPurchased] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product.id));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleBuyNow = () => {
    setIsPurchased(true);
  };

  return (
    <div className="cart">
      {isPurchased ? (
        <div className="thank-you-message">
          <h2>Cảm ơn bạn đã mua sản phẩm của chúng tôi 🥰</h2>
        </div>
      ) : (
        <>
          {cart.length > 0 ? ( // Kiểm tra nếu giỏ hàng có sản phẩm
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{formatPrice(item.price)} VND</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecreaseQuantity(item)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item)}>
                        +
                      </button>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item)}>
                      Xóa
                    </button>
                    <p>
                      <strong>Tổng giá:</strong>{" "}
                      {formatPrice(item.price * item.quantity)} VND
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-cart-message">
              <h2>Giỏ hàng của bạn hiện tại đang trống.</h2>
            </div>
          )}

          {cart.length > 0 && ( // Hiển thị phần tổng cộng và nút mua hàng nếu có sản phẩm trong giỏ
            <>
              <div className="cart-total">
                <h2>Tổng cộng: {formatPrice(calculateTotal())} VND</h2>
              </div>
              <button className="buy-now-button" onClick={handleBuyNow}>
                Mua hàng
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
