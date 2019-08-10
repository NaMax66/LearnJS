//About let and const

//ES5
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller'; //mutate

//console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller'; cant do ot

//ES 5

function driversLicence5(passedTest) {
    if (passedTest){
        console.log(firstName); //undefined
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ' born in:' + yearOfBirth + ' is allowed to drive a car');

}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
    //console.log(firstName); //error //temporal dead zone
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest){
        firstName = 'John ES6';

    }
   console.log(firstName + ' born in:' + yearOfBirth + ' is allowed to drive a car');

}
driversLicence6(true);


var j = 23; //из-за двойного объявления эта переменная превратилась в 0

for (var j = 0; j < 5; j++){
    console.log(j);
}
//разные переменные
console.log(j,'outside');


let i = 23;

for (let i = 0; i < 5; i++){
    console.log(i);
} 
//разные переменные
console.log(i,'outside');







