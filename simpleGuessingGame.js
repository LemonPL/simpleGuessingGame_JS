var secretNumber = 7;

var guessNumber = Number(prompt("Guess the number?"));

while(guessNumber !== secretNumber){
	var guessNumber = Number(prompt("Guess the number?"));
	if (guessNumber < secretNumber ) {
		alert("Too low. Guess again!");
	}
	else if (guessNumber == secretNumber) {
		alert("You are correct!");
	}
	else{alert("Too high. Guess again!")};
}
// typeof guessNumber -> tells us about the data type of guessNumber
// Number(guessNumber) -> converting from string to number data type
// num++;  -> adding 1 to num
// num+=1;  -> adding 1 to num