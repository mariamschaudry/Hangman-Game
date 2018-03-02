// Global Variables //

var wordArray = [
    "Spain",
    "France",
    "Pakistan",
    "Thailand",
    "Canada", 
    "Venezuela",
    "Madagascar",
    "Egypt", 
    "Malaysia", 
    "Japan", 
    "Mali"
];

// Number of wins. //

var wins = 0;

// Number of losses. //

var losses = 0; 

// Current player guess. //

var playerGuess = [];

// Number of guesses left. //

var remainingGuesses = 10;

// Incorrect player guesses. //

var incorrectGuesses = [];

// Where the words are displayed. //

var wordDisplay = '';  


// ------------------------------------------------------------------------------------------------------------- //

// Functions //

// Get a random word from the word array. //  

var word = wordArray[Math.floor(Math.random() * wordArray.length)]; 

console.log (word)

// The selected word should be split up. //

var splitWord = word.split('');

console.log(splitWord)

// Making the spaces for the letters to sit on. //

function spaces () {
    for (var i = 0; i < splitWord.length; i++) 
        wordDisplay.push('_');
    }

console.log(wordDisplay) 

function WordDisplay () {
    for (var m = 0; m < word.length; m++) {
        if (word [m] === playerGuess)
        wordDisplay[m] = word [m];
     }
}

// --------------------------------------------------------------------------------------------------------------- //
// The Game Play //

// First the player has to choose a letter. //

document.onkeyup = function (event) {
    playerGuess = event.key; }


// This is if the player chooses correct letters. //



