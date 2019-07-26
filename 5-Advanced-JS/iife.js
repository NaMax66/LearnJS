//Immediately Invoked Function Expressions

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) { //этно нужно, что создать scope который невидим для внешнего scope
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

