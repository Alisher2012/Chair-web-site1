document.addEventListener("DOMContentLoaded", function () {

  let count = 1;
  const minus = document.querySelector(".qty button:first-child");
  const plus = document.querySelector(".qty button:last-child");
  const countText = document.querySelector(".qty span");
  const mainImg = document.querySelector(".main-img");
  const prev = document.getElementById("prevImg");
  const next = document.getElementById("nextImg");
  const addBtn = document.querySelector(".cart");
  const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCart = document.getElementById("closeCart");
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");



  minus.onclick = function () {
    if (count > 1) {
      count--;
      countText.innerText = count;
    }
  };

  plus.onclick = function () {
    count++;
    countText.innerText = count;
  };




  addBtn.onclick = function () {
    cartItems.innerHTML = `
      <div class="cart-item">
        <img src="chair1.png">
        <div>
          <b>Lorem, ipsum dolor.</b>
          <p>$100</p>
        </div>
      </div>
    `;

    totalPrice.innerText = (100 * count);
  };

  cartBtn.onclick = function () {
    cartModal.style.display = "block";
  };

  closeCart.onclick = function () {
    cartModal.style.display = "none";
  };


  const images = [
    "chair1.png",
    "chair2.png",
    "chair3.png",
    "chair4.png"
  ];

  let index = 0;

  next.onclick = function () {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    mainImg.src = images[index];
  };

  prev.onclick = function () {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    mainImg.src = images[index];
  };

});
