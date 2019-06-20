var hangman;
var theCanv;

class Hangman {
  constructor(secretWord) {
    this.words = [];
    this.secretWord = "bonjour";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

// Functions
  getWord() {
    let randomWord = this.words[Math.floor(Math.random()*this.words.length)];
    return randomWord;
  };

  checkIfLetter(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) { // Number
      return false;
  } else if (event.keyCode >= 65 && event.keyCode <= 90) { // Alphabet upper case
      return true;
  } else if (event.keyCode >= 97 && event.keyCode <= 122) { // Alphabet lower case
      return true;
  }
    };

  checkClickedLetters(keyPress) {
    letters.includes(keyPress);
  };

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  };

  checkWinner() {
    if (secretWord === guessedLetter) {
      return true;
    }
  };

  addCorrectLetter(keyPress) {
    guessedLetter.includes(keyPress);
  };

  addWrongLetter() {
    errorsLeft -= 1;
  };
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  theCanv = new HangmanCanvas();

  // console.log(hangmanCanvas);
  
};


document.onkeydown = function (e) {
  

  hangman.checkIfLetter(e)
};
