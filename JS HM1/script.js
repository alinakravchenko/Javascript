window.addEventListener("DOMContentLoaded", (event)=>{
/*Task1
Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!»                     
 var fname = prompt("What your name?");
 var lname = prompt("What your lastname?");
    
     firstname.innerHTML = fname;
     lastname.innerHTML - lname;

     console.log("Hi! "+firstname.innerHTML+" "+lastname.innerHTML);*/


/*Task2
Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

      var year = prompt("Введите год своего рождения: ");
      year=2023-year;
    //alert("Вам "+year+" лет");
      
      //вариант два: 
      console.log("Вам "+year+" лет");*/

/*Task3
Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 

    var square=prompt("Введите длину стороны квадрата: ");
    var perimeter = square*4;
    alert("Периметр квадрата "+perimeter);*/

/*Task4
Запросите у пользователя радиус окружности и выведите площадь такой окружности

    var circle = prompt("Введите радиус окружности: ");
    var square = Math.PI*circle**2;
    console.log("Площадь окружности: "+square);*/

/*Task5
//Запросите у пользователя расстояние в км между двумя
//городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
//успеть вовремя.

    var km = prompt("Введите расстояние между городами А и Б: ");
    var time = prompt("За сколько часов вы хотите добраться из города А в город Б?");
    var speed = km/time;
    console.log("Необходимо двигаться со скоростью "+speed+"км/час"); */

/*Task6
//Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
    var dollar = prompt("Введите желаемую сумму в долларах: ");
    var USDeuro = 0.92174;
    var euro = dollar*USDeuro;
    console.log("Доллары в евро: "+euro); */

/*Task7
//Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку. 
var fleshka = prompt("Сколько флешка?");
var fleshkaFiles = (fleshka*1024)/820;
console.log("Это будет "+fleshkaFiles+" файлов на флешке");*/  

/*Task8
//Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может
//купить пользователь и сколько сдачи у него останется
var money = prompt("Сколько денег?");
    var chocoPrice = prompt("Сколько стоит шоколадка?");
    var chocoCount = Math.trunc(money/chocoPrice);
    var moneyChange = money % chocoPrice;
    console.log("Это будет "+chocoCount+" шоколадок, а останется " + moneyChange);*/

/*Task9
//Запросите у пользователя трехзначное число и выведите его задом наперед. 
var number = 573;
    var first = Math.trunc(number/100);
    var second = Math.trunc((number%100)/10);
    var third = (number%100)%10;
    console.log(number+" -> " + third+second+first);*/

/*Task10
//Запросите у пользователя целое число и выведите в ответ, четное число или нет
var number=575;
    console.log(number%2 == 1? "нечётное" : "чётное");
     
    const n =prompt(); //вариант 2
    alert(['Even', 'Odd'] [n * n % 2]); */
});