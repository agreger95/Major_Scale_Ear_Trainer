
let userScore = 0;
let rootNote = "C";
let currentInterval = "";
let cmajScale = {
  1: "C",
  2: "D",
  3: "E",
  4: "F",
  5: "G",
  6: "A",
  7: "B",
  8: "Octave_C"
};

function playSound(name){
  var audioSample = new Audio("public/sounds/" + name + ".m4a");
  audioSample.play();
};

function playInterval(interval){
  playSound(rootNote);
  setTimeout(() => playSound(cmajScale[interval]), 1500);
}

function newInterval(){
  currentInterval = Math.floor(Math.random() * 7) + 2;
}

function checkAnswer(){

};

// TODO: Add event handler to play interval buttons
// get random number from 1-7
// play root note C then play new not based off of random randomNumber
// check if user selected the right choice
// display result to user
