var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

var x = 'lastName';
console.log(john[x]);

john.job = 'designer';

john['isMarried'] = true;

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane['lastName'] = 'Monro';
jane.birthYear = 1993;

console.log(jane);