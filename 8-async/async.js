//Async JS
const second = () =>{
    setTimeout((name) =>{
        console.log('Async Hey there ' + name);
    }, 2000, 'Max')
};
const first = () =>{
    console.log('Hey there');
    second();
    console.log('The end');
};

first();