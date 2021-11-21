//Setting up container
const container = document.querySelector('#container');
container.classList.add('container');

//Creating grid row and cells
function createRows () {
    for (i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        createCells(row);
        container.appendChild(row);
    }
}

function createCells (row) {
    for (j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

createRows();

//Creates cell color change to black upon mouseover
let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
});

//Clears grid and generates new grid based on user input
function clearGrid() {
    //Clears board
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
    //Prompt user input
    const reset = prompt('Enter new grid size: ');
    //generate new board based on user input
}

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    clearGrid();
});


