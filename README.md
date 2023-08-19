# Web_Strapi_Stripe

<p align="left"> <img src="https://komarev.com/ghpvc/?username=phamngocan2412&label=Profile%20views&color=0e75b6&style=flat" alt="phamngocan2412" /></p>
Source code Web React

Tải file client nhập terminal npm i chạy file bằng lệnh npm start

Tạo 1 file api vào trang strapi copy đoạn mã thay đổi thành 

"npx create-strapi-app@latest ."  nhập vào terminal 

Nhập y và chọn Quickstart 

Sau đó nhập tiếp npm install stripe 

Chạy file api bằng lệnh npm run develop

Copy file order.js thay vào file src/api/order/controllers/order.js


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Bán Hàng Thiết Bị Điện Tử</title>
  <style>
    /* Định dạng CSS cho trang web */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #333;
      padding: 20px;
      color: #fff;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 32px;
    }
    main {
      padding: 20px;
    }
    footer {
      background-color: #333;
      padding: 20px;
      color: #fff;
      text-align: center;
    }
  </style>
</head>

<body>
  <header>
    <h1>Web Bán Hàng Thiết Bị Điện Tử</h1>
  </header>
  <main>
    <h2>Chào mừng đến với Web Bán Hàng</h2>
    <p>Chúng tôi là cửa hàng chuyên cung cấp các thiết bị điện tử hàng đầu với chất lượng cao và giá cả cạnh tranh. Tại đây, bạn có thể tìm thấy một loạt các sản phẩm từ các danh mục sau:</p>
    <ul>
      <li>Watch</li>
      <li>Earphone</li>
      <li>Speaker</li>
      <li>Headphone</li>
    </ul>
    <p>Chúng tôi cam kết cung cấp những sản phẩm chất lượng nhất và đáp ứng đầy đủ nhu cầu của khách hàng. Bạn có thể tìm thấy các sản phẩm phổ biến.</p>
    <p>Hãy khám phá danh mục sản phẩm của chúng tôi và tìm kiếm những thiết bị điện tử tuyệt vời cho bạn hoặc những người thân yêu của bạn. Chúng tôi luôn cập nhật sản phẩm mới và đảm bảo có sẵn các ưu đãi hấp dẫn cho khách hàng.</p>
    <p>Đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ. Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng giúp bạn.</p>
    <p>Cảm ơn bạn đã lựa chọn chúng tôi. Chúng tôi hy vọng bạn có trải nghiệm mua sắm thú vị và hài lòng trên trang web của chúng tôi.</p>
  </main>
  <footer>
    <p>Web Bán Hàng &copy; 2023. All rights reserved.</p>
  </footer>
</body>

</html>
