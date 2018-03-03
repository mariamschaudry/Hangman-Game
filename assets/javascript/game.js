// Global Variables //

var wordArray = [
    "spain",
    "france",
    "pakistan",
    "thailand",
    "canada", 
    "venezuela",
    "madagascar",
    "egypt", 
    "malaysia", 
    "japan", 
    "mali"
];

// Number of wins. //

var wins = 0;

// Number of losses. //

var losses = 0; 

// Current player guess. //

var playerGuess = [];

// Number of guesses left. //

var remainingGuesses = 12;

// Incorrect player guesses. //

var incorrectGuesses = [];

// Where the words are displayed. //

var wordDisplay = [];


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
    console.log("in spaces")
    for (var i = 0; i < splitWord.length; i++) { 
       // console.log("in loop");
        wordDisplay.push('_');
    }
}
console.log(wordDisplay) 

function showWordDisplay () {
    for (var m = 0; m < word.length; m++) {
        if (word [m] === playerGuess){
            console.log("inside if");
            wordDisplay[m] = word [m];
            console.log(wordDisplay);
        } 
     }
     document.getElementById("wordDisplay").innerHTML=wordDisplay;
}

var incorrectIndex =0;
function showLettersGuessed () {
    for (var m = 0; m < word.length; m++) {
        if (word.indexOf(playerGuess) === -1 && incorrectGuesses.indexOf( playerGuess) === -1 ) { 
            incorrectGuesses[incorrectIndex++]=playerGuess;
        }
     document.getElementById("incorrectGuesses").innerHTML=incorrectGuesses;
    }
    
}

function reset() {
    remainingGuesses = 12;
    word = wordArray[Math.floor(Math.random() * wordArray.length)];
    wordDisplay=[];
    incorrectGuesses=[];
    incorrectIndex=0;
    spaces ();
    document.getElementById("wordDisplay").innerHTML=wordDisplay;
    document.getElementById("incorrectGuesses").innerHTML=incorrectGuesses;
}

spaces();
//document.querySelector('#wordDisplay').innerHTML = wordDisplay.join(" ");
showWordDisplay();
// --------------------------------------------------------------------------------------------------------------- //
// The Game Play //

// First the player has to choose a letter. //

document.onkeyup = function (event) {
    console.log(event.key)
    playerGuess = event.key; 
    showWordDisplay();
    showLettersGuessed();
    remainingGuesses--;
    if (remainingGuesses === 0) {
        reset(); // <--- Calling the function 
    }
    if (wordDisplay.indexOf('_') === -1) {
        showWordDisplay();
        alert("Congratulations! You guessed the word correctly!")
        reset();
    }
}

