let currentRound = -1;
let currentQuestion = 0;
let quizCard;
let quizTasks = [
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'Welcher bekannte Filmregisseur arbeitete am "Medal of Honor"-Spiel mit?',
        answer1: 'Quentin Tarantino',
        answer2: 'George Lucas',
        answer3: 'Steven Spielberg',
        answer4: 'James Cameron',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Minecraft',
        question: 'Wann wurde "Minecraft" veröffentlicht?',
        answer1: '2001',
        answer2: '2003',
        answer3: '2009',
        answer4: '2006',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'Die ikonische Musik der 2006 veröffentlichten Nintendo Wii Konsole wurde von wem komponiert?',
        answer1: 'Kazumi Totaka',
        answer2: 'Ennio Morricone',
        answer3: 'Fusajiro Yamauchi',
        answer4: 'Kawasaki Masaru',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'Im Juni 2020 ist der neueste Hit von Naughty Dog erschienen. Womit wurde der US-amerikanische Viedeospielentwickler bekannt?',
        answer1: 'Crash Bandicoot',
        answer2: 'Mario Kart 8 Deluxe',
        answer3: 'The Last of Us',
        answer4: 'Cyberpunk 2077',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'In der Spielereihe Fallout von Bethesda bezahlt ihr nach einer atomaren Katastrophe mit einer für viele wohl ziemlich fragwürdigen Währung. Womit bezahlt ihr in den meisten Fallout-Spielen?',
        answer1: 'Gummibänder',
        answer2: 'Kronkorken',
        answer3: 'Silber Münzen',
        answer4: 'Dollar',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'Wie heißen die Riesen-Monster in "Pokémon Schwert und Schild"?',
        answer1: 'Mega-Pokemon',
        answer2: 'Giga-Pokemon',
        answer3: 'Ultra-Pokemon',
        answer4: 'Dynamax-Pokemon',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: '"Red Dead Redemption" hat viele Spieler begeistert und auch der Nachfolger "Red Dead Redemption 2" erfreut sich großer Beliebtheit. Doch wie heißt eigentlich der Protagonist aus dem ersten Teil?',
        answer1: 'Arthur Morgan',
        answer2: 'John Marston',
        answer3: 'Michael De Santa',
        answer4: 'Hermit Crab',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'Pong gehört zu einer der ersten kommerziell erfolgreichsten Spiele der Welt, doch wann erschien das Tischtennisspiel auf dem Gaming-Markt?',
        answer1: '1972',
        answer2: '1982',
        answer3: '2003',
        answer4: '1991',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'Es sind fünf an der Zahl und sie erwarten euch an verschiedensten Standorten, wenn ihr GTA 5 komplett durchgespielt habt. Doch welches Gefährt hat Rockstar als Easter Egg in GTA 5 versteckt?',
        answer1: 'Concorde',
        answer2: 'UFOs',
        answer3: 'Pferdekutschen',
        answer4: 'Dixi-Toiletten',
    },
    {
        image: './assets/img/medalofhonor.jpg',
        imageDescription: 'Medalf of Honor',
        question: 'In "A Way Out" könnt ihr zusammen mit einem Freund den Gefängnisausbruch von Vincent und Leo planen und durchziehen, doch in welchem Gebiet steht das Gefängnis, aus dem die beiden flüchten?',
        answer1: 'Kanada',
        answer2: 'Kuba',
        answer3: 'Nordkalifornien',
        answer4: 'Norwegen',
    }
];


function renderQuiz() {
    let mainContainer = document.getElementById('mainContainer');

    mainContainer.innerHTML = /*html*/`
                                <div id="quizCard" class="card" style="width: 18rem;">
                                    <img src="./assets/img/headerLogo.jpg" class="card-img-top" alt="Did you know?">
                                    <div class="card-body">
                                        <h5 class="card-title">Bereit für ein ultimatives Gaming-Quiz?</h5>
                                        <p class="card-text">
                                            Teste dein Wissen über die faszinierende Welt der Videospiele und zeig, dass du ein wahrer Gamer bist!
                                        </p>
                                        <a href="#" class="btn btn-primary" onclick="nextQuestion()">Quiz Starten!</a>
                                    </div>
                                </div>
    `;
}

function nextQuestion(){
    quizCard = document.getElementById('quizCard');

    if (currentRound < quizTasks.length-1) {
        currentQuestion++;
        currentRound++;
        quizCard.innerHTML = '';
        quizCard.innerHTML = renderQuestion();
    } else {
        console.log('Es gibt keine weiteren Fragen');
    }
    
}

function previousQuestion() {
    quizCard = document.getElementById('quizCard');
    
    if (currentRound > 0) {
        currentQuestion--;
        currentRound--;
        quizCard.innerHTML = '';
        quizCard.innerHTML = renderQuestion();
    } else {
        console.log('Du bist bereits bei der ersten Frage angelangt');
    }
}

function renderQuestion() {
    return /*html*/`
                                        <img src="${quizTasks[currentRound].image}" class="card-img-top" alt="${quizTasks[currentRound].imageDescription}">
                                        <div class="card-body">
                                            <h5 class="card-title">${quizTasks[currentRound].question}</h5>
                                            <div class="card">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTasks[currentRound].answer1}</span>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTasks[currentRound].answer2}</span>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTasks[currentRound].answer3}</span>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTasks[currentRound].answer4}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span>${currentQuestion} von 10 Fragen</span>
                                            </div>
                                            <div class="btnContainer">
                                                <a href="#" class="btn btn-secondary lastQuestion" onclick="previousQuestion()">Vorherige Frage</a>
                                                <a href="#" class="btn btn-primary nextQuestion" onclick="nextQuestion()">Nächste Frage</a>
                                            </div>
                                        </div>
    `;
}