// Global Variables
// Global Variables

var rappers = ["lil pump", "lil uzi vert", "lil xan", "kodak black", "migos", "post malone"];
var wins = 0;
// var loss = 0;
var numberOfGuesses = 12;
var lettersGuessed = [];
var randomRapper;
var answerArray;
var remainingLetters;





// attempt at making img array for rappers
// attempt at making img array for rappers
// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'assets/images/lilpump.jpg';
// imgArray[0] = rappers[0]

// console.log(imgArray[0]);



// random rapper generator 
// random rapper generator 

// var randomRapper = rappers[Math.floor(Math.random() * rappers.length)];
// alert(randomRapper)

function beginRound() {

    randomRapper = rappers[Math.floor(Math.random() * rappers.length)];

    answerArray = [];
    for (var i = 0; i < randomRapper.length; i++) {
        if (randomRapper.charAt(i) === ' ') {
            answerArray[i] = " ";
        } else {
            answerArray[i] = "_";
        }
    }

    remainingLetters = randomRapper.length;

    console.log(remainingLetters);

}

beginRound();

var compare = function (remainingLetters, numberOfGuesses) {
    if (remainingLetters === 0) {
        return 'win';
    }
    if (remainingLetters > 0 && numberOfGuesses === 0) {
        return 'loss';
    }
}

// What key is pressed 
// What key is pressed 
document.onkeyup = function (event) {

    var userGuess = event.key;

    numberOfGuesses--;


    //gets rid of repeat keystrokes
    //gets rid of repeat keystrokes

    if (lettersGuessed.includes(userGuess)) {
        return;
    }

    function reset() {
        numberOfGuesses = 12;
        lettersGuessed = [];
        beginRound();
    }




    //win loss function
    //win loss function



    var result = compare(remainingLetters, numberOfGuesses)
    if (result === 'win') {
        wins++
        alert("you win!!!!")
        reset()
    }
    if (result === 'loss') {
        // loss++
        alert('you lose')
        reset()
    }

    console.log(result)


    // printing text to html
    // printing text to html

    var userChoiceText = document.getElementById('userchoice-text');
    var rapperText = document.getElementById('rapper-text');
    // var rapperText1 = document.getElementById('rapper-text1');
    var numberOfGuessesText = document.getElementById('numberOfGuesses-text');
    var winsText = document.getElementById('wins-text');

    // userChoiceText.textContent = lettersGuessed;
    rapperText.textContent = answerArray;
    // rapperText1.textContent = randomRapper;
    numberOfGuessesText.textContent = numberOfGuesses;
    winsText.textContent = wins;



    //game state
    if (remainingLetters > 0) {
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
        lettersGuessed.push(event.key);
        userChoiceText.textContent = lettersGuessed;
    }


    var rapperText = document.getElementById('rapper-text');
    rapperText.textContent = answerArray;
    console.log(remainingLetters);
}






