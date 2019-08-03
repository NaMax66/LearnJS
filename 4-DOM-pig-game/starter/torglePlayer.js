function torglePlayer() {
    previousDiseIsSix = false;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
}