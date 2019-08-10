
//Lecture: Blocks and IIFEs

//this is a block like  iife (function(){a=1})()
//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(c);

//console.log(a + b);

//ES5
(function () {
    var a = 1;
})();

//console.log(a);





