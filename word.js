//Check the letters guessed versus the random word selected
function findLetter(word, letter, start){
	if(start==null) start=0;
	var indexes = Array();
	var index = word.toLowerCase().indexOf(letter.toLowerCase(),start);
	if(index == -1) {
		return indexes;
	} else {
	indexes.push(index);
	indexes = indexes.concat(findLetter(word,letter,index+1));
	return indexes;
	}
};