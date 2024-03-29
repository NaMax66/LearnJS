//Super nad subclasses
//ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};
var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job); //we should know how the new
  this.olympicGames = olympicGames;
  this.medals = medals;
};



Athlete5.prototype = Object.create(Person5.prototype); //connected теперь можем вызывать методы этого объекта

//это можно добавить только полсе предыдущего кода
Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
};


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

//ES6

class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job
    }
    calculateAge(){
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

//create subClass
class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
