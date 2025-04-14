let canvas = document.querySelector(".canvas");
let header = document.querySelector(".header");
let pixel = canvas.querySelectorAll("div");

// fill the canvas with divs that act as pixels
// also implement sketch function whenever mouse hovers over
for (let i = 0; i < Math.pow(16, 2); i++) {
    let newDiv = document.createElement("div");
    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "black";
    })
    newDiv.classList.add("pixel");
    canvas.appendChild(newDiv);
}