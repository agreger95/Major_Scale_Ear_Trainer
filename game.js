let userScore = 0;
let totalPlayed = 0;
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

$(".newInterval").on("click", function() {
  totalPlayed++;
  newInterval();
  playInterval(currentInterval);
});

$(".replayInterval").on("click", function() {
  if (currentInterval != "") {
    playInterval(currentInterval);
  };
});

$(".btn").on("click", function() {
  if (currentInterval != "") {
    let userGuess = $(this).attr("id");
    if(checkAnswer(userGuess)){
      userScore++;
      $("h2").text("Score: " + userScore + "/" + totalPlayed);
    }
    else{
      $("h2").text("Score: " + userScore + "/" + totalPlayed);
    }
    currentInterval = "";
  }
})

function playSound(name) {
  var audioSample = new Audio("public/sounds/" + name + ".m4a");
  audioSample.play();
};

function playInterval(interval) {
  playSound(rootNote);
  setTimeout(() => playSound(cmajScale[interval]), 1500);
}

function newInterval() {
  currentInterval = Math.floor(Math.random() * 8) + 1;
}

function checkAnswer(userGuess) {
  if (userGuess == currentInterval) {
    return true;
  } else {
    return false;
  }
};
