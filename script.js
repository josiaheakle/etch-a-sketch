const resetButton = document.querySelector('#reset-button');
const parentDiv   = document.querySelector('#parent-container');



function draw() {
    drawDivs = document.querySelectorAll('.draw-div');
    drawDivs.forEach(element => {
        // console.log(`ELEMENT ID: ${element.id}`);
        element.onmouseover = function () {
            element.style.backgroundColor = "black";
        };
        // element.addEventListener('click', function() {

        //     element.style.backgroundColor = "black";
        // });
    });
}

/*
If no grid has been set up yet, set gridBool to false
make sure there is no border to the parentDiv
This border will not be removed until the page
is refreshed

When the button is pushed, create the border
*/

function newGrid() {
    let exit = true;
    // Print to the console when a new grid is created
    console.log('button pressed');
    // Show the border of the container
    parentDiv.style.border = "1px gray solid";

    // Remove all the old containers 
    const oldDivs = parentDiv.querySelectorAll('div');
    oldDivs.forEach(element => {
        parentDiv.removeChild(element);
    });

    // Make the grid - if the user inputs
    // a variable which is not a number above 0,
    // have them enter a valid number
    let gridAmt;
    do {
        gridAmt = prompt('How many pixels wide would you like your image to be?');
        if(isNaN(gridAmt) || +gridAmt < 1) {
            alert('Please enter a valid number!');
        }
    } while(isNaN(gridAmt)||+gridAmt < 1);

    // Print to the console the userdefined grid amount
    console.log(`GRID AMT: ${gridAmt}`);

    // create the grid and give each 
    // element a size of auto
    let gridTemplate = ``;
    for(let i=0; i < gridAmt; i++) {
        for(let o=0; o < gridAmt; o++) {
            const newDiv = document.createElement('div');
            newDiv.id = `${i}-${o}`;
            newDiv.className = 'draw-div';
            parentDiv.appendChild(newDiv);
        }
        gridTemplate = `${gridTemplate} auto`;
    }
    parentDiv.style.gridTemplateColumns = gridTemplate;
    parentDiv.style.gridTemplateRows    = gridTemplate;

    draw();
}



resetButton.addEventListener('click', newGrid);


// get all the draw-divs and give them an event handler 
// to see when the user places and removes the mouse from a 
// container - 
// when this happens, change the background
// of the element

