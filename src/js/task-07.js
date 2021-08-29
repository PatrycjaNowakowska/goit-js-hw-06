const input = document.querySelector("#font-size-control");

function changeRange(e) {
    document.getElementById("text").style.fontSize = e.target.value + "px";

    // lub document.getElementById("text").style.fontSize = input.value + "px";
}

input.addEventListener("input", changeRange);