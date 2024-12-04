import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Mô tả ngắn về Shop */}
      <p className="header-description">
        Bạn đang tìm kiếm đôi giày thể thao bền bỉ, phong cách hay những đôi dép
        sandal nhẹ nhàng và thoải mái cho mùa hè? Shop chúng tôi chính là điểm
        đến lý tưởng cho mọi nhu cầu của bạn.
      </p>

      {/* Phần giới thiệu về Shop XYZ */}
      <section className="highlight-item">
        <h3>* Về Chúng Tôi</h3>
        <p>
          Chúng tôi tự hào là một trong những địa chỉ uy tín và chất lượng hàng
          đầu trong lĩnh vực giày dép. Chúng tôi không chỉ cung cấp các sản phẩm
          giày thể thao, dép sandal đa dạng về mẫu mã và kiểu dáng mà còn cam
          kết đem đến sự thoải mái và chất lượng cao nhất cho đôi chân của bạn.
        </p>
      </section>

      {/* Phần mô tả sản phẩm */}
      <section className="highlight-item">
        <h3>* Sản Phẩm Của Chúng Tôi</h3>

        <div className="product-category">
          <h4>• Giày Thể Thao</h4>
          <p>
            Từ những đôi giày chạy bộ hiệu suất cao đến giày sneaker thời trang,
            chúng tôi luôn cập nhật những xu hướng mới nhất từ các thương hiệu
            nổi tiếng.
          </p>
        </div>

        <div className="product-category">
          <h4>• Dép Sandal</h4>
          <p>
            Mang đến sự thoải mái và thoáng mát, các mẫu dép sandal của chúng
            tôi thích hợp cho mọi hoạt động ngoài trời, từ đi biển, dạo phố cho
            đến leo núi.
          </p>
        </div>
      </section>

      {/* Phần điểm nổi bật */}
      <section className="highlight-item">
        <h3>* Điểm Nổi Bật</h3>
        <div className="highlight-item">
          <h4>• Chất Lượng Đỉnh Cao</h4>
          <p>
            Mỗi sản phẩm tại Shop chúng tôi đều được chọn lọc kỹ lưỡng, đảm bảo
            chất lượng và độ bền vượt trội.
          </p>
        </div>

        <div className="highlight-item">
          <h4>• Thiết Kế Thời Thượng</h4>
          <p>
            Chúng tôi luôn theo sát xu hướng thời trang thế giới, mang đến cho
            bạn những mẫu giày dép không chỉ đẹp mắt mà còn hợp thời trang.
          </p>
        </div>

        <div className="highlight-item">
          <h4>• Dịch Vụ Khách Hàng Xuất Sắc</h4>
          <p>
            Đội ngũ nhân viên chuyên nghiệp và nhiệt tình của chúng tôi luôn sẵn
            sàng hỗ trợ bạn lựa chọn sản phẩm phù hợp nhất.
          </p>
        </div>
      </section>

      {/* Phần cam kết */}
      <section className="highlight-item">
        <h3>* Cam Kết Của Shop</h3>
        <p>
          Chúng tôi cam kết cung cấp những sản phẩm giày dép chất lượng cao với
          giá cả hợp lý và dịch vụ khách hàng tận tâm. Sự hài lòng của bạn là
          mục tiêu hàng đầu của chúng tôi.
        </p>
      </section>

      {/* Phần thông tin liên hệ */}
      <section
        className="contact-info"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "30px",
        }}
      >
        <h3>Thông Tin Liên Hệ</h3>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:info@ventofootwear.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Sohaohatran2005@gmail.com
            </a>
          </li>
          <li>
            Chăm sóc khách hàng:{" "}
            <a
              href="tel:+84971679655"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              +84 97 2252 74 82
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
