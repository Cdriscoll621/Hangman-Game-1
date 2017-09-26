//Make an array of words
var wordList = ["Stargate", "Atlantis", "Ancients", "Asgard", "Nox", "ZPM"];

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
// }
//===============================================



//Pick a random word from the array =====================================================
randomNum = Math.floor(Math.random()*wordList.length);
randomWord = wordList[randomNum].toLowerCase();
console.log("Random Word is: " + randomWord);
// var wordLength = wordList[randomNum].length;
console.log(randomWord + " has " + randomWord.length + " letters.")
//======================================================================================


// Display the random word and replace each character with "_" =========================
var tempList = document.getElementById("list");
var hiddenWord = randomWord.replace(/\w/gi, "#");
console.log("The hidden version looks like this: " + hiddenWord);
var hidden = document.createElement("p");
hidden.innerHTML = hiddenWord;
tempList.appendChild(hidden);
//=======================================================================================



// Get keystroke from user ==============================================================
document.onkeyup = function(event){
	wordSearch(event.key);
	// console.log("User has presseed " + guessLetter);
}
//=======================================================================================


// Search word for the guessLetter=======================================================
function wordSearch(guessLetter){

	// var rgxp = new RegExp(guessLetter, "g");
	// var guessLetterIndex = randomWord.search(rgxp);
	console.log("The user pressed " + guessLetter);
	// console.log("The user pressed " + guessLetter + " and that is at the " + guessLetterIndex + " position in the word " + randomWord);

	// var updateWord = hiddenWord.replace(guessLetterIndex, guessLetter);
	// console.log("The updated word is " + updateWord);


	// console.log(randomWord.indexOf(guessLetter));


//Loops through the random word and compares each character to the guess character====================
	for(i=0; i<randomWord.length; i++){

		if (randomWord.charAt(i) === guessLetter){
			console.log("Position " + i + ") " + guessLetter + " is at position " + i + " in the word " + randomWord);

			// console.log(randomWord.indexOf(guessLetter));

			console.log("UPDATE: " + hiddenWord.replace(hiddenWord.charAt(i), guessLetter));
		}

		else{
			console.log("Position " + i + ") " + "'" + guessLetter + "'" + " is NOT at position " + i + " in the word " + randomWord)
		}
	}
//====================================================================================================


};

//=======================================================================================