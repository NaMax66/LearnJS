//Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };
//
// var Person = function(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//         };
//
//      // this is the function constructor
//
//
// Person.prototype.calculateAge =
//     function () {
//         console.log(2019 - this.yearOfBirth);
//     };
//
// Person.prototype.lastName = 'Smith'; //это свойство будет у всех объектов этого конструктора
//
// var john = new Person('John', 1990, 'teacher');
//
// john.calculateAge();
//
//
// var jane = new Person('Jane', 1988, 'designer');
// jane.calculateAge();
//
// var mark = new Person('Mark', 1948, 'retired');
//
// mark.calculateAge();

//Object.create
//
// var personProto = {
//     calculateAge: function () {
//         console.log(2019 - this.yearOfBirth);
//     }
// };
//
// var john = Object.create(personProto);
//
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// var jane = Object.create(personProto,{
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1969},
//     job: {value: 'designer'}
// });
//Primitives vs Objects

// var a = 23;
//
// var b = a;
//
// a = 46;
//
// console.log(a);
// console.log(b);
//
// //objects
// var obj1 = {
//     name:'John',
//     age: 26
// };
//
// var obj2 = obj1;
//
// obj1.age = 30;
//
// console.log(obj1.age);
// console.log(obj2.age);
//
//
// //functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };
//
// function change(a, b) { //мы передаем не сам объект, а только ссылку на него
//     a = 30;
//     b.city = 'San Francisco';
// }
//
//
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes  = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) { //very generic parameter
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - 0.67 * el);
    }else return -1;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);

console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);
















