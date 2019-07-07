var bills = [124, 48, 268, 180, 42];
var tips = [];
var finalSpend = [];
var money = {
    bills,
    tips,
    finalSpend,
    tipCac(bills){
        for (let i = 0; i < bills.length; i++) {

            var tip = 0;
            var bill = bills[i];
            if (bill < 50) tip = bill * 0.2;
            else if (bill > 200) tip = bill * 0.1;
            else tip = bill * 0.15;
            tips[i] = tip;
        }
    },
    finalCalc: function (bills, tips) {

        if (tips.length === 0) {
            console.error("вы не посчитали чаевые!!! беда");
            stop();
        }
        if (bills.length !== tips.length){
            console.log('что-то пошло не так');
            stop();
        }

            for (let i = 0; i < bills.length; i++) {

                finalSpend.push(bills[i] + tips[i])
            }
    }
};

money.tipCac(money.bills);
money.finalCalc(money.bills, money.tips);

console.log(money);
console.log();

/** solution in video**/

var max = {
    fullName: 'Max Naid',
    bills: [124, 48, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){
            //determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 50){
                percentage = .2;
            } else if(bill >= 50 && bill < 200){
                percentage = .15;
            } else percentage = .1;

            //add result to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
};

max.calcTips();


var tomas = {
    fullName: 'Tomas Bambomas',
    bills: [77, 475, 110, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){
            //determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 100){
                percentage = .2;
            } else if(bill >= 100 && bill < 300){
                percentage = .1;
            } else percentage = .25;

            //add result to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
};

function calcAvarage(tips){
    var sum = 0;
    for (let i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}


tomas.calcTips();

max.average = calcAvarage(max.tips);
tomas.average = calcAvarage(tomas.tips);
console.log(max, tomas);

if (max.average < tomas.average){
    console.log(max.fullName + '\'s family pays less than ' + tomas.fullName);
}