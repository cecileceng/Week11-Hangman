//Check the letters guessed versus the random word selected

var gameRef = require('./game.js');
var randoWord = gameRef.randoWord;

function findLetter(word, letter, start)
{
  if(start==null) start=0;
  var indexes = Array();
  console.log(letter);
  var index = word.toLowerCase().indexOf(letter.toLowerCase(),start);
  if(index == -1)
  {
    console.log('This is the base case.' + letter + ' not found.');
    return indexes;
  }
  else
  {
    console.log('Found ' + letter + ' at ' + index);
    indexes.push(index);
    indexes = indexes.concat(findLetter(word,letter,index+1));
    console.log(indexes);
    return indexes;
  }
}

var bunchablanks = Array(randoWord.length+1).join('_ ');

var inquirer = require("inquirer");
//exports.letter;
var letterGuessed;

inquirer.prompt([{
	type: 'input',
	name: 'letter',
	message: 'Enter a letter:'
}]).then(function(letterInput){
	letterGuessed = letterInput.letter;
	console.log(letterGuessed);
});

console.log(randoWord + ', ' + letterGuessed + ': ' + findLetter(randoWord, letterGuessed));
console.log(bunchablanks);
//ban and return 2
//banana 

//var letterInput = [letter];

//word.toLowerCase().indexOf(letter.toLowerCase())

