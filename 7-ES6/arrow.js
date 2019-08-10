//Lecture Arrow functions

//ES5
const years = [1999, 1965, 2012, 1937];
const ages = years.map(function (el) {
    return 2019 - el;
});
//console.log(ages);
//ES6
let ages6 = years.map(el => 2019 - el); //easiest way
//console.log(ages6);
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`;
});
//console.log(ages6);

//With this (lexical this)

//ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () { //this point to the global object
        var self = this; //костыль
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
            //console.log(this);
            //console.log(self);
        })
    }
};
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () { //this point to the global object
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
            console.log(this);
            //console.log(self);
        })
    }
};
//box6.clickMe();

// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => { //this point to the global object
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//             console.log(this);
//             //console.log(self);
//         })
//     }
// };
// box66.clickMe();

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));//костыль - передаем контекст this, который будет this
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function (friends) {
    const arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};
let friends2 = ['Bill', 'Felix', 'Jack'];
new Person('Mike').myFriends6(friends2);






















