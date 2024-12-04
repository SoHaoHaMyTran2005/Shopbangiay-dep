import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      {/* Thanh điều hướng */}
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Trang chủ
        </Link>
        <Link to="/store" style={{ textDecoration: "none", color: "#fff" }}>
          Cửa hàng
        </Link>
        <Link
          to="/cart"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          {/* Biểu tượng giỏ hàng */}
          <i
            className="fas fa-shopping-cart"
            style={{ marginRight: "5px" }}
          ></i>
          Giỏ hàng ({cart.length})
        </Link>
      </nav>

      {/* Tiêu đề chào mừng - ở dưới cùng */}
      <div
        className="site-title-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* Logo */}
        <img
          src="https://i.pinimg.com/736x/1f/b4/27/1fb427b22ad8b5e28a483f9ebc2ea235.jpg"
          alt="Logo"
          style={{
            width: "90px",
            height: "90px",
            marginRight: "20px", // Tăng khoảng cách giữa logo và tiêu đề
          }}
        />
        <h1 className="site-title">Chào mừng đến với Shop bán giày - Dép</h1>
      </div>
    </header>
  );
};

export default Header;
