const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleInput = () => {
  output.textContent = input.value;
};

input.addEventListener("input", handleInput);
