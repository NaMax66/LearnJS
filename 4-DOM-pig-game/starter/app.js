/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

- 6 coding challenge included
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;




//dice = Math.floor(Math.random() * 6 + 1);
//document.querySelector('#current-' + activePlayer).textContent = dice; это для доб текста
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //это для доб элемента
//var x = document.querySelector('#score-0').textContent; //используем для чтения
//console.log(x);



// setTimeout(function(){
//     document.querySelector('#dice-1').style.display = 'none'; //работаетм с css
//     document.querySelector('#dice-2').style.display = 'none'; //работаетм с css
// }, 5000);

function clear_dice() {
    document.querySelector('#dice-1').style.display = 'none'; //работаетм с css
    document.querySelector('#dice-2').style.display = 'none'; //работаетм с css
}

function torglePlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
}

setTimeout(clear_dice, 1000); // не работает. кубики исчезают сразу же если передать с ()

// setTimeout(function(){
//     alert("Boom!");
// }, 2000);

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('current-1').textContent = '0'; //можно не вводить #

// function btn(){}
// btn();
//document.querySelector('.btn-roll').addEventListener('click', btn); //можно почитать на MDN используем функцию без скобок, так
//как не хотим ее вызывать прямо сейчас
document.querySelector('.btn-roll').addEventListener('click', function() {
    //это анонимная функция
    //random number
    //2 Display the result
    //меняем картинку
    function rollTheDice(name, dice) {
        var diceDOM = document.querySelector(name);
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    }

    var dice1 = Math.floor(Math.random() * 6 + 1);

    rollTheDice('#dice-1', dice1);


    var dice2 = Math.floor(Math.random() * 6 + 1);

    rollTheDice('#dice-2', dice2);

    if (dice1 !== 1 && dice2 !== 1) {
        //add score
        roundScore += dice2 + dice1;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        torglePlayer();
        setTimeout(clear_dice, 1000);

    }



    //3.Update the round score IF the rolled number was NOT a 1
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    console.log(roundScore);
    //add current score to global score
    scores[activePlayer] += roundScore;
    roundScore = 0;

    //update the UI
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if player won the game
    if (scores[activePlayer] >= 20) {

        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

        setTimeout(function() { alert('We have a winner') }, 10); //какой есть адекватный способ выполняться функции по-порядку?
        setTimeout(clear_dice, 1000);
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else { // продолжаем игру только еслу у нас нет победителя
        torglePlayer();
        setTimeout(clear_dice, 1000);
    }





});