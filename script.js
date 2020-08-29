const resetButton = document.querySelector('#reset-button');
const resetDiv    = document.querySelector("#reset-container")
const parentDiv   = document.querySelector('#parent-container');
const colorDiv    = document.querySelector("#color-container")

let colorChoice = "black";

const colorPickBtn = document.createElement('button');
colorPickBtn.style.border = "1px solid gray";
colorPickBtn.style.width = "18vw";
colorPickBtn.style.height = "8vh";
colorPickBtn.style.backgroundColor = "rgba(0, 185, 0, 0.568)";
colorPickBtn.textContent = "Change Color"

const redButton = document.createElement('button');
redButton.style.border = "1px solid gray";
redButton.style.width = "8vw";
redButton.style.height = "8vw";
redButton.style.backgroundColor = "red";



// when the player presses the color button,
// append the color buttons to the color div
// when new color is chosen, remove them
function chooseColor() {



}

function draw() {


    // add functionality to only draw when the mouse button is clicked
    let canDraw = false;
    drawDivs = document.querySelectorAll('.draw-div');

    // if the mouse button is pressed - the user will be drawing
    parentDiv.onmousedown = function() {
        canDraw = true;
    };
    parentDiv.onmouseup = function() {
        canDraw = false;
    }
    drawDivs.forEach(element => {
        element.onmouseover = function () {

            if (canDraw) {
                element.style.backgroundColor = colorChoice;
            }
            
        };
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
    resetDiv.appendChild(colorPickBtn);

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

/*
    border: 1px solid gray;
    width: 18vw;
    height: 8vh;
    background-color: rgba(0, 185, 0, 0.568);
*/

// if the user pressed new grid - all hell breaks loose 
resetButton.addEventListener('click', newGrid);


// get all the draw-divs and give them an event handler 
// to see when the user places and removes the mouse from a 
// container - 
// when this happens, change the background
// of the element

