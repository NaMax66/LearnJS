//About strings

let firstName = 'John';
let lasName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

//ES5

console.log('This is ' + firstName + ' ' + lasName +'. He was born in ' + yearOfBirth+
' Today, he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6

console.log(`This is ${firstName} ${lasName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lasName}`;

console.log(n.startsWith('J')); //it returns if it starts from J or not
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));

