// Mảng để lưu trữ các mặt hàng trong giỏ hàng
let cartItems = [];

//Chức năng thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

// Chức năng cập nhật hiển thị giỏ hàng
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    let cartHTML = '';
    let total = 0;
    
    cartItems.forEach(item => {
        cartHTML += `<li>${item.name}: ${item.price}.000.000 VNĐ</li>`;
        total += item.price;
    });

    cartList.innerHTML = cartHTML;
    totalElement.textContent = total;
}

// Chức năng mô phỏng thanh toán
function checkout() {
    if (cartItems.length > 0) {
        alert('Cảm ơn vì đã mua hàng!');
        cartItems = []; // Dọn sạch giỏ hàng sau khi mua hàng
        updateCart(); // Cập nhật hiển thị giỏ hàng
    } else {
        alert('Giỏ của bạn trống trơn. Thêm một số mặt hàng trước khi Thanh toán.');
    }
}

let users = [
    { username: 'admin', password: 'admin' }
];
  function dangnhap() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    let loginErrorElement = document.getElementById('loginError');
    loginErrorElement.innerHTML = '';

    let user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Đăng nhập thành công!');
        window.location.href = 'sanpham.html';
        return false; 
    } else {
        loginErrorElement.innerHTML = 'Sai tên đăng nhập hoặc mật khẩu';
        return false;
    }
}

function dangki() {
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;
    let registerErrorElement = document.getElementById('registerError');
    registerErrorElement.innerHTML = '';

    if (username && password) {
        users.push({ username: username, password: password });
        alert('Đăng kí thành công!');
        window.location.href = 'sanpham.html'; 
        document.getElementById('registerForm').reset();
        return false; 
    } else {
        registerErrorElement.innerHTML = 'Vui lòng nhập cả tên người dùng và mật khẩu';
        return false;
    }
}
const showpopup = (value) =>
    {
      const popup = document.getElementById("popup");
      popup.style.visibility = value ? "visible" : "hidden";
      alert('Vui lòng đăng nhâp');
    }