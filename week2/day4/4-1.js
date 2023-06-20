console.log("4-1 opened!");

let name = "홍길동";
let age = 25;

document.write(name);
document.write(age);

console.log(name);
console.log(age);

document.getElementById("greeting").innerText = "javascript";

let a = 4;
let b = 20;

document.write("<br>", a > 3 && a < 5 ? a + b : a * b);

// 문자열을 가진 배열의 요소를 모두 합쳐 새로운 문자열로 반환
const strings = ["Hello", " ", "World", "!"];

const putAllString = (arr) => {
  return arr.join("");
};

console.log(putAllString(strings));
