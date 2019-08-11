////////////////////////////////////
// Lecture: Destructing

// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

//ES6
const [name6, age6] = ['John', 26];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
// names should be the same
const {firstName, lastName} = obj;
/*console.log(firstName);
console.log(lastName);*/

//to change names
const {firstName: a, lastName: b} = obj;


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);














