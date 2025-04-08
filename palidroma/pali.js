//##############################################################################################################################
// FUNCTIONS
//##############################################################################################################################

function isPalindromWord(word) {
  const lowerCaseWord = word.toLowerCase();
  const numberOfIterations = Math.ceil(word.lenght / 2);
  const lastIndex = word.lenght - 1;
  for (i = 0; i < numberOfIterations; i++) {
    let char = lowerCaseWord[i];
    let charMirror = lowerCaseWord[lastIndex - i];

    if (char !== charMirror) return false;
  }
  return true;
}

//###############################################################
//MAIN
//###############################################################
const userWord = prompt("inserire una parola");
const isUserWordPalindrome = isPalindromWord(userWord);
// operatore ternario
alert(isUserWordPalindrome ? "palindroma" : "Not Palindroma");
// girafarrg

// i = 0 => 0 / length -1 -0
// i = 1 => 1 / length -1 -1
// i = 2 => 2 / length -1 -2
// i = 3 => 3 / length -1 -3
// i / lenght -1 -i
