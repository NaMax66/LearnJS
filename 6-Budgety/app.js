//First - plan, structure, architecture
let budgetController = (function() { //сохраняем объект с методом publicTest у кот. есть доступ к x и add()
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let calculateTotal = function (type) {
        let sum = 0;
        data.allItems[type].forEach((cur)=>{ //похоже на foreach(element in elements)
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    // let allExpenses = []; - so so way. It is better to put all these to an object
    // let allIncomes = [];
    // let totalExpenses = 0;

    //data structure
    let data = { // всегда лучше хронить все данные в одной структуре
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 //if -1 it doesn't exist
    };

    return {
        addItem: function(type, desc, val) {
            let newItem, ID;
            //create new id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // last id

            } else {
                ID = 0;
            }

            //create new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }

            //push it to data structure
            data.allItems[type].push(newItem);

            return newItem; //this will be useful in the future
        },

        deleteItem: function(type, id){
            //we should find the index of our id
            let ids, index;
            ids = data.allItems[type].map((current)=>{
                return current.id; //current - это объект со св-вами id, description, value
                //return 2; вернет 2 в каждом элементе
            }); //у ,map есть доступ к index element and array. map возвращает совершенно новый array
            index = ids.indexOf(id); //can be -1

            if (index !== -1){
                //удаляем элемент если он есть
                data.allItems[type].splice(index, 1); //удаляем элемент индекс
            }
        },

        calculateBudget: function(){
            //calculate total income and expenses

            calculateTotal('exp');
            calculateTotal('inc');
            //calculate  the budget: inc - exp

            data.budget = data.totals.inc - data.totals.exp; //считаем оставшиеся деньги
            //clac percentage

            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else {
                data.percentage = -1; //не существует
            }
        },

        getBudget: function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }    
        },
        
        testing: function() {
            console.dir(data);
        }

    };
})();

let UIController = (function() {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetValue: '.budget__value',
        budgetIncomeValue: '.budget__income--value',
        budgetExpensesValue: '.budget__expenses--value',
        budgetExpensesPercentage:'.budget__expenses--percentage',
        container: '.container'
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)//превращаем в число
            };
        },

        //Create HTML with placeholder txt
        addListItem: function(obj, type){

            let html, newHtml, element;
            if (type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id).
            replace('%description%', obj.description).
            replace('%value%', obj.value);

            //Insert the HTML into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); //https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML

        },
//TODO: dell item method
        deleteListItem: function(selectorID){ //передаем сюда itemID из DOM
            let child = document.getElementById(selectorID);
            let parent = child.parentNode;
            parent.removeChild(child);//that's the way to remove an element
        },

        clearFields: function(){
            let fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue); //returns List

            //Нужно сделать из него Array. Нужно найти метод прототипа

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach((cur, i, array)=>{ // у нас есть доступ к 3 эелментам current, index, array
                cur.value = ''; //делаем значение всех элементов пустым
            }) //переданная сюда функция выполнится для всех элементов массива
            fieldsArray[0].focus(); //переводим фокус на описание
        },

        displayBudget: function(obj){
          document.querySelector(DOMStrings.budgetValue).textContent = obj.budget;
          document.querySelector(DOMStrings.budgetIncomeValue).textContent = obj.totalInc;
          document.querySelector(DOMStrings.budgetExpensesValue).textContent = obj.totalExp;

          if(obj.percentage > 0){
              document.querySelector(DOMStrings.budgetExpensesPercentage).textContent = obj.percentage;

          }else {
              document.querySelector(DOMStrings.budgetExpensesPercentage).textContent = '--';

          }
        },

        getDOMStrings: function() {
            return DOMStrings; //we exposing the DOMStrings into the public
        }
    };


})();

let controller = (function(budgetCtrl, UICtrl) { //GLOBAL APP controller - объединяет два верхних модуля 

    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) { //or just 'e'
            if (event.key === 'Enter') {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };

    //У каждой функции должна быть приделльно простая задача простая задача
    let updateBudget = function () {
        //1. calc budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        let budget = budgetCtrl.getBudget();
        //3. display the budget
        UICtrl.displayBudget(budget);
    };

    let ctrlAddItem = function() { //когда кто-то нажал ентер или галочку. Сообщает другим модулям их функции

        let input, newItem;
        //1. Get input data
        input = UICtrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0){ //отличная проверка!

            //2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. add item to the user UI
            UICtrl.addListItem(newItem, input.type);

            //4. Clear the fields
            UICtrl.clearFields();
            //5.calc and up budget

            updateBudget();
        }

    };

    let ctrlDeleteItem = function (event) { //event можно передать в любую функцию
        let itemID, splitID, type, ID;
        //получаем id элемента для удаления
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; //смотрим куда мы нажали parentNode - DOM traversing
        if(itemID){ //смотрим есть ли id, так как id есть только у этих элементов
            //inc-1 split this up
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. dell item from data structure

            budgetCtrl.deleteItem(type, ID);

            //2. dell item from the UI

            UICtrl.deleteListItem(itemID);

            //3. Update and show the new budget

            updateBudget();
        }

    };

    return { //if we want smth to be public, we should return it
        init: function() {
            let s = 'Application has started!';
            console.log(s);

            //выставляем данные в 0
            UICtrl.displayBudget({
                    budget: 0,
                    totalInc: 0,
                    totalExp: 0,
                    percentage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();