console.log("Guess the number game");

// DOM Values
const userInput = document.querySelector("#userInput");
const submitGuess = document.querySelector("#submitguess");

const prevGuess = document.querySelector(".prevGuess");
const winner = document.querySelector(".winner");
const lessNumber = document.querySelector(".lessNumber");
const greaterNumber = document.querySelector(".greaterNumber");
const currCount = document.querySelector(".currCount");
const resetButton = document.querySelector("#resetButton");

// Variable decalration
let randomNumber;
let prevGuesses;
let numGuesses;
let playGame;


// CONSTANTS
const MAX_GUESSES = 10;

const MESSAGE = {
    VALID: "Please enter a valid number",
    LESS : "Guess should not be less than 1",
    GREATER : "Guess should not be greater than 100",
    WIN : "You won! Click reset to play again",
    LOSS : "You lost! The number was"
}



// INIT
initGame();

// Submit Events
submitGuess.addEventListener("click", handleSubmit);
resetButton.addEventListener("click", resetGame);

// Functions

function initGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuesses = [];
    numGuesses = MAX_GUESSES;
    playGame = true;

    updateUI();
    clearMessages();

    userInput.disabled = false;
    submitGuess.disabled = false;
}


if (playGame) {
  prevGuess.innerHTML = PREV_GUESSES;
  currCount.innerHTML = numGuesses;
  submitGuess.addEventListener("click", function (e) {
    e.preventDefault();
    const userguess = Number(userInput.value);
    console.log(randomNumber, userInput.value);
    lessNumber.innerHTML= "";
    greaterNumber.innerHTML= "";
    ValidateGuess(userguess);
  });
}

resetButton.addEventListener("click", function(){
     prevGuesses = [];
     numGuesses = 10;
      prevGuess.innerHTML = PREV_GUESSES;
    currCount.innerHTML = numGuesses;
      userInput.value = "";
      userInput.disabled = false;
      submitGuess.disabled = false;
      playGame = true;
      randomNumber = parseInt(Math.random() * 100 + 1);
      winner.innerHTML = "";
      lessNumber.innerHTML = "";
      greaterNumber.innerHTML = ""
      return;
})

function ValidateGuess(guess) {
    if(!playGame){
        return
    }
  else if (isNaN(guess)) {
    alert(VALID_NUMBER);
  } else if (guess > 100) {
    alert(GREATER_NUMBER);
  } else if (guess < 1) {
    alert(LESS_NUMBER);
  } else {
    if (guess == randomNumber) {
      winner.innerHTML = WINNER_MESSAGE;
      prevGuesses = [];
      numGuesses = 0;
      userInput.value = "";
      playGame = false;
      userInput.disabled = true;
      submitGuess.disabled = true;
      return;
    } 
    
     prevGuesses.push(guess);
      numGuesses--;

      currCount.innerHTML = numGuesses;
      prevGuess.innerHTML = prevGuesses.join(", ");
      if(guess < randomNumber){
        lessNumber.innerHTML = "Number is less than random number"
      }else{
        greaterNumber.innerHTML = "Number is greater than random number"
      }
      
      if (numGuesses == 0) {
        
      winner.innerHTML = `${LOSS_MESSAGE} ${randomNumber}`;
      prevGuesses = [];
      numGuesses = 0;
      userInput.value = "";
      playGame = false;
      userInput.disabled = true;
      submitGuess.disabled = true;
      return;
    } 
    userInput.value = "";
  }
}
