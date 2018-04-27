
var guesses = [];
var counter = 1;
var wins = 0;
var losses = 0;

var randomNumber = Math.floor(Math.random() * 26) + 65;
var res = String.fromCharCode(randomNumber);
console.log("COMPUTER GUESSED:", res);

document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key.toUpperCase();
    // userGuess.toUpperCase();
    console.log("USER TYPED: ", userGuess);
    guesses.push(userGuess);
    document.getElementById("guesses").innerHTML = guesses;
    checkGuess(userGuess);
}


function checkGuess(userGuess) {
    if (counter < 10) {
        document.getElementById("guesses-left").innerHTML = counter;
        if (userGuess === res) {
            wins++;
            console.log("Success");
            document.getElementById("wins").innerHTML = wins;
            clearFields();
        }
        else {
            console.log("try again!");
        }
        counter++;
    } else if (counter === 10) {
        console.log("out of luck!!");
        losses++;
        document.getElementById("losses").innerHTML = losses;
        clearFields();
    }
    return false;
}
function clearFields() {
    counter = 1;
    guesses = [];
    randomNumber = Math.floor(Math.random() * 26) + 65;
    res = String.fromCharCode(randomNumber);
    console.log("COMPUTER GUESSED AGAIN:", res);
    return false;
}