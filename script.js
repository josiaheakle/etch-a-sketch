const resetButton = document.querySelector('#reset-button');
const resetDiv    = document.querySelector("#reset-container")
const parentDiv   = document.querySelector('#parent-container');
const colorDiv    = document.querySelector("#color-container")

let colorChoice = "black";
let canDraw = false;

const colorPickBtn = document.createElement('button');
colorPickBtn.style.border = "1px solid gray";
colorPickBtn.style.width = "18vw";
colorPickBtn.style.height = "8vh";
colorPickBtn.style.backgroundColor = "rgba(0, 185, 0, 0.568)";
colorPickBtn.textContent = "Change Color"

const redButton = document.createElement('button');
redButton.id = "red";
redButton.className = "color-button";
redButton.style.marginLeft = "2vw";
redButton.style.border = "1px solid gray";
redButton.style.width = "8vh";
redButton.style.height = "8vh";
redButton.style.backgroundColor = "red";

const blackButton = document.createElement('button');
blackButton.id = "black";
blackButton.className = "color-button";
blackButton.style.border = "1px solid gray";
blackButton.style.width = "8vh";
blackButton.style.height = "8vh";
blackButton.style.backgroundColor = "black";

const grayButton = document.createElement('button');
grayButton.id = "gray";
grayButton.style.marginLeft = "2vw";
grayButton.style.border = "1px solid gray";
grayButton.style.width = "8vh";
grayButton.style.height = "8vh";
grayButton.style.backgroundColor = "gray";

const whiteButton = document.createElement('button');
whiteButton.id = "white";
whiteButton.style.marginLeft = "2vw";
whiteButton.className = "color-button";
whiteButton.style.border = "1px solid gray";
whiteButton.style.width = "8vh";
whiteButton.style.height = "8vh";
whiteButton.style.backgroundColor = "white";

const greenButton = document.createElement('button');
greenButton.id = "green";
greenButton.style.marginLeft = "2vw";
greenButton.className = "color-button";
greenButton.style.border = "1px solid gray";
greenButton.style.width = "8vh";
greenButton.style.height = "8vh";
greenButton.style.backgroundColor = "green";

const blueButton = document.createElement('button');
blueButton.id = "blue";
blueButton.style.marginLeft = "2vw";
blueButton.className = "color-button";
blueButton.style.border = "1px solid gray";
blueButton.style.width = "8vh";
blueButton.style.height = "8vh";
blueButton.style.backgroundColor = "blue";

const yellowButton = document.createElement('button');
yellowButton.id = "yellow";
yellowButton.style.marginLeft = "2vw";
yellowButton.className = "color-button";
yellowButton.style.border = "1px solid gray";
yellowButton.style.width = "8vh";
yellowButton.style.height = "8vh";
yellowButton.style.backgroundColor = "yellow";

const pinkButton = document.createElement('button');
pinkButton.id = "pink";
pinkButton.style.marginLeft = "2vw";
pinkButton.className = "color-button";
pinkButton.style.border = "1px solid gray";
pinkButton.style.width = "8vh";
pinkButton.style.height = "8vh";
pinkButton.style.backgroundColor = "pink";

function removeColors() {
    colorButtons = colorDiv.querySelectorAll('button');
    colorButtons.forEach(element => {
        colorDiv.removeChild(element);
    });
    // draw();
}

// when the player presses the color button,
// append the color buttons to the color div
// when new color is chosen, remove them
function chooseColor() {
    colorDiv.appendChild(blackButton);
    colorDiv.appendChild(grayButton);
    colorDiv.appendChild(whiteButton);
    colorDiv.appendChild(redButton);
    colorDiv.appendChild(blueButton);
    colorDiv.appendChild(yellowButton);
    colorDiv.appendChild(greenButton);
    colorDiv.appendChild(pinkButton);

    colorButtons = colorDiv.querySelectorAll('button');
    colorButtons.forEach(element => {
        console.log(element.id);
        element.addEventListener('click', function() {
            console.log(`choice: ${element.id}`);
            colorChoice = element.id;
            removeColors();
        })
    });

}

function draw() {

    console.log('draw function called!');

    // add functionality to only draw when the mouse button is clicked
    
    const drawDivs = document.querySelectorAll('.draw-div');

    // if the mouse button is pressed - the user will be drawing
    parentDiv.onmousedown = function() {
        canDraw = true;
    };
    parentDiv.onmouseup = function() {
        canDraw = false;
    }
    drawDivs.forEach(element => {
        element.onmouseover = function () {
            console.log(`mouse over ${element.id}, canDraw: ${canDraw}`)
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

    colorPickBtn.addEventListener('click', chooseColor);

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

