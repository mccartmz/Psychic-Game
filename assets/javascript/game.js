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

//create else if statements
document.onkeyup = function(e) {
    if (e.which === 13) {
        wins = 0;
        losses = 0;
        showWin.innerHTML = wins;
        showLoss.innerHTML = losses;
        remaining = 9;
        showLeft.innerHTML = remaining;
        guesses = [];
        showGuess.innerHTML = "";
        random();
    } else if (remaining > 0 && e.which >= 65 && e.which <= 90) {
        var userGuess = e.key;
        if (userGuess.toUpperCase() === psychicLetter) {
            wins++;
            alert("You guessed right! The letter was " + psychicLetter + ".");
            showWin.innerHTML = wins;
            remaining = 9;
            guesses = [];
            showGuess.innerHTML = "";
            random();
        } else {
            guesses.push(" " + userGuess);
            showGuess.innerHTML = guesses;
            remaining--;
            showLeft.innerHTML = remaining;
        }
    } else if (remaining === 0) {
        losses++;
        alert("No more guesses. Press Enter to try again.");
        showLoss.innerHTML = losses;
        remaining = 9;
        guesses = [];
        showGuess.innerHTML = "";
        random();
    }
};
