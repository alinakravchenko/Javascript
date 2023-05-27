window.addEventListener("DOMContentLoaded", (event)=> {
/*Task 1
console.log(NumbersCheck(1,3)); */

/*Task 2
console.log(Factorial(13)); */

/*Task 3 
console.log(ConcatNumbers(1,2,3));*/

/*Task 4
console.log(Rectangle(5,7));*/

/*Task 5
console.log(IsSuperNumber(6)); 
console.log(IsSuperNumber(28));
console.log(IsSuperNumber(496));*/

/*Task 6
console.log(IsSuperDiap(6,500));*/

/*Task 7*/
console.log(TimeReturn(12,35,35));

/*Task 8*/
console.log(Second(11,5,28)+ " секунд");

/*Task 9*/
console.log(Hours(39928));

/*Task 10*/
console.log(DateDiffer(10, 22, 3, 1, 2, 3));

});

/*Task 1 Написать функцию, которая принимает 2 числа и возвра-
щает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.*/
function NumbersCheck(a, b) {
    if (!a || !b) return;
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
}

/*Task 2 Написать функцию, которая вычисляет факториал пере-
данного ей числа.*/
function Factorial(number)
{
    if (!number) return;
    let i = 1;
    let result = i;
    while (i < number) {
        i++;
        result = result * i;
    }
    return result;
}

/*Task 3 Написать функцию, которая принимает три отдельные
цифры и превращает их в одно число.*/
function ConcatNumbers (n1,n2,n3) 
{
    return Number(n1 + "" + n2 + "" + n3);
}

/*Task 4 Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата.*/
function Rectangle(height, length) {
    if (length === undefined) return height ** 2;
    return height * length;
}

/*Task 5 Написать функцию, которая проверяет, является ли пере-
данное ей число совершенным.*/
function IsSuperNumber(number) {
    let divisionsMassive = [];
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisionsMassive.push(i);
        }
    }
    for (let i = 0; i < divisionsMassive.length; i++) {
        sum += divisionsMassive[i];
    }
    if (number == sum) {
        return true;
    }    
    return false;
}

/*Task 6 Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только
те числа из диапазона, которые являются совершенными.*/
function IsSuperDiap(min, max)
{
    if(!min || !max) return "Не соответствует диапазону";
    let number = min; let result=0;
    while(number<max){
        number++;
        if(IsSuperNumber(number)) console.log(number);
    }
   
}

/*Task 7 Написать функцию, которая принимает время (часы, мину-
ты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были
переданы, то выводить их как 00.*/

function TimeReturn(h, m, s) {
    
    if (!m) m = '00';
    if (!s) s = '00';
    // return validateTime(h) + ':' + validateTime(m) + ':' + validateTime(s);
    return h + ":" + m  + ":" + s;
}
   
/*Task 8 Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах.*/
function Second(h, m, s) {
    return  h * 3600 + m * 60 + s;
}

/*Task 9 Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс»*/
function Hours(sec) {

    let hours = Math.floor(sec / 3600);
    let min = Math.floor(sec / 60) - hours * 60;
    let second = sec - (hours * 3600) - (min * 60);
    return TimeReturn(hours, min, second);
}

/*Task 10 Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыду-
щих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс»*/
function DateDiffer(fHour, fMin, fSec, sHour, sMin, sSec) {
    const SecondFirst = Second(fHour, fMin, fSec);
    const SecondSecond = Second(sHour, sMin, sSec);
    let ForSandF = SecondFirst + SecondSecond;
    console.log(ForSandF);
    const secondDiffer = SecondFirst - SecondSecond;
    return Hours(secondDiffer);
}
