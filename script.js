const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector('#reset');

window.addEventListener('load',setDefaultGrid);
resetButton.addEventListener('click',resetGrid);

function setDefaultGrid(){
    setGrideSize(16);
    createGrid(16);

}

function setGrideSize(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createGrid(size) {
        console.log('starting createGrid');
        for (let index = 0; index < (size * 2); index++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('grid-element');

            gridContainer.appendChild(gridElement);
        }

        let newGrid = gridContainer.querySelectorAll('div');
        newGrid.forEach(oneDiv => oneDiv.addEventListener('mouseover', colorGrid));
    }

function colorGrid() {
        
    this.style.backgroundColor = 'black';
    }

function resetGrid(){
    const divArray = Array.from(gridContainer.childNodes);
    divArray.forEach(divElement => divElement.parentNode.removeChild(divElement));

    setDefaultGrid();
}





