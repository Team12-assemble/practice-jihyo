// my solution
let btnApple = document.querySelector(".btn-apple");
let btnBanana = document.querySelector(".btn-banana");
let result = document.querySelector(".result");

const btnClicked = (fruit, price) => {
  result.innerHTML += `<p>${fruit} - ${price}원</p>`;
};

// tutor's solution
const addToCartButtons = document.querySelectorAll(".add-to-cart");
