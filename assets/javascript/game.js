// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];


var compare = function (userGuess, computerGuess) {
    console.log(userGuess, computerGuess);

    if (userGuess === computerGuess) {
        return 'tie';
    }
    if (
    (userGuess === 'r' && computerGuess === 's') || 
    (userGuess === 's' && computerGuess === 'p') || 
    (userGuess === 'p' && computerGuess === 'r') 
    ) {
        return 'win';
    }
    if (
        (userGuess === 's' && computerGuess === 'r') || 
        (userGuess === 'r' && computerGuess === 'p') || 
        (userGuess === 'p' && computerGuess === 's')
    ) {
        return 'loss';
    }
}

var win = 0
var loss = 0
var tie = 0


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

var userGuess = event.key;
console.log(computerChoices.indexOf(userGuess));
var indexOfUserGuess = computerChoices.indexOf(userGuess);
if (indexOfUserGuess != -1) {
    console.log('yo')
}

  // Determines which key was pressed.
  var userGuess = event.key;

//   document.getElementById('userchoice').textContent = userGuess;

  
  
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//   document.getElementById("computerchoice").textContent = computerGuess;
  
  
  // Alerts the key the user pressed (userGuess).
//   alert("User guess: " + userGuess);

  // Alerts the Computer's guess.
//   alert("Computer guess: " + computerGuess);

var result = compare(userGuess, computerGuess); 
    console.log(result);

if (result === 'win') {
    win++
}
if (result === 'loss') {
    loss++
}
if (result === 'tie') {
    tie++
}

var userChoiceElement = document.getElementById('userchoice');
var computerChoiceElement = document.getElementById('computerchoice');
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");
var tieText = document.getElementById("tie-text");



userChoiceElement.textContent = userGuess
computerChoiceElement.textContent = computerGuess
winsText.textContent = win;
lossText.textContent = loss;
tieText.textContent = tie;

};