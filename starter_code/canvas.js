
let hangmanCanvas;

class HangmanCanvas {
  constructor(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  console.log('yo breh, im making a canvas');
  this.drawLines();
  this.drawHanger();
  this.drawHead();
  this.drawBody();
  this.drawLegL();
  this.drawLegR();
  this.drawArmL();
  this.drawArmR();
  }

  // createBoard() {
    // canvas : document.createElement("canvas"),
    // start : function() {
    //   CanvasRenderingContext2D.clearRect(0, 0, canvas.width, canvas.height);
    //   this.canvas.width = 800;
    //   this.canvas.height = 1200;
    //   this.context = this.canvas.getContext("2d");
    //   document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  // };

  drawLines() {
    this.ctx.beginPath();
    // for (i=0; i < Hangman.secretWord.length; i++)
    //   switch 
    this.ctx.moveTo(50, 50); this.ctx.lineTo(100, 50); 
    this.ctx.moveTo(120, 50); this.ctx.lineTo(170, 50); 
    this.ctx.moveTo(190, 50); this.ctx.lineTo(240, 50); 
    this.ctx.moveTo(260, 50); this.ctx.lineTo(310, 50); 
    this.ctx.moveTo(330, 50); this.ctx.lineTo(380, 50); 
    this.ctx.moveTo(400, 50); this.ctx.lineTo(450, 50); 
    this.ctx.stroke();
  }
  // drawLines() {
  //   this.ctx.beginPath();
  //   ctx.font = '48px serif';
  //   ctx.fillText('_ _ _ _ _ _ _', 50, 50);
  // } draw();

  drawHanger() {
    this.ctx.beginPath();
    this.ctx.moveTo(50, 750); this.ctx.lineTo(550, 750); 
    this.ctx.moveTo(300,750 ); this.ctx.lineTo(300,300 ); 
    this.ctx.moveTo(300,300 ); this.ctx.lineTo(600,300 ); 
    this.ctx.moveTo(600,300 ); this.ctx.lineTo(600,350 ); 
    this.ctx.stroke();
  }

  drawHead(){
    this.ctx.beginPath();
    this.ctx.arc(601, 400, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  drawBody(){
    this.ctx.beginPath();
    this.ctx.moveTo(600, 450); this.ctx.lineTo(600, 560); 
    this.ctx.stroke();
  }

  drawArmL(){
    this.ctx.beginPath();
    this.ctx.moveTo(600, 460); this.ctx.lineTo(480, 540); 
    this.ctx.stroke();
  }

  drawArmR(){
    this.ctx.beginPath();
    this.ctx.moveTo(600,460 ); this.ctx.lineTo(750,540 ); 
    this.ctx.stroke();
  }

  drawLegL(){
    this.ctx.beginPath();
    this.ctx.moveTo(600, 560); this.ctx.lineTo(500,700 ); 
    this.ctx.stroke();
  }

  drawLegR(){
    this.ctx.beginPath();
    this.ctx.moveTo(600, 560); this.ctx.lineTo(700, 700); 
    this.ctx.stroke();
  }

  writeCorrectLetter(index) {

  };

  writeWrongLetter(letter, errorsLeft) {

  };

}

//   gameOver() {

//   };

//   winner() {

//   };
// }

// canvas = document.getElementById('hangman');
//   // if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');