window.addEventListener("DOMContentLoaded", (event)=>{
    /*Task 1 Подсчитать сумму всех чисел в заданном пользователем
диапазоне

var StartDiap;
var EndDiap;
do
{
    StartDiap=prompt("Введите начало диапазона");
    EndDiap=prompt("Введите конец диапазона");
}
while(Number.isNaN(StartDiap) || StartDiap==null || Number.isNaN(EndDiap) || EndDiap==null);
var sum=0;
 while (StartDiap<=EndDiap)
 {
    sum=sum+StartDiap++;
 }
console.log("Сумма всех чисел в диапазоне равна " + sum);*/

/* Task 2 Запросить 2 числа и найти только наибольший общий
делитель 

var firstNum;
var secondNum;
do{
    firstNum=prompt("Введите первое число: ");
    secondNum=prompt("Введите второе число: ");
}
while(Number.isNaN(firstNum) || firstNum==null || Number.isNaN(secondNum) || secondNum==null);

num=0;
var minNum = firstNum < secondNum ? firstNum : secondNum;
//var maxNum = firstNum > secondNum ? firstNum : secondNum;
var maxDel = 0;
while (num++ < minNum) {
    if (firstNum % num === 0 && secondNum % num === 0) maxDel = num;
}
console.log(maxDel);*/

/*Task 3 Запросить у пользователя число и вывести все делители
этого числа


var result = "";
do {
    var num = prompt("Введите число: ");
}
 while (Number.isNaN(num) || num === undefined || num === null)
var num2 = 0;

while (num2++ < num) {
    if (num % num2 === 0) 
    result += num2;
}
console.log("Все делители числа: " + num + "=" + result);*/

/*Task 4 . Определить количество цифр в введенном числе
do{
    var num = prompt("Введите число: ");
}
while (Number.isNaN(num) || num === undefined || num === null)
num2=1;
//производит округление числа до целых всегда в меньшую сторону
var num3=Math.floor(num/10);
while(num3>0){
    num2++;
    num3=Math.floor(num3/10);
}
var result = num2;
console.log("В данном числе: " + result + " цифр" );*/

/*Task 5 Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

i=0;
var positive = 0;
var negative = 0;
var nul = 0;
var even = 0;
var odd = 0;

while(i++ <10)
{
   var num = prompt("Введите число: ");
   if(num < 0){negative++;}

   else if(num>0){positive++;}

   else{nul++;}

   if(num%2===0){even++;}

   else if(num%2!==0){odd++;}
}
console.log("Отрицательных чисел: " + negative + ";" + " " + "Положительных чисел: "+positive + ";" + " "
+"Нулей: " + nul + ";"+ " " + "Чётных чисел: "+ even + ";" + " " + "Нечетных чисел: "+ odd + ";"); */

/*Task 6 Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется  

СЛОЖЕНИЕ НЕ РАБОТАЕТ

var result = "Ваш результат: ";
do {
    var calc = prompt("Введите первое число: ");
    var sign = prompt("Введите знак: ");
    var calc2 = prompt("Введите второе число: ");
    if (sign === '+') result = calc + calc2;
    if (sign === '-') result = calc - calc2;
    if (sign === '*') result = calc * calc2;
    if (sign === '/') result = calc / calc2;
    alert(result);
} while (confirm("Хотите ли решить еще один пример?"));*/

/*Task 7 Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифрычисла и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).

var number = prompt("Введите число");
    var left = prompt("Введите число сдвига");
    var massive = [];
    if (left > number.length)
        left = left%number.length;    
    for (var i = left; i < number.length; i++)
    {
        massive.push(number[i]);
    }
    for (var i = 0; i < left; i++)
    {
        massive.push(number[i]);
    }
    console.log(massive);*/


/*Task 8 Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK. 

 var day = 0;
    var next = true;
    var text = "";
    do 
    {
        ++day;
        switch(day)
        {
            case 1: 
                text = "This is понедельник. Дальше?";  
                next = confirm(text);
                break;
            case 2: 
                text = "This is понедельник 2. Дальше?";  
                next = confirm(text);
                break;
            case 3: 
                text = "This is понедельник 3. Дальше?";  
                next = confirm(text);
                break;
            case 4: 
                text = "This is понедельник 4. Дальше?";  
                next = confirm(text);
                break;
            case 5: 
                text = "This is понедельник 5. Дальше?";  
                next = confirm(text);
                break;
            case 6: 
                text = "This is понедельник 6. Дальше?";  
                next = confirm(text);
                break;
            case 7: 
                text = "This is понедельник 7. Дальше?";  
                next = confirm(text);
                if (next) day = 0;
                break;           
        }
    }
    while(next)*/

    /*Task 9 Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10
var result = '';
for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 11; j++) {
        result += `${i} умножить на ${j} = ` + i * j + '\n';
    }
}
console.log(result); */



/*Task 10 Игра Угадай Число
  alert("Загадай число from 0 to 100");
    var answer = false;
    var bottom = 0;
    var top = 100;
    while (!answer)
    {
        if (confirm("Число больше "+ Math.trunc((top+bottom)/2) +"?"))
        {
            bottom = Math.trunc((top+bottom)/2)+1;
        }
        else if (confirm("Число меньше "+ Math.trunc((top+bottom)/2) +"?"))
        {
            top = Math.trunc((top+bottom)/2);
        }
        else 
        {
            alert("Ваше число "+Math.trunc((top+bottom)/2));
            answer = true;
        }
    }

*/


});
