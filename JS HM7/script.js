window.addEventListener("DOMContentLoaded", (event)=> {
   /* Task1 Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необ-
ходимое количество и куплен или нет. */
var ShoppingList = [{
    name: "Soy Milk",
    quantity: 2,
    buy: 'No',
}, {
    name: "Chocolate 72%",
    quantity: 3,
    buy: 'No',
}, {
    name: "Red Wine",
    quantity: 1,
    buy: 'Yes',
}, {
    name: "Bread",
    quantity: 4,
    buy: 'No',
},
{
    name: "Water",
    quantity: 5,
    buy: 'Yes',
}, {
    name: "Peas",
    quantity: 10,
    buy: 'Yes',
},
];
/*console.log(AllList.call(ShoppingList));*/

/*addProduct.call(ShoppingList, {
    name: "Chocolate 78%",
    quantity: 1,
    buy: 'No'
});
console.log(ShoppingList);*/

/*buyProduct.call(ShoppingList, "Soy Milk");
console.log(ShoppingList);*/


/*Task 2 Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара.*/
var CheckList = [{
    name: "Soy Milk",
    quantity: 2,
    price: 12,
}, {
    name: "Chocolate 72%",
    quantity: 3,
    price: 33,
}, {
    name: "Red Wine",
    quantity: 1,
    price: 44,
}, {
    name: "Bread",
    quantity: 4,
    price: 23,
},
{
    name: "Water",
    quantity: 5,
    price: 12,
}, {
    name: "Peas",
    quantity: 10,
    price: 21,
},
];

/*console.log(CheckOnScreen.call(CheckList, 'price'));*/

/*console.log(WholePrice.call(CheckList));*/

/*console.log(BigPrice.call(CheckList));*/

/*console.log(AvgPrice.call(CheckList));*/



});

  /*Task 1*/

  /*Task 1.1
  Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.*/
function AllList() {
    let notBought = [];
    let bought = [];
    let result = [];
    this.forEach(function (item) {
        if (item.buy === 'No') {
            notBought.push(item)
        } else if (item.buy === 'Yes') {
            bought.push(item)
        }
    });
    return result.concat(notBought, bought);
};
/*Task 1.2 Добавление покупки в список.*/
function addProduct(options) {
    if (!options) return;
    const trueFalse = this.forEach(element => {
        if (element.name === options.name) return true;
    });
    switch (trueFalse) {
        case undefined:
            this.push(options);
            break;
        default:
            trueFalse.qty++;
    }
}
/*Task 1.3 Покупка продукта. Функция принимает название продукта
и отмечает его как купленный */
function buyProduct(prodName) {
    this.forEach(function (item) {
        if (item.name === prodName) {
            item.buy = 'Yes';
        };
    });
};

/*Task 2*/

/*Task 2.1 Распечатка чека на экран*/
function CheckOnScreen(property) {
    let result = ``;
    this.forEach(function (item) {
        for (let key in item) {
            result += `${key}: ${item[key]}\n`;
            if (key === property) result += `\n`
        }
    });
    return result;
}

/*Task 2.2 Подсчет общей суммы покупки*/
function forEachItem(property, array) {
    let result = 0;
    result = array.reduce((prev, item) => {
        return prev + item[property];
    }, 0);
    return result;
}

function WholePrice() {
    return forEachItem('price', this);
}

/*Task 2.3 Самая дорогая покупка в чеке*/
function BigPrice() {
    let price = [];
    this.forEach(function (item) {
        price.push(item.price);
    })
    return Math.max.apply(null, price);
}

/*Task 2.4 Средняя стоимость одного товара в чеке*/
function AvgPrice() {
    let result = forEachItem('price', this);
    return result / this.length;
}



