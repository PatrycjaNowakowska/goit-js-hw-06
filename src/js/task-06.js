const input = document.querySelector("input");
console.log(input);


function focusColor() {
    if (input.value.length >= input.getAttribute("data-length")) {
        input.classList.remove("invalid");
        input.classList.add("valid")
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");

    }
};

input.addEventListener("blur", focusColor);