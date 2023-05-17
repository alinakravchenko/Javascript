window.addEventListener("DOMContentLoaded", (event)=>{

    /*Task1 Запросить у пользователя его возраст и определить, кем он
является: ребенком (0–2), подростком (12–18), взрослым
(18-60) или пенсионером (60– ...).

var userAge = prompt("Введите ваш возраст: ");
var userAgeMessage = "";
if(userAge>=0&&userAge<=12)
{
userAgeMessage="Вы являетесь ребёнком";
}
else if(userAge>=12&&userAge<=18)
userAgeMessage="Вы являетесь подростком";
else if(userAge>=18&&userAge<=60)
userAgeMessage="Вы являетесь взрослым";
else if(userAge>=60&&userAge<=150)
userAgeMessage="Вы являетесь пенсионером";
else {
    userAgeMessage="Некорректные данные";
}
console.log(userAgeMessage);*/

/*Task2 Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,
2–@, 3–# и т. д). 

var number = prompt("Введите цифру от 0 до 9");
var VarNumber = "";
switch(number)
{
    case "1": 
    VarNumber="!"; break;

    case "2": 
    VarNumber="@"; break;

    case "3": 
    VarNumber="#"; break;

    case "4": 
    VarNumber="$"; break;

    case "5": 
    VarNumber="%"; break;

    case "6": 
    VarNumber="^"; break;

    case "7": 
    VarNumber="&"; break;

    case "8": 
    VarNumber="*"; break;

    case "9": 
    VarNumber="("; break;

    case "0": 
    VarNumber=")"; break;

    default: console.log("Такая цифра отсутвует");
}
console.log(VarNumber);*/

/*Task3 Запросить у пользователя трехзначное число и проверить,
есть ли в нем одинаковые цифры.  

!НЕ СОВСЕМ КОРРЕКТНО РАБОТАЕТ!

var number1 = prompt(" Введите трехзначное число");
var numberFirst = Number(number1[1]);
var numberSecond = Number(number1[2]);
var numberThird = Number(number1[3]);
var SameNumber = "";

if (numberFirst == numberSecond || numberSecond == numberThird || numberFirst == numberThird) {
    SameNumber = "В это числе есть одинаковые цифры";
} 
else
{
    SameNumber = 'В этом числе нет одинаковых цифр';
}
console.log(SameNumber); */

/*Task4 Запросить у пользователя год и проверить, високосный он
или нет. Високосный год либо кратен 400, либо кратен 4 и
при этом не кратен 100. 

var year = prompt("Введите год");
var leapyear;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    leapyear = "Высокосный год"
} else if (Number.isNaN(year)) {
    leapyear = "Некорректные данные, введите число";
} else {
    leapyear = "Невысокосный год";
}
console.log(leapyear); */

/*Task 5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом

var VarNumber = prompt("Введите пятиразрядное число");
var palindrome;
const n1 = (VarNumber / 10000);
const n2 = (VarNumber / 1000) % 10;
const n4 = VarNumber / 10) % 10;
const n5 = VarNumber % 10;
if (n1 === n5 && n2 === n4) {
    palindrome = "Данное число является палиндромом";
} else if (Number.isNaN(VarNumber)) {
    palindrome = "Введите число";
} else {
    palindrome = "Данное число не является палиндромом";
}
console.log(palindrome);*/

/*Task 6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
UAN или AZN, и получает в ответ соответствующую сумму

var usdAmount = prompt("Введите сумму в долларах");
var chooseCurrency = prompt("Введите, в какую валюту Вы хотите перевести: EUR, UAH или AZN");
var exchange;
const eur = 0.85;
const uah = 27.44;
const azn = 1.7;

// switch(usdAmount)
// {
//     case InvalidNumber(usdAmount)|| usdAmount<=0: console.log("Не правильно введена валюта. Попробуйте снова"); break;

//     case chooseCurrency === "EUR": exchange=usdAmount* eur; break;

//     case chooseCurrency==="UAH": exchange=usdAmount*uah; break;

//     case chooseCurrency==="AZN": exchange=usdAmount* azn; break;

//     default: console.log("Invalid Number, try again"); break;
// }

if (chooseCurrency.toUpperCase() === "EUR") {
    exchange = usdAmount * eur;
} else if (chooseCurrency.toUpperCase() === "UAH") {
    exchange = usdAmount * uah;
} else if (chooseCurrency.toUpperCase() === "AZN") {
    exchange = usdAmount * azn;
} else if (Number.isNaN(usdAmount)) {
    exchange = "Invalid number, try again";
}
console.log(exchange);*/

/*Task 7 Запросить у пользователя сумму покупки и вывести сумму
к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
до 500 – 5%, от 500 и выше – 7%. 

var sum = prompt("Введите сумму покупки: ");
var SumDiscount = "";
var discount;
var conclusion;
if (sum < 200 && sum >= 0) {
    SumDiscount = sum * 1;
    conclusion = "Сумма к покупке: " + SumDiscount;
} else if (sum >= 200 && sum <= 300) {
    SumDiscount = sum * 0.97;
    discount = "3 %";
    conclusion = "На данную сумму действует скидка в " + discount + " Старая цена: " + sum + " Цена со скидкой: " + SumDiscount;
} else if (sum > 300 && sum <= 500) {
    SumDiscount = sum * 0.95;
    discount = "5 %";
    conclusion = "На данную сумму действует скидка в " + discount + " Старая цена: " + sum + " Цена со скидкой: " + SumDiscount;
} 
else {
    SumDiscount = sum * 0.93;
    discount = "7 %";
    conclusion = "На данную сумму действует скидка в " + discount + " Старая цена: " + sum + " Цена со скидкой: " + SumDiscount;
}
console.log(conclusion); */

/*Task 8  Запросить у пользователя длину окружности и периметр
квадрата. Определить, может ли такая окружность поместиться в указанный квадрат

const circle = prompt("Введите длину окружности");
const squarePer = prompt("Введите периметр квадрата");
const diameter = circle / Math.PI;
const side = squarePer / 4;
var circleInSquare;
if (diameter <= side) {
    circleInSquare = "Круг поместится в квадрат";
} else if (circle < 0 || squarePer < 0 || Number.isNaN(circle) || Number.isNaN(squarePer)) {
    circleInSquare = "Некорректные данные";
} else {
    circleInSquare = "Круг не поместится в квадрат";
}
console.log(circleInSquare); */

/*Task 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
балла. После вопросов выведите пользователю количество
набранных баллов 

var question1 = prompt("Какой метод позволяет изменять порядок элементов массива на противоположный? \n а) sort(); \n б) join(); \n в) reverse() (Выберите букву с верным ответом)");
var question2 = prompt("Какие конструкции для циклов есть в javascript? \n а) только одна: for; \n б) три: for, while и do…while; \n в) две: for и while; (Выберите букву с верным ответом)");
var question3 = prompt("Как называется ситуация, когда функция вызывает саму себя? \n а) ошибка времени исполнения; \n б) рекурсия; \n в) цикл; (Выберите букву с верным ответом)");
var answerCheck = 0;

if (question1.toLowerCase() === 'в') {
    answerCheck += 2;
}
if (question2.toLowerCase() === 'б') {
    answerCheck += 2;
}
if (question3.toLowerCase() === 'б') {
    answerCheck += 2;
}
console.log( "У вас " + answerCheck + " баллa(ов)."); */



/*Task 10 Запросить дату (день, месяц, год) и вывести следующую
за ней дату. Учтите возможность перехода на следующий
месяц, год, а также високосный год.

 var day = Number(prompt("Укажите день"));
    var month = Number(prompt("Укажите месяц"));
    var year = Number(prompt("Укажите год"));
    var errorDate = false;
    var longMonth = [1,3,5,7,8,10,12];
    var shortMonth = [4,6,9,11];
    errorDate = year > 0 && year <= 9998 ? false : true;
    if (!errorDate)
    {
        var leapYear = false;
        if (year % 4 == 0)
            if (year % 100 == 0)
                if (year % 400 == 0)
                    leapYear = true;
            else
                leapYear = true;
    }

    errorDate = month > 0 && month <= 12 ? false : true;
    if (!errorDate) 
    {   
        errorDate = day > 0 && day <= 31 && longMonth.includes(month) ? false : true;
        errorDate = day > 0 && day <= 30 && shortMonth.includes(month) ? false : true;
        if (leapYear)
        {
            errorDate = day > 0 && day <= 29 && month == 2  ? false : true;
        }
        else
        {
            errorDate = day > 0 && day <= 28 && month == 2 ? false : true;
        }     
    }

    day = day + 1;

    if (day <= 31 && longMonth.includes(month) || 
        day <= 30 && shortMonth.includes(month) || 
        day <= 29 && month == 2 && leapYear ||  
        day <= 28 && month == 2)
        console.log (day + "." + month + "." + year);
    else
    {
        day = 1;
        month = month + 1;
        if (month <= 12)
        {
            console.log (day + "." + month + "." + year);
        }
        else
        {
            month = 1;
            year++;
            console.log (day + "." + month + "." + year);
        }
    } */


});