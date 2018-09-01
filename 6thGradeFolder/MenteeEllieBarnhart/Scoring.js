var currentGP = Number(localStorage.getItem("gP"));
var gPFirstLevel = [100, 100, 100];
var gPSecondLevel = [200, 200, 200];
var gPThirdLevel = [300, 300, 300];
var gPFourthLevel = [400, 400, 400];
var gPFinalLevel = [500, 500, 500];


var currentXP = Number(localStorage.getItem("xP"));
var xPFirstLevel = [100, 100, 100];
var xPSecondLevel = [200, 200, 200];
var xPThirdLevel = [250, 200, 500];
var xPFourthLevel = [300, 350, 325];
var xPFinalLevel = [550, 580, 500];

function getPoints(level, questionNumber) {
  var xP;
  var gP;
  if (level == 1) {
    xP = xPFirstLevel;
    gP = gPFirstLevel;
  } else if (level == 2) {
    xP = xPSecondLevel;
    gP = gPSecondLevel;
  } else if (level == 3) {
    xP = xPThirdLevel;
    gP = gPThirdLevel;
  } else if (level == 4) {
    xP = xPFourthLevel;
    gP = gPFourthLevel;
  } else if (level == 5) {
    xP = xPFinalLevel;
    gP = gPFinalLevel;
  }
  if (questionNumber == 3) {
    currentXP = currentXP + xP[2];
    currentGP = currentGP + gP[2];
  } else if (questionNumber == 2) {
    currentXP = xP[1] + currentXP;
    currentGP = gP[1] + currentGP;
  } else if (questionNumber == 1) {
    currentXP = xP[0] + currentXP;
    currentGP = gP[0] + currentGP;
  } else if (questionNumber == 4) {
    currentXP = currentXP + xP[2] + 100;
    currentGP = currentGP + gP[2] + 100;
  }
  document.getElementById("currentPoints").innerHTML = "xP=" + currentXP + "<br> gP=" + currentGP;
  localStorage.setItem("xP", currentXP);
  localStorage.setItem("gP", currentGP);
}
