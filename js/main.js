var i = 0;

function psychicGame() {
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log("USER TYPED: ", userGuess);
        var randomNumber = Math.floor(Math.random() * 26) + 65;
        var res = String.fromCharCode(randomNumber);
        console.log("COMPUTER GUESSED:", res); 67
        //User guess and computer letter are compare.
        if (res === userGuess) {
            console.log("your guess is correct");
            return true; //used to break a function
        } else {
            console.log("Incorrect guess! Try again.");
            i++;
            if(i===10){
                return false; //used to break a function
            }
        }
        console.log("COUNTER: ", i);
        console.log("-----------------------------");
        
    }
    
   
}

