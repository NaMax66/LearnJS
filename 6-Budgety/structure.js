//First - plan, structure, architecture
let budgetController = (function() { //сохраняем объект с методом publicTest у кот. есть доступ к x и add()
    let x = 23; //private var

    let add = function(a) { //private func
        return x + a;
    }

    return { //public func
        publicTest: function(b) {
            return (add(b));
        }
    }
})();



let UIController = (function() {
    return 5;
})();

let controller = (function(budgetCtrl, UICtrl) { //APP controller - объединяет два верхних модуля 
    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublic: function() {
            console.log(z);
            console.log(z);

        }
    }
})(budgetController, UIController);