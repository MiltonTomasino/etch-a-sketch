let isRandomColorsActive = false;

function populateCanvas(size) {
    let canvas = document.querySelector(".canvas");
    let pixels = canvas.querySelectorAll("div");
    pixels.forEach(pixel => pixel.remove());
    let gridSize = document.querySelector("p");
    gridSize.textContent = `Current Grid Size: ${size} x ${size}`
    let pixelSize = 500 / size;

    // fill the canvas with divs that act as pixels
    // also implement sketch function whenever mouse hovers over
    for (let i = 0; i < Math.pow(size, 2); i++) {
        let newDiv = document.createElement("div");
        newDiv.style.width = `${pixelSize}px`;
        newDiv.style.height = `${pixelSize}px`;
        newDiv.style.flex = `0 0 ${pixelSize}px`
        newDiv.addEventListener("mouseover", () => {
            if (!isRandomColorsActive) {
                newDiv.style.backgroundColor = "black";
            } else {
                newDiv.style.backgroundColor = randomColor();
            }
        })
        newDiv.classList.add("pixel");
        canvas.appendChild(newDiv);
    }
}

populateCanvas(16);

function changeGridSize(size) {
    populateCanvas(size);
}

// change the size of the grid size
function openPrompt() {
    let gridSize = prompt("Change the Size of the Grid:  ");
    console.log(gridSize);
    

    if (gridSize === null || gridSize == "") {
        changeGridSize(16);
    } else {
        if (gridSize > 100) {
            alert("Grid size too big!")
        } else if (gridSize < 2) {
            alert("Grid size too small!");
        } else {
            changeGridSize(gridSize)
        }
    }
}

function randomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    return `rgb(${R}, ${G}, ${B})`;
}

let randomBtn = document.querySelector("#random-btn");

randomBtn.addEventListener("click", () => {
    isRandomColorsActive = !isRandomColorsActive;

    if (isRandomColorsActive) {
        randomBtn.textContent = "Random Colors: ON";
    } else {
        randomBtn.textContent = "Random Colors: OFF";
    }
}) 