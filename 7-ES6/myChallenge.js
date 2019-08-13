//Challenge
{
    class cityObject {
        constructor(type, name, yearOfEstablish) {
            this.type = type;
            this.name = name;
            this.yearOfEstablish = yearOfEstablish;
        }

        calcAge() {
            return new Date().getFullYear() - this.yearOfEstablish;
        }
    }

    class Park extends cityObject {
        constructor(type, name, yearOfEstablish, square, trees) {
            super(type, name, yearOfEstablish);
            this.yearOfEstablish = yearOfEstablish;
            this.square = square;
            this.trees = trees;
        }


    }

    class Street extends cityObject {
        constructor(type, name, yearOfEstablish, length, size = 'normal') {
            super(type, name, yearOfEstablish);
            this.length = length;
            this.size = size;
        }

        static getSize(size) {
            let sizeStr = 'normal';
            switch (true) {
                case (size > 10):
                    sizeStr = 'huge';
                    break;
                case (size > 5 && size < 10):
                    sizeStr = 'big';
                    break;
                case (size < 1):
                    sizeStr = 'small';
                    break;
            }
            return sizeStr;
        }
    }

    let idGen = (() => {
        let id = 0;
        return () => {
            id++;
            return id;
        }
    })();

    // for (let i = 0; i < 5; i++) {
    //     console.log(idGen()); //вывод 1 2 3 4 5
    // }
    const data = new Map();

    data.set('park' + idGen(), new Park('park', 'Oak Park', 1990, 1.2, 3125));
    data.set('park' + idGen(), new Park('park', 'National Park', 2001, 2.4, 1732));
    data.set('park' + idGen(), new Park('park', 'Green Park', 1855, .5, 411));
    data.set('street' + idGen(), new Street('street', 'Ocean Avenue', 1995, 7.1, Street.getSize(7.1)));
    data.set('street' + idGen(), new Street('street', 'Evergreen street', 2001, 4.5, Street.getSize(4.5)));
    data.set('street' + idGen(), new Street('street', '4th Street', 1899, 5.1, Street.getSize(5.1)));
    data.set('street' + idGen(), new Street('street', 'Sunset Boulevard', 1982, 12.1, Street.getSize(12.1)));


    function treeDensity(data) {
        for (let [key, value] of data) {
            if (!key.startsWith('park')) continue; //если не парк - мы это не считаем
            let density = Math.round(value.trees / value.square * 10) / 10;
            console.log(`${value.name} has a tree density of ${density} trees per square km`);
        }
    }

    function avgAgeMsg(data, type) {
        if (data.size === 0) return 'No data!';
        if (type !== 'park' && type !== 'street') return 'wrong object type!';

        let sum = 0;
        let num = 0;
        for (let [key, value] of data) {
            if (key.startsWith(type)) {
                sum += value.calcAge();
                num++;
            }
        }
        let typeStr = type + 's have';
        if (num === 1) {
            typeStr += ' has';
        }

        //костыль чтобы округлить до одного дробного
        console.log(`Our ${num} ${typeStr} an average of ${Math.round(sum / num * 10) / 10} years`);
    }

    function moreThan1000Trees(data) {
        for (let [key, value] of data) {
            if (!key.startsWith('park')) continue;
            if (value.trees > 1000) console.log(`${value.name} has more than 1000 trees`);
        }
    }

    function totalAndAvgLengthStreets(data) {
        if (data.size < 1) {
            console.log('There are no streets available!');
            return
        }
        let totalLength = 0;
        let numOfStreets = 0;

        for (let [key, value] of data) {
            if (!key.startsWith('street')) continue;
            numOfStreets++;
            totalLength += value.length;
        }

        totalLength = Math.round(totalLength * 10) / 10;

        console.log(`Our ${numOfStreets} streets have a total length of ${totalLength} km, with an average of ${totalLength / numOfStreets} km.`);
    }

    function allStreetSizeClassification(data) {
        for (let [key, value] of data) {
            if (!key.startsWith('street')) continue;
            console.log(`${value.name}, built in ${value.yearOfEstablish}, is a ${value.size} street.`);
        }
    }

    //console.log('---'.repeat(20));

    console.log('----PARK REPORT----');
    avgAgeMsg(data, 'park');
    treeDensity(data);
    moreThan1000Trees(data);

    console.log('----STREET REPORT----');
    totalAndAvgLengthStreets(data);
    allStreetSizeClassification(data);
}
