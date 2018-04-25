//User enters a random letter
// This function is run whenever the user presses a key.

for( var counter=0; counter<10;counter++){
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log("userGuess: ", userGuess);
        document.getElementById("guesses").innerHTML = userGuess;
    
        //Computer generates a random letter
        var randomNumber = Math.floor(Math.random() * 26) + 65;
    
    
        var res = String.fromCharCode(randomNumber);
        console.log("res:", res);
    
        //User guess and computer letter are compared
    
        if (res === userGuess) {
            console.log("your guess is correct");
        } else {
            console.log("Incorrect guess! Try again.");
            counter--;
        }
        console.log(counter);
    }
}

