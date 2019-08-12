//Default parameters

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//
//     lastName === undefined ? lastName = 'Smith' : lastName; //выставляем значения по умолчанию
//     nationality === undefined ? nationality = 'american': nationality;
//
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }



//ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); //можно объявить не все параметры

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');