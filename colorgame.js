var squares = document.querySelectorAll(".square");
var toGuess = document.getElementById("toGuess");
var colorToGuess;
var bar = document.getElementById("bar");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var mode = "hard";


setButtons();
setColors(6);

reset.addEventListener("click",function(){
	if(mode=="easy"){
		setColors(3);
	}else{
		setColors(6);
	}
	bar.textContent="";
});

//This function takes care of adding functionality to the "easy" and "hard"
//buttons on the website
function setButtons(){
	easy.addEventListener("click", function(){
		easy.classList.toggle("selected");
		hard.classList.toggle("selected");
		setColors(3);
		mode = "easy"

	});
	hard.addEventListener("click", function(){
		easy.classList.toggle("selected");
		hard.classList.toggle("selected");
		setColors(6);
		mode = "hard";
	});
}

// This function takes care of setting up the colors of each square in the website
// with random colors, these random colors are created using the randomColor functions
// defined below in the document, the function also stores which
// color is the right color to guess in the variable "colorToGuess"
function setColors(num){
	if(num === 3){
		for(var i=num; i<squares.length; i++){
			squares[i].style.display = "none";
		}
	}
	else{
		for(var i=0; i<squares.length; i++){
			squares[i].style.display = "inline";
		}
	}
	for(var i=0; i<num; i++){
		setRandomColor(squares[i]);
		squares[i].addEventListener("click",function(){
			if(this.style.backgroundColor === colorToGuess){
				bar.textContent = "Correct!";
				bar.style.color = "black";
				rightAnswer();

			}else{
				bar.textContent = "Try again!";
				bar.style.color = "black";
				this.style.backgroundColor = document.body.style.backgroundColor;
			}
		});
	}
	colorToGuess = squares[Math.floor(Math.random() * num)].style.backgroundColor;
	toGuess.innerHTML = colorToGuess.toUpperCase();
	h1.style.backgroundColor = "steelblue";
}

//Whenever the user guesses the right color, all the squares and the header
//background get the same color as the right answer's color
function rightAnswer(){
	for(var i = 0; i<squares.length; i++){
				squares[i].style.background = colorToGuess;
	}
	h1.style.background = colorToGuess;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < squares.length; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(square) {
  square.style.backgroundColor = getRandomColor();
}