/* global GameConfig, TargetContainer */

let currentColorDeviation = GameConfig.defaultColorDeviation,
    currentScore,
    highScore,
    targets;

function startGame() {
    targets = new TargetContainer(document.querySelector(".elements"));
    targets.setOnTargetClickedListener(onTargetClicked);
    highScore = 0;
    currentColorDeviation = GameConfig.defaultColorDeviation;
    currentScore = 0;
    updateUI();
}

function onTargetClicked(wasCorrectTarget) {
    if (wasCorrectTarget) {
        onCorrectTargetSelected();
    } else {
        onWrongTargetSelected();
    }
}

function onCorrectTargetSelected() {
    currentScore++;
    if (currentColorDeviation > GameConfig.minColorDeviation) {
        currentColorDeviation--;
    }
    updateUI();
}

function onWrongTargetSelected() {
    currentScore = 0;
    currentColorDeviation = GameConfig.defaultColorDeviation;
    updateUI();
}

function updateUI() {
    updateScore();
    targets.update(GameConfig.numberOfElements, currentColorDeviation);
}

function updateScore() {
    if (currentScore > highScore) {
        highScore = currentScore;
    }
    document.querySelector(".score .current").innerHTML = currentScore;
    document.querySelector(".score .highscore").innerHTML = highScore;
}

startGame();