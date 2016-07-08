//Random word is selected and exported
var wordsToGuess = ["Mulan", "Cinderella", "Aurora", "Jasmine", "Snow White", "Rapunzel", "Belle", "Pocohontas", "Tiana", "Ariel", "Merida"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;