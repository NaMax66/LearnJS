//Lecture: Bind, call and apply
"use strict";
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' +
                timeOfDay + ', Ladies and gentlemen! I\'m ' +
                this.name + ' I\'m a ' +
                this.job + ' I\'m ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +
                this.name + '. I\'m a ' +
                this.job + '. I\'m ' +
                this.age + ' years old. Have a nice ' +
                timeOfDay + '.');
        }

    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//john.presentation('formal', 'morning');

//console.log('');


//john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);


var johnFriendly = john.presentation.bind(john, 'friendly');
//johnFriendly('morning');
//johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

//emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); // но здесь мы суём только один параметр.
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) { //very generic parameter
    return el >= limit;
}
let ages = arrayCalc(years, calculateAge);

let fullAgeJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullAgeJapan);