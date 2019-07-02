/*****************
 * Arrays
 */

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);
names[1] = 'Ben';
console.log(names[3]);

names[names.length] = 'Max';

names.push('Felex');
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.unshift('Mr.'); //добавить в начало

john.pop(); // удалить последний элемент
john.shift(); //удалить первый

john.indexOf(1900); // если -1 элемента нет

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer':
    'John is a designer';

console.log(isDesigner);

console.log('-----Challenge-----');

function calc(tip) {
    switch(true) {
        case (tip < 50):
            return tip * 0.2;
        case (tip > 200):
            return tip * 0.1;
        default:
            return (tip * 0.15);
    }
}
console.log(calc(300));

