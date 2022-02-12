container = document.querySelector("#container");

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

function start() {
    rows = Math.floor((window.innerHeight) / 50);
    cols = Math.floor((container.offsetWidth) / 50);
    console.log(window.innerWidth);
    console.log(cols);
    colors = getColors(5);
    generate(rows, cols, colors);
}

function generate(rows, cols, colors) {
    for (let row = 0; row < rows; row++) {
        currentRow = document.createElement("div");
        currentRow.setAttribute("class", "row");
        //currentRow.setAttribute("height", "50");
        for (let col = 0; col < cols; col++) {
            currentCellSpan = document.createElement("span");
            currentCellSpan.setAttribute("class", "cell");
            currentCellSpan.setAttribute("height", "50");
            currentCellSpan.setAttribute("width", "50");

            currentCellCanvas = document.createElement("canvas");
            currentCellCanvas.textContent = ":(";
            currentCellCanvas.setAttribute("class", "cell__canvas");
            currentCellCanvas.setAttribute("width", "50");
            currentCellCanvas.setAttribute("height", "50");
            
            currentCellSpan.appendChild(currentCellCanvas);
            currentRow.appendChild(currentCellSpan);

            context = currentCellCanvas.getContext("2d");
            let color = colors[Math.floor((Math.random() * 1000)) % colors.length];
            context.fillStyle=`#${color.r}${color.g}${color.b}`;
            context.fillRect(0,0,50,50);

            currentCellSpan            
        }
        container.appendChild(currentRow);
    }
}

function getColors(num) {
    let colors = [];
    for (let i = 0; i < num; i++) {
        let r = Math.floor((Math.random() * 1000)) % 256;
        let g = Math.floor((Math.random() * 1000)) % 256;
        let b = Math.floor((Math.random() * 1000)) % 256;
        colors.push(new Color(r.toString(16), g.toString(16), b.toString(16)));
    }
    console.log("colors: " + colors);
    return colors;
}

start();
