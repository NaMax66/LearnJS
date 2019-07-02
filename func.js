/**************************
 * Functions
 */

var birthYear = 1988;

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement
    + ' years.');
}

yearsUntilRetirement(1988, 'Max');

var name = 'Mike';

function str(name, years) {

    return name + ' is ' + years + ' years old!';

}

var statement = str(name, 15);

console.log(statement);

var isJohn = name === 'John' ? 'Yes' : 'No';
console.log(isJohn);

//0 '' null нихрена