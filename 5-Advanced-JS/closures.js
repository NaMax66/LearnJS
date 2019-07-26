function retirement(retirementAge) {
    return function(yearOfBirth) {
        var a = ' years left until retirement.';
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);

    }
}
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

let max = 1988;

retirementUS(max);
retirementGermany(max);
retirementIceland(max);


function interview(job) {
    let phrase;
    if (job === 'designer') {
        phrase = ', can you please explain what UX design is?';
    } else if (job === 'teacher') {
        phrase = ', what subject do you teach?'
    } else phrase = ', what do you do?';

    return function(name) {
        console.log(name + phrase);
    }
}

interview('designer')('Maria');
interview('teacher')('John');
interview('driver')('Igor');