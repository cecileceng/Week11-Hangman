var game = require("./game.js");
var inquirer = require("inquirer");

inquirer.prompt([{
	name: 'letter',
	type: 'text',
	message: 'Enter a letter:',
	validate: function(str){
		var regEx = new RegExp("[a-zA-Z]")
		return regEx.test(str)
	}
}]).then(function(letterInput){
	var letter = letterInput.letter;
}