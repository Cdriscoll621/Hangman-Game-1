//Make an array of words
var wordList = ["Stargate", "Atlantis", "Ancients", "Asgard", "Nox", "ZPM", "Thor", "Ra"];

//Pick a random word from the array

// Display the random word and replace each character with "_"

//listen for a key press from the user (ensure the key-press is only an alphabet)

// compare the key-press to each character in the word 

//if the character is a match, replace the character over the respective "_" (be sure to account for repeated characters)

//if not a match, draw the first part of the hangman character (or reduce life count)

//if all lives are lost do something

//if they guess the word right do something




// print the list of words

// for(i=0; i<wordList.length; i++){
// 	var new_word = document.createElement("p");
// 	new_word.innerHTML = wordList[i];
// 	// console.log(wordList[i]);
// 	tempList.appendChild(new_word);
// this.substr(index+replacement.length
// }
//===============================================

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, parseInt(index)) + replacement + this.substr(parseInt(index)+1);
}


//Pick a random word from the array  and make an new array from that word=====================================================
var randomNum = Math.floor(Math.random()*wordList.length);
var randomWord = wordList[randomNum].toLowerCase();
var hiddenWord = randomWord.replace(/\w/gi, "#");
var randomWord = wordList[randomNum].toLowerCase().split("");
console.log("Random Word is: " + randomWord);
// var wordLength = wordList[randomNum].length;
console.log(randomWord + " has " + randomWord.length + " letters.")
var updateWord = hiddenWord;


//convert randomWord to and object
var wordObject = Object.assign({},randomWord);
console.log(wordObject);
//======================================================================================



// Display the random word and replace each character with "_" =========================
var tempList = document.getElementById("list");
// var hiddenWord = randomWord.replace(/\w/gi, "#");
console.log("The hidden version looks like this: " + hiddenWord);
var hidden = document.createElement("p");
var random = document.createElement("p");
hidden.innerHTML = hiddenWord;
random.innerHTML = randomWord;
tempList.appendChild(hidden);
tempList.appendChild(random);



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
			console.log(guessLetter + " is at positon " + key);
			console.log(updateWord.replaceAt(key, guessLetter));
			updateWord = updateWord.replaceAt(key, guessLetter);
		}
	}

	console.log("new hidden word " + updateWord);
};







// 	var dumbArray = ['cat', 'dog', 'bird']

// 	dumbArray.forEach(function(val){
// 		console.log(val);
// 	});
// //=======================================================================================