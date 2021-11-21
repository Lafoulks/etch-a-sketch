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
    //Prompt user input
    const reset = prompt('Enter new grid size: ');
    //Generates new board based on user input. How to keep in same place as original grid? How to set user input limit to 100?
    
    for (i = 0; i < reset; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        createCells(row);
        container.appendChild(row);
        for (j = 0; j < reset; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        //Gives event listeners to new board
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
          cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
        });
    }
}

//Reset button
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
    clearGrid();
});

/*function removeAllChildNodes(parent) {
    const container = document.querySelector('#container');
    removeAllChildNodes(container);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
*/