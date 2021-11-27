//Setting up container
const container = document.querySelector('#container');
container.classList.add('container');

//Creates initial grid
let reset = prompt('Please enter a grid size between 1-100: '); 

function createColumns () {
    for (let i = 0; i < reset; i++) {
        const column = document.createElement('div');
        column.classList.add('column')
        createCells(column);
        container.appendChild(column);
        }
        
    }
    
function createCells (column) {
    for (let j = 0; j < reset ; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        column.appendChild(cell);
    }
}

createColumns();

//Button resets initial grid squares to white
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});

//Button click for new grid generation
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
    newGrid();
});

//Black mouseover for initial grid squares
let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
});

//Deletes grid
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Generates new grid based on prompt input
function newGrid() {
  removeAllChildNodes(container);
  reset = prompt('Please enter a grid size between 1-100: ');
    for (i = 0; i < reset; i++) {
        const column = document.createElement('div');
        column.classList.add('column')
        createCells(column);
        container.appendChild(column);
        }
        
        //Black mouseover for new grid
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
          cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });

        //Resets new grid squares to white
        const btn1 = document.querySelector('#btn1');
        btn1.addEventListener('click', function () {
          cells.forEach((cell) => {
          cell.style.backgroundColor = 'white';
          });
         });
        });
    }




