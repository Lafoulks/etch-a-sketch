const container = document.querySelector('#container');
container.classList.add('container');
container.textContent = 'Container';

const row = document.createElement('div');
row.classList.add('row');
row.textContent = 'Row';


const cell = document.createElement('div');
cell.classList.add('cell');
cell.textContent = 'Cell';

function createRows () {
    for (i = 0; i < 16; i++) {
        row.classList.add('row');
        container.appendChild(row);
    }
}

function createGrid () {
    for (j = 0; j < 16; j++) {
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

createRows();
createGrid();

