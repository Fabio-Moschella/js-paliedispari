//##############################################################################################################################
// FUNCTIONS
//##############################################################################################################################

function isPalindromWord(word) {
  for (i = 0; i < word.length; i++) {
    let char = word[i];
    let charMirror = word[word.length - 1 - i];
    console.log(char, charMirror);
    if (word !== char && charMirror !== word) {
      let isNotPalindromWord;
      return isNotPalindromWord;
    }
  }
}

//###############################################################
//MAIN
//###############################################################
const userWord = prompt("inserire una parola");
console.log(isPalindromWord(userWord));

// girafarrg

// i = 0 => 0 / length -1 -0
// i = 1 => 1 / length -1 -1
// i = 2 => 2 / length -1 -2
// i = 3 => 3 / length -1 -3
// i / lenght -1 -i
