var rappers = ["lil pump", "lil uzi vert", "lil xan", "kodak black", "migos", "post malone"];
var wins = 0;
var numberOfGuesses = 12;

// random rapper generator 
// random rapper generator 
var randomRapper = rappers[Math.floor(Math.random() * rappers.length)];
// alert(randomRapper)




document.onkeyup = function(event) {

var userGuess = event.key;

var userChoiceText = document.getElementById('userchoice-text');
var rapperText = document.getElementById('rapper-text')

userChoiceText.textContent = userGuess;
rapperText.textContent = randomRapper;    


// var regex = /[(event.key)]/g;
// userGuess = randomRapper.match(regex)
// console.log(userGuess);

if (randomRapper.indexOf(userGuess) > -1 ) {
    console.log('found it')
} else {
    console.log('not found');
}


}






// var rapperElement = document.getElementById('rapper-text');

// rapperElement.textContent = rappers;
