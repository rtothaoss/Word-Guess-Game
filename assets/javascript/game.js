// Global Variables
// Global Variables

var rappers = ["lil pump", "lil uzi vert", "lil xan", "kodak black", "migos", "post malone"];
// var rappersNoSpace = rappers.map(function (rapper) {
//     return rapper.replace("/ /g", "");
// })
// console.log(rappersNoSpace);
var wins = 0;

var numberOfGuesses = 12;
var lettersGuessed = [];




// attempt at making img array for rappers
// attempt at making img array for rappers
// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'assets/images/lilpump.jpg';
// imgArray[0] = rappers[0]

// console.log(imgArray[0]);




// random rapper generator 
// random rapper generator 
var randomRapper = rappers[Math.floor(Math.random() * rappers.length)];
// alert(randomRapper)


var answerArray = [];
for (var i = 0; i < randomRapper.length; i++) {
    if (randomRapper.charAt(i) === ' ') {
        answerArray[i] = " ";
    } else {
        answerArray[i] = "_";
    }
}

var remainingLetters = randomRapper.length;

console.log(remainingLetters);


// What key is pressed and if statement
// What key is pressed and if statement
document.onkeyup = function(event) {

var userGuess = event.key;
// lettersGuessed.push(event.key);


// printing text to html
// printing text to html

var userChoiceText = document.getElementById('userchoice-text');
var rapperText = document.getElementById('rapper-text');
var rapperText1 = document.getElementById('rapper-text1');
var numberOfGuessesText = document.getElementById('numberOfGuesses-text');

// userChoiceText.textContent = lettersGuessed;
rapperText.textContent = answerArray;    
rapperText1.textContent = randomRapper;    
numberOfGuessesText.textContent = numberOfGuesses;

// var regex = /[(event.key)]/g;
// userGuess = randomRapper.match(regex)
// console.log(userGuess);



if (remainingLetters > 0) {
console.log(remainingLetters)

}


if (randomRapper.indexOf(userGuess) > -1) {
    console.log('found it');

    // loop over every randomRapper character and assign it to answerArray if it matched
    for (var i = 0; i < randomRapper.length; i++) {
        if (randomRapper.charAt(i) === userGuess) {
            answerArray[i] = userGuess;
        }
    }

    console.log(answerArray);
    remainingLetters--;
        

} else {
    console.log('not found');
    numberOfGuesses--;
    lettersGuessed.push(event.key);
    userChoiceText.textContent = lettersGuessed;
    // console.log(lettersGuessed);
}
if (numberOfGuesses === -1) {
    alert('you lose you big loser');
}



}



// figure out how to censor out the rapper names
// then write the if statement for the wins if they guess the name
// figure out how to get rid of repeat keystrokes
// figure out how to bring up an image of the rapper when his name comes up...probably an img array