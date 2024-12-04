import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const ProductCard = ({ product, onAddToCart, formatPrice }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)} VND</p>{" "}
      {/* Hiển thị giá đã được định dạng */}
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> {/* Biểu tượng giỏ hàng */}
      </button>
    </div>
  );
};

export default ProductCard;
