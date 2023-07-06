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
        imageDescription: 'Medalf of Honor',
        question: 'Welcher bekannte Filmregisseur arbeitete am "Medal of Honor"-Spiel mit?',
        answer1: 'Quentin Tarantino',
        answer2: 'George Lucas',
        answer3: 'Steven Spielberg',
        answer4: 'James Cameron',
    },
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
        imageDescription: 'Medalf of Honor',
        question: 'Welcher bekannte Filmregisseur arbeitete am "Medal of Honor"-Spiel mit?',
        answer1: 'Quentin Tarantino',
        answer2: 'George Lucas',
        answer3: 'Steven Spielberg',
        answer4: 'James Cameron',
    },
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
        imageDescription: 'Medalf of Honor',
        question: 'Welcher bekannte Filmregisseur arbeitete am "Medal of Honor"-Spiel mit?',
        answer1: 'Quentin Tarantino',
        answer2: 'George Lucas',
        answer3: 'Steven Spielberg',
        answer4: 'James Cameron',
    },
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
        imageDescription: 'Medalf of Honor',
        question: 'Welcher bekannte Filmregisseur arbeitete am "Medal of Honor"-Spiel mit?',
        answer1: 'Quentin Tarantino',
        answer2: 'George Lucas',
        answer3: 'Steven Spielberg',
        answer4: 'James Cameron',
    },
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
        imageDescription: 'Medalf of Honor',
        question: 'Welcher bekannte Filmregisseur arbeitete am "Medal of Honor"-Spiel mit?',
        answer1: 'Quentin Tarantino',
        answer2: 'George Lucas',
        answer3: 'Steven Spielberg',
        answer4: 'James Cameron',
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
                                        <a href="#" class="btn btn-primary" onclick="nextQuestion()">Starte das Quiz!</a>
                                    </div>
                                </div>
    `;
}

function nextQuestion(){
    let quizCard = document.getElementById('quizCard');

    quizCard.innerHTML = '';

    for (let i = 0; i < quizTasks.length; i++) {
        const quizTask = quizTasks[i];
        quizCard.innerHTML = renderQuestion(i, quizTask);
    }

}

function renderQuestion(i, quizTaskIndex) {
    return /*html*/`
                                        <img src="${quizTaskIndex.image}" class="card-img-top" alt="${quizTaskIndex.imageDescription}">
                                        <div class="card-body">
                                            <h5 class="card-title">${quizTaskIndex.question}</h5>
                                            <div class="card">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTaskIndex.answer1}</span>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTaskIndex.answer2}</span>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTaskIndex.answer3}</span>
                                                </div>
                                            </div>
                                            <div class="card mb-4">
                                                <div class="card-body">
                                                    <span class="answerItem">${quizTaskIndex.answer4}</span>
                                                </div>
                                            </div>
                                            <div class="btnContainer">
                                                <a href="#" class="btn btn-secondary lastQuestion" onclick="nextQuestion(${i})">Vorherige Frage</a>
                                                <a href="#" class="btn btn-primary nextQuestion" onclick="nextQuestion(${i})">Nächste Frage</a>
                                            </div>
                                        </div>
    `;
}