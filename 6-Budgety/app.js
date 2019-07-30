//First - plan, structure, architecture
let budgetController = (function() { //сохраняем объект с методом publicTest у кот. есть доступ к x и add()

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
        //1. Get input data
        let input = UIController.getInput();
        console.log(input);

        //2. add the item to the budget controller
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