//Hoisting

calculateAge(1965); //в JS можно вызывать функии перед
// объявлением, так как они попадают в память перед выполнением

function calculateAge(year) { //this is function declaration
    console.log(2016 - year);
}

//retierment(1990);


var retierment = function (year) {
    console.log(65 - (2016 - year));
};

//variables

//console.log(age); //если обратиться к переменной тут - она будет неопределена
var age = 23; //а если удалить это поле, то будет свурху ошибка
//console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);

}

foo();

console.log(age);


