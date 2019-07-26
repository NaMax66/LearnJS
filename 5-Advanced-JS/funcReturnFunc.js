//Functions returning functions

function interviewQuestion(job){ //this is generic function
    if(job === 'designer'){
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if(job === 'teacher'){
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
};

var teacherQuestion = interviewQuestion('teacher'); //this is specific function that produces questions for teachers

teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');

designerQuestion('John');//evaluated from left to right

function examQuest(subject){
    if (subject === 'math'){
        return function (number) {
            console.log('Это билет по математике номер ' + number);
        }
    } else if(subject === 'physics'){
        return function (number) {
            console.log('Это билет по физике номер ' + number);
        }
    } else return function (number) {
        console.log('А это билет по какой-то неведомой фигне номер ' + number);
    }
}

examQuest('physics')(12);
examQuest('говнище')(10);