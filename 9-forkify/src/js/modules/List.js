
//API for creating and updating lists
import uniqid from 'uniqid'
export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        //[2,4,8] splice(1,2) -> return [4,8] and array wil be [2]
        //[2,4,8] slice(1,2)(2 not included) -> return 4 and array wil be [2, 4, 8]
        this.items.splice(index, 1); //mutate original array
    }

    updateCount(id, newCount) {
        let element = this.items.find(el => el.id === id); //return the element itself
        element.count = newCount;
    }
}
