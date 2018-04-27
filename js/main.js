
var guesses = [];
var counter = 0;

var randomNumber = Math.floor(Math.random() * 26) + 65;
var res = String.fromCharCode(randomNumber);
console.log("COMPUTER GUESSED:", res);


// function random_character() {
//     var chars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
//     var res= chars.substr( Math.floor(Math.random() * 62), 1);
//     return res;
// }

document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("USER TYPED: ", userGuess);
    guesses.push(userGuess);
    document.getElementById("guesses").innerHTML = guesses;

    checkGuess(userGuess);
}


function checkGuess(userGuess) {
    if (counter < 10) {
        counter++;
        document.getElementById("guesses-left").innerHTML = counter;
        if (userGuess === res) {
            console.log("Success");
            clearFields();
        }
        else {
            console.log("try again!");
        }
    } else if (counter === 10) {
        console.log("out of luck!!");
        clearFields();
    }
    return false;
}
function clearFields() {
    //reset guess value
    // guessInput.value = "";
    //reset counter variable to 0
    counter = 0;
    //set randomNumber to be a new random number

    // randomNumber = Math.floor(Math.random() * 26) + 65;
    // var res = String.fromCharCode(randomNumber);



    //added to put function out of call stack
    return false;
}