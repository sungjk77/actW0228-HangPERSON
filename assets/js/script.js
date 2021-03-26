// Global VARs
var defaultSeconds = 10;
var secondsLeft = defaultSeconds;
var ActualWord = "";
var varChosen;

// found this function on the internet
function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}
//
var btnStart = document.querySelector("#btnStart");
var elWord = document.querySelector("#word");
// TIMER
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

function sendMessage(varMessage) {
  timeEl.textContent = varMessage;
  console.log(varMessage);
}

function startTime(secondsLeft) {
  // Sets interval in variable
  console.log("start timer")
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage("You Lost!");
    }

  }, 1000);
}

var wordChoices = ["coding", "tough", "javascript"];
var dummyWord = "";
var ChosenLetters;

function ChooseWord() {
  varChosen = Math.floor(Math.random()* wordChoices.length);
  console.log(wordChoices[varChosen]);
  dummyWord = "";
  ActualWord = wordChoices[varChosen];
  for (var i=0; i<ActualWord.length; i++) {
     dummyWord += "_";
  }
  elWord.textContent = dummyWord;
}


btnStart.addEventListener("click", function() {
  ChooseWord();
  startTime(defaultSeconds);
  ChosenLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
});


//Guess the letters
function keydownAction(event) {
  // TODO: Complete keydown function
    
  console.log(event.key);
  for (var i=0; i<ActualWord.length; i++) {
    console.log(ActualWord.charAt(i));
     if(ActualWord.charAt(i) == event.key) {
       //dummyWord.replaceAt(i,event.key);
       dummyWord = setCharAt(dummyWord,i,event.key);
       elWord.textContent = dummyWord;
       if(dummyWord == ActualWord) {
        alert("winner!  You guessed the word: "+ActualWord);
      }
      } 
  }
 console.log(ChosenLetters);  
}

document.addEventListener("keydown", keydownAction);


