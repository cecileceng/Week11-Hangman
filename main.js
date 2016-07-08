var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randoWord = game.randoWord;
var bunchablanks = Array(randoWord.length+1).join('_ ');
var letterGuessed;
exports.letter;

function guessLetters(guessesLeft) {
	var guessesLeft = 10;
	if (guessesLeft > 0) {
		inquirer.prompt([{
		type: 'input',
		name: 'letter',
		message: 'Enter a letter:'
	}]).then(function(letterInput){
		letterGuessed = letterInput.letter;
		guessesLeft--;
		switch(state) {
			case "correctGuess":
				if (index >= -1) && guessesLeft > 0 {
					console.log("Nice job.")//or change the blanks to letters 
				}
				break;
			case "incorrectGuess":
				if (index = -1) && guessesLeft > 0 {
					console.log(letterGuessed + " is not part of this word. Please try again.") 
				}
				break;
			case "noGuessesLeft":
				if (guessesLeft !<= 0) {
					console.log("There are no more guesses. The end.")
				}
				break;
			case "gotWordRight":
				if (guessesLeft <= 0) {
					console.log("That's right! Nice job!");
				}
				break;
		}
	console.log(letterGuessed);
	console.log(randoWord + ', ' + letterGuessed + ': ' + findLetter(randoWord, letterGuessed));
	console.log(bunchablanks);
	})
};