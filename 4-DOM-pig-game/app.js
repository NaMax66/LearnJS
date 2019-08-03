/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

- 6 coding challenge included
*/

"use strict";

let scores, roundScore, activePlayer, targetScore, gamePlaying, previousDiceIsSix;

targetScore = 20;

function init() { //почему после new game targetScore undefined
    previousDiceIsSix = false;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousDiceIsSix = false;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('target-score-header').textContent = 'TARGET SCORE:' + targetScore;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.game-log').textContent = 'Let\'s role the dices!';
    clear_dice();
};

function rollTheDice(name, dice) {
    let diceDOM = document.querySelector(name);
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
}

function clearScores() {
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}

function setScoresToZero() {
    document.querySelector('#current-' + activePlayer).textContent = 0;
    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = 0;
}

function clear_dice() {
    document.querySelector('#dice-1').style.display = 'none'; //работаем с css
    document.querySelector('#dice-2').style.display = 'none';
}

function togglePlayer() {
    previousDiceIsSix = false;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
}

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    document.querySelector('.game-log').textContent = '';
    if (gamePlaying) {

        let dice1 = Math.floor(Math.random() * 6 + 1);

        rollTheDice('#dice-1', dice1);


        let dice2 = Math.floor(Math.random() * 6 + 1);

        rollTheDice('#dice-2', dice2);

        if ((dice1 === 6 || dice2 === 6) && previousDiceIsSix) {
            //player looses the score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            togglePlayer();
            clear_dice();
        }
        if (dice1 === 6 || dice2 === 6) {
            previousDiceIsSix = true;
        }

        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice2 + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            document.querySelector('.game-log').textContent = "You got ONE!"
            document.querySelector('.game-log').style.color = 'red';
            //next player
            //3.Update the round score IF the rolled number was NOT a 1
            previousDiceIsSix = false;
            roundScore = 0;
            document.getElementById('current-' + activePlayer).textContent = roundScore;

            setTimeout(() => {
                document.querySelector('.game-log').style.color = '#555';
                document.querySelector('.game-log').textContent = '';

            }, 2000);

            togglePlayer();
            setTimeout(clear_dice, 500);
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

        previousDiceIsSix = false;

        console.log(roundScore);
        //add current score to global score
        scores[activePlayer] += roundScore;
        roundScore = 0;

        //update the UI
        clearScores();
        setTimeout(clear_dice, 100);

        //Check if player won the game
        if (scores[activePlayer] >= targetScore) {
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            setTimeout(function() { alert('We have a winner') }, 10); //какой есть адекватный способ выполняться функции по-порядку?
            setTimeout(clear_dice, 500);
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        } else { // продолжаем игру только еслу у нас нет победителя
            torglePlayer();
            setTimeout(clear_dice, 500);
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

document.getElementById('target-score-input').addEventListener('keypress', function(e) {

    let key = e.which || e.keyCode;
    if (key === 13) { //это код интера
        targetScore = document.getElementById('target-score-input').value;
        document.getElementById('target-score-header').textContent = 'TARGET SCORE:' + targetScore;
    }

});