let currentRound = -1;
let currentQuestion = 0;
let currentScore = 0;
let quizCard;
let audioSuccess = new Audio("assets/audio/correct-answer.mp3");
let audioWrong = new Audio("assets/audio/wrong-answer.mp3");

let quizTasks = [
  {
    image: "./assets/img/medalofhonor.jpg",
    imageDescription: "Medalf of Honor",
    question:
      'Welcher bekannte Filmregisseur arbeitete am "Medal of Honor"-Spiel mit?',
    answer1: "Quentin Tarantino",
    answer2: "George Lucas",
    answer3: "Steven Spielberg",
    answer4: "James Cameron",
    rightAnswer: 3,
  },
  {
    image: "./assets/img/minecraft.jpg",
    imageDescription: "Minecraft",
    question: 'Wann wurde "Minecraft" veröffentlicht?',
    answer1: "2001",
    answer2: "2003",
    answer3: "2009",
    answer4: "2006",
    rightAnswer: 3,
  },
  {
    image: "./assets/img/wii.jpg",
    imageDescription: "Nintendo Wii",
    question:
      "Die ikonische Musik der 2006 veröffentlichten Nintendo Wii Konsole wurde von wem komponiert?",
    answer1: "Kazumi Totaka",
    answer2: "Ennio Morricone",
    answer3: "Fusajiro Yamauchi",
    answer4: "Kawasaki Masaru",
    rightAnswer: 1,
  },
  {
    image: "./assets/img/last-of-us.jpg",
    imageDescription: "The Last of Us",
    question:
      "Im Juni 2020 ist der neueste Hit von Naughty Dog erschienen. Womit wurde der US-amerikanische Viedeospielentwickler bekannt?",
    answer1: "Crash Bandicoot",
    answer2: "Mario Kart 8 Deluxe",
    answer3: "The Last of Us",
    answer4: "Cyberpunk 2077",
    rightAnswer: 1,
  },
  {
    image: "./assets/img/fallout.jpg",
    imageDescription: "Fallout",
    question:
      "In der Spielereihe Fallout von Bethesda bezahlt ihr nach einer atomaren Katastrophe mit einer für viele wohl ziemlich fragwürdigen Währung. Womit bezahlt ihr in den meisten Fallout-Spielen?",
    answer1: "Gummibänder",
    answer2: "Kronkorken",
    answer3: "Silber Münzen",
    answer4: "Dollar",
    rightAnswer: 2,
  },
  {
    image: "./assets/img/schwert-und-schild.jpg",
    imageDescription: "Pokémon Schwert und Schild",
    question: 'Wie heißen die Riesen-Monster in "Pokémon Schwert und Schild"?',
    answer1: "Mega-Pokemon",
    answer2: "Giga-Pokemon",
    answer3: "Ultra-Pokemon",
    answer4: "Dynamax-Pokemon",
    rightAnswer: 4,
  },
  {
    image: "./assets/img/red-dead-redemption.jpg",
    imageDescription: "Red Dead Redemption",
    question:
      '"Red Dead Redemption" hat viele Spieler begeistert und auch der Nachfolger "Red Dead Redemption 2" erfreut sich großer Beliebtheit. Doch wie heißt eigentlich der Protagonist aus dem ersten Teil?',
    answer1: "Arthur Morgan",
    answer2: "John Marston",
    answer3: "Michael De Santa",
    answer4: "Hermit Crab",
    rightAnswer: 2,
  },
  {
    image: "./assets/img/pong_Arcade.jpg",
    imageDescription: "Pong",
    question:
      "Pong gehört zu einer der ersten kommerziell erfolgreichsten Spiele der Welt, doch wann erschien das Tischtennisspiel auf dem Gaming-Markt?",
    answer1: "1972",
    answer2: "1982",
    answer3: "2003",
    answer4: "1991",
    rightAnswer: 1,
  },
  {
    image: "./assets/img/gta5.jpg",
    imageDescription: "Grand Theft Auto 5",
    question:
      "Es sind fünf an der Zahl und sie erwarten euch an verschiedensten Standorten, wenn ihr GTA 5 komplett durchgespielt habt. Doch welches Gefährt hat Rockstar als Easter Egg in GTA 5 versteckt?",
    answer1: "Concorde",
    answer2: "UFOs",
    answer3: "Pferdekutschen",
    answer4: "Dixi-Toiletten",
    rightAnswer: 2,
  },
  {
    image: "./assets/img/a-way-out.jpg",
    imageDescription: "A Way Out",
    question:
      'In "A Way Out" könnt ihr zusammen mit einem Freund den Gefängnisausbruch von Vincent und Leo planen und durchziehen, doch in welchem Gebiet steht das Gefängnis, aus dem die beiden flüchten?',
    answer1: "Kanada",
    answer2: "Kuba",
    answer3: "Nordkalifornien",
    answer4: "Norwegen",
    rightAnswer: 3,
  },
];

function renderQuiz() {
  let mainContainer = document.getElementById("mainContainer");

  mainContainer.innerHTML = renderMainContainer();
}

function startQuiz() {
  resetRound();

  quizCard = document.getElementById("quizCard");

  quizCard.innerHTML = "";
  quizCard.innerHTML = renderQuestion();
  quizCard.classList.add("onGoingQuizContainer");
  checkAnswer();

  document.getElementById("nextButton").style.display = "block";
  document.getElementById("showResultButton").style.display = "none";
}

function resetRound() {
  currentRound = 0;
  currentQuestion = 1;
  currentScore = 0;
}

