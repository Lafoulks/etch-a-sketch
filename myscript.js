const container = document.querySelector('#container');
container.classList.add('container');

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

