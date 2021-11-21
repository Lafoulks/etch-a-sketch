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

/*Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. 
You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
    adding a new class to the div.
    changing the div’s background color using JavaScript.
*/

let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
});