function nextQuestion() {
  quizCard = document.getElementById("quizCard");

  if (checkForMaxRound()) {
    currentQuestion++;
    currentRound++;
    quizCard.innerHTML = "";
    quizCard.innerHTML = renderQuestion();
    calcProgressBar();
  } else {
    console.log("Es gibt keine weiteren Fragen");
  }
  checkAnswer();
}

function previousQuestion() {
  quizCard = document.getElementById("quizCard");

  if (minRoundOne()) {
    currentQuestion--;
    currentRound--;
    quizCard.innerHTML = "";
    quizCard.innerHTML = renderQuestion();
    calcProgressBar();
  } else {
    console.log("Du bist bereits bei der ersten Frage angelangt");
  }
  checkAnswer();
}

function calcProgressBar() {
  let percent = currentQuestion / quizTasks.length;
  percent = Math.round(percent * 100);

  document.getElementById("progress").innerHTML = renderProgressBar(percent);
}

function renderProgressBar(percent) {
  return /*html*/ `
                        <div class="progress-bar" role="progressbar" style="width: ${percent}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    `;
}

function selectAnswer(selection) {
  let selectedQuestionNumber = selection.slice(-1);
  let correctAnswer = `answer${quizTasks[currentRound].rightAnswer}`;
  if (selectedQuestionNumber == quizTasks[currentRound].rightAnswer) {
    document.getElementById(selection).classList.add("bg-success");
    audioSuccess.play();
    currentScore++;
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(correctAnswer).classList.add("bg-success");
    audioWrong.play();
  }
  document.getElementById("nextButton").disabled = false;
  document.getElementById("showResultButton").disabled = false;
}

function checkAnswer() {
  if (disablePrevBtnFirstRound()) {
    document.getElementById("previousButton").disabled = true;
  } else if (renderResultButton()) {
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("showResultButton").style.display = "block";
  } else {
    document.getElementById("previousButton").disabled = false;
  }
}

function showResult() {
  quizCard = document.getElementById("quizCard");

  quizCard.innerHTML = renderResultCard();
  quizCard.classList.remove("onGoingQuizContainer");
}

function checkForMaxRound() {
  return currentRound < quizTasks.length - 1;
}

function disablePrevBtnFirstRound() {
  return currentRound == 0;
}

function minRoundOne() {
  return currentRound > 0;
}

function renderResultButton() {
  return currentQuestion == quizTasks.length;
}

function renderMainContainer() {
  return /*html*/ `
                                <div id="quizCard" class="card">
                                    <img src="./assets/img/headerLogo.jpg" class="card-img-top" alt="Did you know?">
                                    <div class="card-body">
                                        <h5 class="card-title">Bereit für ein ultimatives Gaming-Quiz?</h5>
                                        <p class="card-text">
                                            Teste dein Wissen über die faszinierende Welt der Videospiele und zeig, dass du ein wahrer Gamer bist!
                                        </p>
                                        <div class="btnContainer centerButton">
                                        <button class="btn btn-primary" onclick="startQuiz()">Quiz Starten!</button>
                                        </div>
                                    </div>
                                </div>
    `;
}

function renderResultCard() {
  return /*html*/ `
                                    <img src="./assets/img/finish_line.jpeg" class="card-img-top resultCardImage" alt="Result image">
                                        <div class="card-body">
                                            <h5 class="card-title">Wir gratulieren dir!</h5>
                                            <div class="showResult">
                                                <span>Du hast ${currentScore} von ${quizTasks.length} Fragen richtig beantwortet!</span>
                                            </div>
                                            <div class="btnContainer centerButton">
                                                <button class="btn btn-primary nextQuestion" onclick="startQuiz()">Quiz wiederholen</button>
                                            </div>
                                        </div>
    `;
}

function renderQuestion() {
  return /*html*/ `
                                        <img src="${quizTasks[currentRound].image}" class="card-img-top quizHeadImage" alt="${quizTasks[currentRound].imageDescription}">
                                        <div id="progress" class="progress" style="height: 10px;">
                                            
                                        </div>
                                        <div class="card-body onGoingQuiz">
                                            <h5 class="card-title headline">${quizTasks[currentRound].question}</h5>
                                            <div id="answer1" class="card answerItem">
                                                <div class="card-body" onclick="selectAnswer('answer1')">
                                                    <span>${quizTasks[currentRound].answer1}</span>
                                                </div>
                                            </div>
                                            <div id="answer2" class="card answerItem" onclick="selectAnswer('answer2')">
                                                <div class="card-body">
                                                    <span>${quizTasks[currentRound].answer2}</span>
                                                </div>
                                            </div>
                                            <div id="answer3" class="card answerItem" onclick="selectAnswer('answer3')">
                                                <div class="card-body">
                                                    <span>${quizTasks[currentRound].answer3}</span>
                                                </div>
                                            </div>
                                            <div id="answer4" class="card answerItem"onclick="selectAnswer('answer4')">
                                                <div  class="card-body">
                                                    <span>${quizTasks[currentRound].answer4}</span>
                                                </div>
                                            </div>
                                            <div class="currentQuestionFromMax">
                                                <span>${currentQuestion} von ${quizTasks.length} Fragen</span>
                                            </div>
                                            <div class="btnContainer">
                                                <button id="previousButton" class="btn btn-secondary lastQuestion" onclick="previousQuestion()">Vorherige Frage</button>
                                                <button id="nextButton" class="btn btn-primary nextQuestion" onclick="nextQuestion()" disabled>Nächste Frage</button>
                                                <button id="showResultButton" class="btn btn-primary nextQuestion" onclick="showResult()" disabled>Zum Ergebnis</button>
                                            </div>
                                        </div>
    `;
}
