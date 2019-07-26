//TODO: Refactor

(function() {

    var questions = function() {
        var Question = function(questionPhrase, answers, correctAnswer) {
            this.questionPhrase = questionPhrase;
            this.answers = answers;
            this.correctAnswer = correctAnswer;
        };
        // Question.prototype.isCorrectAnswer = function(answer) {
        //     if (answer === this.correctAnswer) return true;
        //     else return false;
        // };

        //метод учителя
        // Question.prototype.displayQuestion = function() {
        //     console.log(this.questionPhrase);
        // for (i = 0; i < this.answers.length; i++) {
        //     console.log(i + ': ' this.answers[i]);
        // }

        // };

        var innerQuestions = [];

        innerQuestions.push(new Question("What's the capital of Russia?", ['1: London', '2: New York', '3: Moscow'],
            3));
        innerQuestions.push(new Question("Where can you find your socks in the morning?", ['1: In a refrigerator', '2: Under the bed', '3: In the oven'],
            2));
        innerQuestions.push(new Question("What's the main liquid on the Earth?", ['1: Water', '2: Oil', '3: Beer'],
            1));
        return innerQuestions;
    }(); //добавляя в конец круглые скобки мы как бы говорим программе: "а ну сделай ка это сейчас!"

    function printPossibleAnswers(answers) {
        for (i = 0; i < answers.length; i++) {
            console.log(answers[i]);
        }
    };

    function isAnswerCorrect(userAnswer, rightAnswer) {
        var intUserAnswer = parseInt(userAnswer, 10);
        if (rightAnswer === intUserAnswer) console.log('Это правильный ответ!');
        else console.log('К сожалению этот ответ неверный :(');
    };

    var someQuestionNo = Math.round(Math.random() * 2);
    //версия учителя
    //var n = Math.floor(Math.random() * questions.length)

    questionObject = questions[someQuestionNo];

    console.log(questionObject.questionPhrase);
    printPossibleAnswers(questionObject.answers);
    var userAnswer = window.prompt('See the question in the console. Input your answer here.');

    //teacher's code
    //var answer = parseInt(prompt('Please select the correct answer!));

    isAnswerCorrect(userAnswer, questionObject.correctAnswer);
})(); //пихаем все в эти рамки, чтобы если кто-то включит наш код в свой у него 
//не было конфликтов с именами переменных


// let UserAnswer;
//     while (UserAnswer != 'exit') {
//         var someQuestionNo = Math.round(Math.random() * 2);

//         console.log(someQuestionNo);

//         console.log(questions[someQuestionNo]);

//         UserAnswer = window.prompt('See the question in the console. Input your answer here.');
//         console.log(UserAnswer);
//     }