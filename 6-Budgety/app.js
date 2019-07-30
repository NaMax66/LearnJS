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


    // let allExpenses = []; - so so way. It is better to put all these to an object
    // let allIncomes = [];
    // let totalExpenses = 0;

    //data structure

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, desc, val) {
            let newItem;

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

        testing: function() {
            console.log(data);
        }

    };


})();

let UIController = (function() {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function() {
            return DOMStrings; //we exposing the DOMStrings into the public
        }
    };


})();

let controller = (function(budgetCtrl, UICtrl) { //GLOBAL APP controller - объединяет два верхних модуля 

    let setupEventListeners = function() {
        let DOM = UIController.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) { //or just 'e'
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    let ctrlAddItem = function() {

        let input, newItem;
        //1. Get input data
        input = UIController.getInput();


        //2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add item to the user UI
        //4. calc budget
        //5. display the budget
    };

    return { //if we want smth to be public, we should return it
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();