function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let body = document.querySelector("body");
// console.log(body)
let text = document.querySelector(".color");
let btnChange = document.querySelector(".change-color");

btnChange.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
}) 