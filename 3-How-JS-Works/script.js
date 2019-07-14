//Hoisting

// calculateAge(1965); //в JS можно вызывать функии перед
// // объявлением, так как они попадают в память перед выполнением
//
// function calculateAge(year) { //this is function declaration
//     console.log(2016 - year);
// }
//
// //retierment(1990);
//
//
// var retierment = function (year) {
//     console.log(65 - (2016 - year));
// };
//
// //variables
//
// //console.log(age); //если обратиться к переменной тут - она будет неопределена
// var age = 23; //а если удалить это поле, то будет свурху ошибка
// //console.log(age);
//
// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
//
// }
//
// foo();
//
// console.log(age);

//Lecture: Scoping
//First scoping example

var a = 'Hello!';
first();

function first() {
    var b = "hi!"; //hoisting - св-во языка, позволяет вызвать функуцию
                    //перед ее объявлением
    second();

    function second() { //эта фунция не увидит с из третьей, так как объявлена в другом пространстве
        var c = "Hey";
        console.log(a + b + c);
        third();//
    }
}

function third() {
    var d = 'John';
   // console.log(c);
    console.log(a + d);
}

