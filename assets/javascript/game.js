//create variables
var wins = 0;
var showWin = document.getElementById("winNum");
var losses = 0;
var showLoss = document.getElementById("lossNum");
var remaining = 9;
var showLeft = document.getElementById("guessLeft");
var guesses = [];
var showGuess = document.getElementById("guesses");
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var psychicLetter;

function random() {
    psychicLetter = letters[Math.floor(Math.random() * letters.length)];
}
random();

//gather user input from keypress
document.onkeyup = function(e) {
    //PRESS ENTER TO RESET GAME
    if (e.which === 13) {
        //reset win/loss count/display
        wins = 0;
        losses = 0;
        showWin.innerHTML = wins;
        showLoss.innerHTML = losses;
        //reset guesses
        remaining = 9;
        showLeft.innerHTML = remaining;
        guesses = [];
        showGuess.innerHTML = "";
        //call new psychicLetter
        random();
    //check that there are guesses remaining and entry is a letter
    } else if (remaining > 0 && e.which >= 65 && e.which <= 90) {
        //assign key to userGuess
        var userGuess = e.key;
        //check for win condition
        if (userGuess.toUpperCase() === psychicLetter) {
            //add to win count
            wins++;
            alert("You must be psychic! The letter was " + psychicLetter + ".");
            showWin.innerHTML = wins;
            //reset guesses
            remaining = 9;
            guesses = [];
            showGuess.innerHTML = "";
            //call new psychicLetter
            random();
        } else {
            //add each guess to the guesses array
            guesses.push(" " + userGuess);
            showGuess.innerHTML = guesses;
            //decrement remaining guesses
            remaining--;
            showLeft.innerHTML = remaining;
        }
    } else if (remaining === 0) {
        //add to losses count
        losses++;
        alert("Out of guesses; you lose this round.");
        showLoss.innerHTML = losses;
        //reset guesses
        remaining = 9;
        guesses = [];
        showGuess.innerHTML = "";
        //call new psychicLetter
        random();
    }
};