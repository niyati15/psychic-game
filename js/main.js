var i = 0;
var wins = 0;
var loss = 0;
var guesses = [];
function psychicGame() {
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log("USER TYPED: ", userGuess);
        guesses.push(userGuess);
        document.getElementById("guesses").innerHTML = guesses;
        var randomNumber = Math.floor(Math.random() * 26) + 65;
        var res = String.fromCharCode(randomNumber);
        console.log("COMPUTER GUESSED:", res); 67
        //User guess and computer letter are compare.
        if (res === userGuess) {
            console.log("your guess is correct");
            wins++;
            console.log("Wins: ",wins);
            document.getElementById("wins").innerHTML = wins;
            reset();
            // return;
        } else {
            console.log("Incorrect guess! Try again.");
            i++;
            if(i===10){
                // lost();
                loss++;
                document.getElementById("losses").innerHTML = loss;
                reset();
            }
        }
    }  
}
function reset(){
    wins = 0;
    loss = 0;
    i=0;

}
