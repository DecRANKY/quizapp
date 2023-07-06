let quizCard = document.getElementById('quizCard');
let mainContainer = document.getElementById('mainContainer');

function renderQuiz() {
    mainContainer.innerHTML = /*html*/`
                                <div id="quizCard" class="card" style="width: 18rem;">
                                    <img src="./assets/img/headerLogo.jpg" class="card-img-top" alt="Did you know?">
                                    <div class="card-body">
                                        <h5 class="card-title">Bereit für ein ultimatives Gaming-Quiz?</h5>
                                        <p class="card-text">
                                            Teste dein Wissen über die faszinierende Welt der Videospiele und zeig, dass du ein wahrer Gamer bist!
                                        </p>
                                        <a href="#" class="btn btn-primary" onclick="startQuiz()">Starte das Quiz!</a>
                                    </div>
                                </div>
    `;
}

function startQuiz(){
    quizCard.innerHTML = '';

}