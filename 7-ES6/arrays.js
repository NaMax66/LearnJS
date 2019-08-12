/////////////////////
// Arrays

const boxes = document.querySelectorAll('.box'); //returns node list

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes); //get array
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
//Lecture
//ES6
const boxesArr6 = Array.from(boxes); //we can put here NodeList
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5
/*for(var i = 0; i < boxesArr5.length; i++){
    if (boxesArr5[i].className === 'box blue'){
        //break;
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue';
}*/

for (const cur of boxesArr6) {
    //if (cur.className === 'box blue') continue;
    //or new one
    if (cur.className.includes('blue')) continue;
    cur.textContent = 'I changed to blue';
}

//finding elements
//ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);
var index = full.indexOf(true);
console.log(index);
console.log(ages[index]);

//ES6
//возвращает индекс элемента для которого колбек вернул true
let a = ages.findIndex(cur => cur >= 18);
console.log(ages[a]);
//можно еще проще

console.log(ages.find(cur => cur >= 18));












