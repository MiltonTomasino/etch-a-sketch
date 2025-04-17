let isRandomColorsActive = false;
let isProgDarkeningActive = false;
let colorOpacity = 0;

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
                newDiv.style.backgroundColor = `rgba(0, 0, 0, ${isProgDarkeningActive ? colorOpacity : 1})`;
                incrementColorOpacity()
            } else {
                newDiv.style.backgroundColor = randomColor();
                incrementColorOpacity()
            }
        })
        newDiv.classList.add("pixel");
        canvas.appendChild(newDiv);
    }
}

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

// Random color functions
let randomBtn = document.querySelector("#random-btn");

randomBtn.addEventListener("click", () => {
    isRandomColorsActive = !isRandomColorsActive;

    if (isRandomColorsActive) {
        randomBtn.textContent = "Random Colors: ON";
    } else {
        randomBtn.textContent = "Random Colors: OFF";
    }
}) 

function randomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    return `rgba(${R}, ${G}, ${B}, ${isProgDarkeningActive ? colorOpacity : 1})`;
}

// Progressive Darkening functions
let progDarkBtn = document.querySelector("#prog-dark");

progDarkBtn.addEventListener("click", () => {
    
    isProgDarkeningActive = !isProgDarkeningActive;

    if (isProgDarkeningActive) {
        colorOpacity = 0;
        progDarkBtn.textContent = "Progressive Darkening: ON";
    } else {
        colorOpacity = 0;
        progDarkBtn.textContent = "Progressive Darkening: OFF";
    }
});

function incrementColorOpacity() {
    if (isProgDarkeningActive) {
        if (colorOpacity < 1) {
            colorOpacity += 0.1;
        }
    }
}

let clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => {
    populateCanvas(16);
})

populateCanvas(16);
