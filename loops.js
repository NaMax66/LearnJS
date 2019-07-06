/********
 * Loops
 */

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}

console.log('*********')

i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (let i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

console.log('*********');

for (let i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}