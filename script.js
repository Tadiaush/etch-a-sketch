const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector('#reset');

window.addEventListener('load', setDefaultGrid);
resetButton.addEventListener('click', resetGrid);

function setDefaultGrid() {
    setGrideSize(16);
    createGrid(16);

}

function setGrideSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createGrid(size) {
    console.log('starting createGrid');
    for (let index = 0; index < (size * size); index++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridContainer.appendChild(gridElement);
    }

    let newGrid = gridContainer.querySelectorAll('div');
    newGrid.forEach(oneDiv => oneDiv.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    let randomColor = '#' + ((1 << 24) * Math.random() | 0).toString(16);
    if (this.style.backgroundColor === '') {
        this.style.backgroundColor = randomColor;
    }
}

function resetGrid() {
    const divArray = Array.from(gridContainer.childNodes);
    divArray.forEach(divElement => divElement.parentNode.removeChild(divElement));
    newGrid();
}

function newGrid() {
    let gridSize = prompt("Enter value of the Grid: (possible value between 0 and 100)");

    if (gridSize > 0 && gridSize <= 100 && Number.isInteger(parseInt(gridSize))) {
        setGrideSize(gridSize);
        createGrid(gridSize);
    } else {
        alert('The number is not in between 1 and 100');
        setDefaultGrid();
    }

}





