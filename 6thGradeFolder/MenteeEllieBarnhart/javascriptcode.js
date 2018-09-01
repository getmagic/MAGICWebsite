
var text = "You've chosen to be a";
var sel_char = ["race", "class"];
var indx = 0;

function readCharRadios(rtype) {
  //rtype is radio type. It can either be 'race' or 'class'
  document.getElementById("selectedChoices").innerHTML = "clicked next";
  document.getElementById("selectedChoices").style.display = "block";
  var radio_arr = document.getElementsByName(rtype.trim());
  for (var i = 0; i < radio_arr.length; i++) {
    if (radio_arr[i].checked) {
      // do whatever you want with the checked radio
      text = text + " " + radio_arr[i].value;
      sel_char[indx] = radio_arr[i].value;
      indx = indx + 1;
      break;
    }
  }
  if (rtype.trim() == "race") {
    //sel_char[0] = radio_arr[i].value;
    document.getElementById("selectedChoices").innerHTML = text;
    document.getElementById("race_select").style.display = "none";
    document.getElementById("class_select").style.display = "block";
  } else {
    //sel_char[1] = radio_arr[i].value;
    document.getElementById("class_select").style.display = "none";
    document.getElementById("selectedChoices").innerHTML = "<h1>" + text + "<\/h1>";
    document.getElementById("fin").style.display = "block";
  }
  localStorage.setItem("raceClass", sel_char);
}

function welcome() {
  var loc_sel_char = localStorage.getItem("raceClass");
  document.getElementById("header").innerHTML = "<h1>Welcome " + loc_sel_char + "!</h1><br>For this level's challenge, you have been asked to help reduce the number of litter in the world. Litter can <em> hurt </em> wildlife, destroy plants and make the city look bad. <br> A famer has hired you to clean up the city. <br>He is willing to pay you 100 gold pieces and you will have the opportunity to collect 300 gold pieces in total. <br>Once you have finished the first two checkboxes, you will get the opportunity to answer a Trivia Question, which is based on the class you chose. <br> <br> <b> Good luck!</b> <br> <br> <form><button formaction='FirstLevelChecklist.html'>Click here!</button></form>";
}

function showNextCheckbox() {
  if ((document.getElementById("checkButton1").checked) && (!document.getElementById("checkButton2").checked)) { 
  // if "checkButton1" is checked and "CheckButton2" is not checked, then display checkbox2, but not checkboxes 1 or 3
    document.getElementById("checkbox1").style.display = "none";
    document.getElementById("checkbox3").style.display = "none";
    document.getElementById("checkbox2").style.display = "block";
    document.getElementById("nextQuestion").disabled = true;
    //addPoints(0);
  } else if ((document.getElementById("checkButton2").checked) && (!document.getElementById("checkButton3").checked)) {
    // addPoints(1);
    document.getElementById("checkbox1").style.display = "none";
    document.getElementById("checkbox3").style.display = "block";
    document.getElementById("checkbox2").style.display = "none";
    document.getElementById("nextQuestion").style.display = "none";
  } else if (document.getElementById("checkButton3").checked) {
    document.getElementById("nextLevelButton").disabled = false;
    /*var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Next level!");
    btn.onclick = function() {
      if (level == 1) {
        location.href = "SecondLevelChecklist.html";
      } else if (level == 2) {
        location.href = "ThirdLevelChecklist.html";
      } else if (level == 3) {
        location.href = "FourthLevelChecklist.html";
      } else if (level == 4) {
        location.href = "FinalLevelChecklist.html";
      }
    }
    btn.appendChild(t);
    document.body.appendChild(btn); */
  }
}

function showButton() {
  if (document.getElementById("checkButton1").checked) {
    document.getElementById("nextQuestion").disabled = false;
  } else {
    document.getElementById("nextQuestion").disabled = true;
  }
}
