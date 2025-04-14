function populateCanvas(size) {
    let canvas = document.querySelector(".canvas");
    let pixels = canvas.querySelectorAll("div");
    pixels.forEach(pixel => pixel.remove());
    let header = document.querySelector(".header");
    let pixelSize = 500 / size;

    // fill the canvas with divs that act as pixels
    // also implement sketch function whenever mouse hovers over
    for (let i = 0; i < Math.pow(size, 2); i++) {
        let newDiv = document.createElement("div");
        newDiv.style.width = `${pixelSize}px`;
        newDiv.style.height = `${pixelSize}px`;
        newDiv.style.flex = `0 0 ${pixelSize}px`
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        })
        newDiv.classList.add("pixel");
        canvas.appendChild(newDiv);
    }
}

populateCanvas(16);

function changePixelSize(size) {
    populateCanvas(size);
}

// change the size of the brush size
function openPrompt() {
    let brushSize = prompt("Change the Size of the Brush: 2 <= brush size <= 100 ");
    if (brushSize > 100) {
        alert("Brush size too big!")
    } else if (brushSize < 2) {
        alert("Brush size too small!");
    } else {
        changePixelSize(brushSize)
    }
}