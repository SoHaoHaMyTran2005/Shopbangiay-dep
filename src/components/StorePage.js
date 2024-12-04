import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Giày Warrior nam chính hãng siêu nhẹ",
    price: 299000,
    image:
      "https://fado.vn/blog/wp-content/uploads/2023/12/Giay-chay-bo-Warrior-W400-em-ai-thoai-mai-khi-chay-jpg.webp",
    category: "Giày thể thao",
  },
  {
    id: 2,
    name: "Dép Sandal Nam Laceva 2 Quai Mã DP22",
    price: 97000,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22120-g5nqmixjrmlv51.jpg",
    category: "Dép Sandal",
  },
  {
    id: 3,
    name: "Giày Sneaker NB 530 Xám Bạc Full Bill Box",
    price: 599000,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lqamefy2g75j13.jpg",
    category: "Giày thể thao",
  },
  {
    id: 4,
    name: "Dép sandal Buenas Chunky",
    price: 285000,
    image: "https://www.bullshop.vn/wp-content/uploads/2023/06/2-1.png",
    category: "Dép Sandal",
  },
  {
    id: 5,
    name: "Giày sneaker onisuka tige Mexico 66 Airy Green",
    price: 490000,
    image:
      "https://th.bing.com/th/id/OIP.CuCeJJj9OfMx8WYwJfAWYgHaHa?rs=1&pid=ImgDetMain",
    category: "Giày thể thao",
  },
  {
    id: 6,
    name: "Sandal Vento Quai Ngang",
    price: 256000,
    image:
      "https://th.bing.com/th/id/OIP.DtJ3AiYZ4hi_tMmFYRlXowHaHa?rs=1&pid=ImgDetMain.jpg",
    category: "Dép Sandal",
  },
  {
    id: 7,
    name: "Giày Thể Thao XP CL10 JMAX",
    price: 290000,
    image:
      "https://fpt123.net/uploads/images/dien-mat-troi/giay-xp-sport/IMG_0287.jpg",
    category: "Giày thể thao",
  },
  {
    id: 8,
    name: "Dép Sandal ZR",
    price: 339000,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw16eqwm0rtl56.webp",
    category: "Dép Sandal",
  },
  {
    id: 9,
    name: "Giày Thể Thao Footwear Angel Wing White",
    price: 339000,
    image:
      "https://bizweb.dktcdn.net/100/424/874/products/bz0579-89c22537-fc64-49c5-854a-b6780320859c.jpg?v=1679049254737",
    category: "Giày thể thao",
  },
  {
    id: 10,
    name: "Giày Sandal Bít Mũi VENTO ALPHA",
    price: 327000,
    image:
      "https://product.hstatic.net/1000274937/product/alpha_i_sd-08001artboard_432_112053eb69544209835b480b7f21efac_master.png",
    category: "Dép Sandal",
  },
  // 5 sản phẩm mới thuộc danh mục "Dép Thường"
  {
    id: 11,
    name: "Dép da quai ngang Nam Vento CHUCK SL-8027",
    price: 300000,
    image:
      "https://product.hstatic.net/1000274937/product/chuck_8027_2__82958f3463a84b7f83b72c1b6d4963a6_27d1a503c5084365babb30b1b185de1f_master.png", // Thay đường dẫn với ảnh thực tế
    category: "Dép Thường",
  },
  {
    id: 12,
    name: "Dép da xỏ ngón Nam Vento FERRY FF-8025",
    price: 200000,
    image:
      "https://product.hstatic.net/1000274937/product/andrea_sd-09014artboard_43ferry_9bdf6e48cfe143e79cbce5f318e47b53_e270f71b7f20480f96e69c1e8efb7beb_master.png", // Thay đường dẫn với ảnh thực tế
    category: "Dép Thường",
  },
  {
    id: 13,
    name: "Dép Kẹp Ngón VENTO MARINE FF-CL25",
    price: 100000,
    image:
      "https://product.hstatic.net/1000274937/product/marine-08_edc5c1618637476b912ba616f4d7116f_master.jpg", // Thay đường dẫn với ảnh thực tế
    category: "Dép Thường",
  },
  {
    id: 14,
    name: "Dép quai ngang Nam/ Nữ Vento CAMEO SL-12008",
    price: 130000,
    image:
      "https://product.hstatic.net/1000274937/product/cameo_sl-12008-06_1853fca6fe8e4c15a54dcb8486587791_master.jpg", // Thay đường dẫn với ảnh thực tế
    category: "Dép Thường",
  },
];

const StorePage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN");
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  const sortedProducts = [
    ...filteredProducts.filter(
      (product) => product.category === "Giày thể thao"
    ),
    ...filteredProducts.filter((product) => product.category === "Dép Sandal"),
    ...filteredProducts.filter((product) => product.category === "Dép Thường"), // Thêm phần "Dép Thường"
  ];

  return (
    <div className="store">
      {/* Thanh tìm kiếm */}
      <div className="search">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Lọc theo danh mục */}
      <div className="category-filter">
        <button onClick={() => setSelectedCategory("")}>Tất cả</button>
        <button onClick={() => setSelectedCategory("Giày thể thao")}>
          Giày thể thao
        </button>
        <button onClick={() => setSelectedCategory("Dép Sandal")}>
          Dép Sandal
        </button>
        <button onClick={() => setSelectedCategory("Dép Thường")}>
          Dép Thường
        </button>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="products">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default StorePage;
