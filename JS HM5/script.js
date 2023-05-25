window.addEventListener("DOMContentLoaded", (event)=> {
   /*Task 1
   console.log(NumberPow(2,3));*/

   /*Task 2
   console.log(MaxDivider(50,125));*/

   /*Task 3
   console.log(FindMaxDigit(109876543210));*/

   /*Task 4 
  console.log(FindPrimeNumber(44));*/

  /*Task 5
  console.log(GetMassivePrimeMultiply(567754));*/

  /*Task 6*/
  console.log(Fibonacci(55));
});

/*Task 1 Написать функцию возведения числа в степень*/
function NumberPow(number, pow)
{
    if(pow == 1)
    return number;
    return number * (NumberPow(number, pow-1));
}

/*Task 2 Написать функцию поиска наибольшего общего делителя*/
function MaxDivider(number1, number2, start = 1, limit = 0, divider = 1)
{  
    if (number1 == 0 || number2 == 0) return 0;
    if (limit == 0) {
        if (number1 < number2) {
            limit = number1;
        } else {
            limit = number2;
        }
    }
    if (start > limit) return divider;
    if (number1 % start == 0 && number2 % start == 0) divider = start;    
    return MaxDivider(number1, number2, ++start,limit, divider);
}

/*Task 3 Написать функцию для поиска максимальной цифры в числе.*/
function FindMaxDigit(number)  
{
    if (number == 0) return 0;
    let digit = number % 10;
    let recDigit = FindMaxDigit(Math.trunc(number/10));
    if (recDigit > digit) {
        return recDigit;
    }
    else {
        return digit;
    }
}

/*Task 4 Написать функцию, которая определяет простое ли пере-
данное число.*/
function FindPrimeNumber(number)
{
    if (number < 2) {
        return "Число должно быть больше 1";
      } else if (number === 2) {
        return "Простое число";
      }
      let i = 2;
      const limit = Math.sqrt(number);
      while (i <= limit) {
        if (Math.trunc(number % i === 0)) {
          return "Составное число";
        }
        i +=1;
      } 
      return "Простое число";
}

/*Task 5 Написать функцию для вывода всех множителей передан-
ного числа в возрастающем порядке. */
function GetMassivePrimeMultiply(number)  //DZ5
{
    prime = true;
    for (let i = 2; i < number; i++)
    {
        if(number % i == 0)
        {
            prime = false;
            return i + " * " + GetMassivePrimeMultiply(number / i);
        }
    }
    if(prime)
        return number;
}

/* Task 6 Написать функцию, которая возвращает число Фибоначчи
по переданному порядковому номеру. */
function Fibonacci(limit)
{
    if (limit <= 0) return [];
    if (limit === 1 ) return [0];
  
    const result = [0, 1];
  
    while (true) {
      const sum = result[result.length - 2] + result[result.length - 1];
      if (sum >= limit) break;
      result.push(sum);
    }
  
    return result;
}
