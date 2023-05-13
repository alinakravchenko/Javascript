/*возвращает какое-то значение, способ получения данных от пользователя. Блокирующая команда var b = prompt("Что выводить?");
alert(b);*/

// alert("Hello World"); уведомления, блокирующая команда

/*обработчик события*/
/*window.addEventListener("DOMContentLoaded", (event) => {

    // var fname = prompt("What your name?");
    // var lname = prompt("What your lastname?");
    
    // firstname.innerHTML = fname;
    // lastname.innerHTML - lname;

    console.log(firstname.innerHTML);
    console.log(lastname.innerHTML);
});*/
 


window.addEventListener("DOMContentLoaded", (event) => {
    console.log(firstname.innerHTML);
    console.log(lastname.innerHTML);
    
    /*запросить и пользователя число и возвести во вторую степень
    var usernumber = prompt("Введите число");
    usernumber = usernumber * usernumber;
    console.log(usernumber);*/

    /*число, среднее из двух
    var usernumber  = prompt("Введите число 1");
    var usernumber2 = prompt("Введите число 2");
        usernumber3 = (usernumber*1+usernumber2*1)/2;
    console.log(usernumber3);*/

    /*из километров в мили
    const miles = 0.621371;
    var usernumber = prompt("Сколько километров");
    console.log("Это будет "+ usernumber*miles + " миль");*/
    
    /*объём флешки
    var fleshka = prompt("Сколько флешка?");
    var fleshkaFiles = (fleshka*1024)/820;
    console.log("Это будет "+fleshkaFiles+" файлов на флешке");*/
 
    /*var money = prompt("Сколько денег?");
    var chocoPrice = prompt("Сколько стоит шоколадка?");
    var chocoCount = Math.trunc(money/chocoPrice);
    var moneyChange = money % chocoPrice;
    console.log("Это будет "+chocoCount+" шоколадок, а останется " + moneyChange);*/

    /*var number = 573;
    var first = Math.trunc(number/100);
    var second = Math.trunc((number%100)/10);
    var third = (number%100)%10;
    console.log(number+" -> " + third+second+first);*/

    /*Узнать чётное или нечётное число
    var number=575;
    console.log(number%2 == 1? "нечётное" : "чётное");
     
    const n =prompt(); //вариант 2
    alert(['Even', 'Odd'] [n * n % 2]); */
});

