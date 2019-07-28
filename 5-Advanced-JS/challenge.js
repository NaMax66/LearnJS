// (function() {
//     class Question {
//         constructor(questionPhrase, answers, correctAnswer) {
//             this.questionPhrase = questionPhrase;
//             this.answers = answers;
//             this.correctAnswer = correctAnswer;
//         }
//     };

//     Question.prototype.displayQuestion = function() {
//         console.log(this.questionPhrase);
//         for (i = 0; i < this.answers.length; i++) {
//             console.log((i + 1) + ': ' + this.answers[i]);
//         }
//     };
//     Question.prototype.checkAnswer = function(answer) {
//         if (answer === this.correctAnswer) console.log('this is correct!');
//         else console.log('this is wrong!');
//     }

//     var questions = [];

//     questions.push(new Question("What's the capital of Russia?", ['1: London', '2: New York', '3: Moscow'], 3));
//     questions.push(new Question("Where can you find your socks in the morning?", ['1: In a refrigerator', '2: Under the bed', '3: In the oven'], 2));
//     questions.push(new Question("What's the main liquid on the Earth?", ['1: Water', '2: Oil', '3: Beer'], 1));

//     //добавляя в конец круглые скобки мы как бы говорим программе: "а ну сделай ка это сейчас!"

//     var n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestion();

//     var answer = parseInt(window.prompt('See the question in the console. Input your answer here.'));

//     questions[n].checkAnswer(answer);

//     // (function() {
//     //     var ans = '';
//     //     while (ans !== 'exit') {
//     //         var n1 = Math.floor(Math.random() * questions.length);
//     //         questions[n1].displayQuestion();
//     //         ans = parseInt(window.prompt('See the question in the console. Input your answer here.'));
//     //         questions[n].checkAnswer(ans);
//     //     }

//     // })();

//     // var roundGame = function() {
//     //     var ans = '';
//     //     while (ans !== 'exit') {
//     //         (function(ans) {

//     //             setTimeout(function() {
//     //                 var n1 = Math.floor(Math.random() * questions.length);
//     //                 questions[n1].displayQuestion();
//     //                 ans = parseInt(window.prompt('See the question in the console. Input your answer here.'));
//     //                 questions[n].checkAnswer(ans);
//     //             })
//     //         })
//     //     }
//     // };
//     // roundGame();

// })(); //пихаем все в эти рамки, чтобы если кто-то включит наш код в свой у него не было конфликтов с именами переменных

(function() {
    let Question = function(questionPhrase, answers, correctAnswer) {
        this.questionPhrase = questionPhrase;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.displayQuestion = function() {
            console.log(this.questionPhrase);
            for (i = 0; i < this.answers.length; i++) {
                console.log((i + 1) + ': ' + this.answers[i]);
            }
        };
        this.checkAnswer = function(answer, callback) {
            let sc;
            if (answer === this.correctAnswer) {
                console.log('this is correct!');

                sc = callback(true);
            } else {
                console.log('this is wrong!'); //JSON.stringify(t) для отладки

                sc = callback(false);
            }
            this.displayScore(sc);
        }
        this.displayScore = function(score) {
            console.log('Your current score is: ' + score);
            console.log('-------------------------');
        };

    };

    let questions = [];

    questions.push(new Question("What's the capital of Russia?", ['1: London', '2: New York', '3: Moscow'], 3));
    questions.push(new Question("Where can you find your socks in the morning?", ['1: In a refrigerator', '2: Under the bed', '3: In the oven'], 2));
    questions.push(new Question("What's the main liquid on the Earth?", ['1: Water', '2: Oil', '3: Beer'], 1));


    function score() { //closer
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    let keepScore = score();

    function displayScore(result) {
        let h2 = document.createElement('h2');
        let node = document.createTextNode('Your final result is: ' + result);
        h2.appendChild(node);

        let element = document.getElementById('main');
        element.appendChild(h2);
    }

    // let result = 0;

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('See the question in the console. Input your answer here.');

        if (answer === 'exit') {
            displayScore(keepScore(false));
            return;
        }
        //result += 
        questions[n].checkAnswer(parseInt(answer), keepScore);
        // console.log('Result score: ' + result);

        nextQuestion(); // функция вызывает сама себя.
    };
    nextQuestion();
})();