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

var wins = [];

// Number of losses. //

var losses = []; 

// Current player guess. //

var playerAnswer = [];

// Number of guesses left. //

var remainingGuesses = 10;

// Incorrect player guesses. //

var incorrectGuesses = [];

// Where the words are displayed. //

var wordDisplay = []; 
// -------------------------------------------------------------------------------------------------------------//

// Functions //

// Get a random word from the word array. //

var word = wordArray[Math.floor(Math.random() * wordArray.length)];

console.log (word)

// Making the spaces for the letters to sit on. //

function spaces () {
    for (var i = 0; i < playerAnswer.length; i++) {
        wordDisplay.push("_");
    }
}
