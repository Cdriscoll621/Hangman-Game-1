//Make an array of words
var wordList = ["Stargate", "Atlantis", "Ancients", "Asgard", "Nox", "ZPM", "Thor", "Ra"];

var randomWord;
var hiddenWord;
var updateWord;
var wordObject;

generateWord();

// ON PAGE Display the random word and replace each character with "_" =========================
var tempList = document.getElementById("list");
var hidden = document.createElement("p");
hidden.innerHTML = hiddenWord;
tempList.appendChild(hidden);
//============================================================================================





// Replace the hidden character in the word with the guessLetter===========================
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, parseInt(index)) + replacement + this.substr(parseInt(index)+1);
}
//==========================================================================================


//Pick a random word from the array and converts it to an object =====================================================

function pickRandomWord(){ 
	var randomNum = Math.floor(Math.random()*wordList.length);
	randomWord = wordList[randomNum].toLowerCase();
	console.log("Random Word is: " + randomWord);
	// console.log(randomWord + " has " + randomWord.length + " letters.")
	wordObject = Object.assign({},randomWord);
	// console.log(wordObject);
}

//====================================================================================================================

//converts each character in the word to a hidden character (such as # or _ )=========================================
function hideWord(){
	hiddenWord = randomWord.replace(/\w/gi, "#");
	console.log("The hidden version looks like this: " + hiddenWord);
	updateWord = hiddenWord;
}
//====================================================================================================================

// Generates and hides a new word ====================================================================================
function generateWord(){
	pickRandomWord();
	hideWord();
}
//====================================================================================================================


// Get keystroke from user ==============================================================
document.onkeyup = function(event){
	wordSearch(event.key);
}
//=======================================================================================


// Search word for the guessLetter=======================================================
function wordSearch(guessLetter){

	console.log("The user pressed " + guessLetter);

	for (key in wordObject){
		if (wordObject[key] == guessLetter){
			console.log(updateWord.replaceAt(key, guessLetter));
			updateWord = updateWord.replaceAt(key, guessLetter);
		}
	
	hidden.innerHTML = updateWord;
	
	if(updateWord == randomWord){
		// hidden.innerHTML = updateWord;
		// console.log("You Won!");
		// alert("You Won! The word was " + randomWord + "!" );
		confirm(newGame = "You Won! New Game?");

		if (newGame){
			generateWord();
		}
	}

}	
}

	


