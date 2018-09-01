var clericQuestions = ['What disease is the focus of Oncology?', 'Who discovered the cure to polio?', ' People with diabetes are unable to produce or use ___ properly?', 'What is the largest organ on the body?', ' What does CPR stand for?']
var clericAnswers = ['cancer', 'jonas edward salk', ' insulin', 'skin', 'cardiopulmonary resuscitation']
var rangerQuestions = ["What is the tallest and thickest kind of grass?", "What creature's tongue weighs as much as a full-grown elephant?", "What does an Anemometer measure?", "What is the only bird that can fly backwards?", "Cork is harvested from the bark of what kind of tree?"]
var rangerAnswers = ["bamboo", "a blue whale", "wind speed", "hummingbird", "oak"]
var wizardQuestions = [" What is the first spell Hermione Granger ever says?", "What is the title of the first chapter of the 'Chamber of Secrets' in Harry Potter?", "Harry Potter, Ron Weasley and Hermione Granger in the movie Harry Potter and the Sorcerer's Stone helped to save the Sorcerer's Stone from being stolen. How old was the stone's co-creator, Nicolas Flamel? ", "What is Professor McGonagall's first name: Mary, Mercury, Minerva or Malinda?", "What does Dumbledore mean in English?"]
var wizardAnswers = ["oculus reparo", "the worst birthday", "665", "minerva", "bumblebee"]
var barbarianQuestions = ["What was the one physical weakness of Achilles?", "What weapon did Zeus use to overthrow Cronos?", "In what year were Nuclear Weapons invented?", "What type of weapon was like a long pole that an knight used when charging on a horse?", "In what year was the first Star Wars movie (A New Hope) released?"]
var barbarianAnswers = ["heel", "thunderbolts", "1945", "lance", "1977"]
var bardQuestions = ["Which animal is represented by the Oboe in Peter and the Wolf?", "What was the highest selling album of the 1980's?", "Who's 2013 World Tour was called 'The Ms. Carter Show?'", "Who was the lead singer of the band 'Queen'?",
    "What was Elvis Presley's middle name?"
]
var bardAnswers = ["duck", "thriller, by michael jackson", "beyonce", "freddie mercury", "aaron"]
var fighterQuestions = ["What war happened between 1939 - 1945?", "In what year did the French Revolution start?", "What war did George Washington fight in?", "What president a Civil War general?", "Muhammed Ali refused to fight in which war?"]
var fighterAnswers = ["world war two", "1789", "american revolution", "ulysses s. grant", "vietnam"]
var monkQuestions = ["Who invented the Rabies Vaccination?", "What is the World's biggest island?", "What color is a Welsh poppy?", "What is the painting 'La Gioconda' more commonly known as?", "In what year was William Shakespeare born in?"]
var monkAnswers = ["louis pasteur", "greenland", "yellow", "mona lisa", "1564"]

    function showTriviaQuestion(checkbox, level) {
        var questions;
        var answers;
        var txt;
        var loc_sel_char = localStorage.getItem("raceClass");
        var class_selected = loc_sel_char.split(",")[1];
        if ($(checkbox).is(":checked")) {
            if (class_selected.toLowerCase() == "cleric") {
                questions = clericQuestions;
                answers = clericAnswers;
            } else if (class_selected.toLowerCase() == "ranger") {
                questions = rangerQuestions;
                answers = rangerAnswers;
            } else if (class_selected.toLowerCase() == "wizard") {
                questions = wizardQuestions;
                answers = wizardAnswers;
            } else if (class_selected.toLowerCase() == "barbarian") {
                questions = barbarianQuestions;
                answers = barbarianAnswers;
            } else if (class_selected.toLowerCase() == "bard") {
                questions = bardQuestions;
                answers = bardAnswers;
            } else if (class_selected.toLowerCase() == "fighter") {
                questions = fighterQuestions;
                answers = fighterAnswers;
            } else if (class_selected.toLowerCase() == "monk") {
                questions = monkQuestions;
                answers = monkAnswers;
            }
            var answer = window.prompt(questions[level - 1], "");
            if (answer === null || answer === "") {
                txt = "You did not put in an answer.";
            } else {
                var correctAnswer = answer.toLowerCase().indexOf(answers[level - 1]);
                if (correctAnswer > -1) {
                getPoints(level, 4);
                    txt = "That's correct!";
                    document.getElementById("nextQuestion").style.display = "none";
                    var btn = document.createElement("BUTTON");
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
                    } else if (level == 5) {
                    	location.href = "Finish.html";
                    }
                    }
					btn.setAttribute("id", "nextLevelBtn");
                    btn.appendChild(t);
                    document.body.appendChild(btn);
                    document.getElementById("nextLevelBtn").align="center";
                } else {
                    txt = "Sorry, you did not enter the right answer."
                    document.getElementById("nextQuestion").disabled = false;
                }
            }
            document.getElementById("demo").innerHTML = txt;
        }
    }
