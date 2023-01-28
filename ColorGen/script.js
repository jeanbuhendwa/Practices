let body = document.getElementById("gradient");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let cssCode = document.querySelector(".css-code");

function setBackground(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    cssCode.textContent = body.style.background;
}
color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);