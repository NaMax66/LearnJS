//Rest parameters

//ES5
function isFullAge5(limit) {
    //console.log(arguments); // аргуметы (типа args)
    //превращаем в массив
    var argsArr = Array.prototype.slice.call(arguments, 1); //отрезаем аргумент limit

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    });
}

isFullAge5(21, 1990, 1999, 1965);
console.log('***************');
//ES6
function isFullAge6(limit, ...years) {
    // rest param. Transform param to an array
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16,1990, 1999, 1965);

