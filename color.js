var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
   setUpModeButtons();
    setUpSquares();
    
}

function setUpModeButtons(){
    //mode button event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //Ternary operator if Easy    numSquares =3  else = 6
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener('click', function () {
            //grab color
            var clickedColor = this.style.backgroundColor;
            //compare to color picker
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
    reset();
}


function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change display to show rgb value
    colorDisplay.textContent = pickedColor;
    //clear correct display
    messageDisplay.textContent = "";
    //change play again to change colors
    resetButton.textContent = "New Colors";
    //change colors in array
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display ="block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function name() {
    reset();
})

function changeColors(color) {
    //loop through squares
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    //make an array
    var arr =[];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random rgb color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

