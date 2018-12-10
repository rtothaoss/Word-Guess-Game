var rappers = ["lil pump", "lil uzi vert", "lil xan", "kodak black", "migos", "post malone"];
var wins = 0;
var numberOfGuesses = 12;
var lettersGuessed = [];
// random rapper generator 
// random rapper generator 
var randomRapper = rappers[Math.floor(Math.random() * rappers.length)];
// alert(randomRapper)




document.onkeyup = function(event) {

var userGuess = event.key;
lettersGuessed.push(event.key);

var userChoiceText = document.getElementById('userchoice-text');
var rapperText = document.getElementById('rapper-text');
var numberOfGuessesText = document.getElementById('numberOfGuesses-text');

userChoiceText.textContent = lettersGuessed;
rapperText.textContent = randomRapper;    
numberOfGuessesText.textContent = numberOfGuesses;

// var regex = /[(event.key)]/g;
// userGuess = randomRapper.match(regex)
// console.log(userGuess);

if (randomRapper.indexOf(userGuess) > -1 ) {
    console.log('found it')
} else {
    console.log('not found');
    numberOfGuesses--;
    console.log(lettersGuessed);
}
if (numberOfGuesses === -1) {
    alert('you lose you big loser');
}



}






// var rapperElement = document.getElementById('rapper-text');

// rapperElement.textContent = rappers;
