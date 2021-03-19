// //____________ЗАДАЧА 11
// /*Сервису гравировки украшений нужна функция, 
// которая бы автоматически считала цену гравировки, 
// в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). 
// Эта функция принимает строку, состоящую из слов разделённых 
// только пробелами (параметр message) и цену гравировки 
// одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала 
// общую стоимость гравировки всех слов в строке.
// */

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   const messageToArray = message.split(' ');
//   const  totalWords = messageToArray.length;
//   const totalPrice = totalWords * pricePerWord;

//   return totalPrice;
//   // Пиши код выше этой строки
// }

// //_____________ЗАДАЧА 12
// /*Дополни код функции makeStringFromArray(array, delimeter) так, 
// чтобы она возвращала в переменной string результат соединения 
// элементов массива array c разделителем delimeter - строку.*/

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//   string = array.join(delimeter);
  
  
 
//   // Пиши код выше этой строки
//   return string;
// }


// //_____________ЗАДАЧА 13
// /*Напиши функцию slugify(title) которая принимает заголовок статьи, 
// параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.*/

// function slugify(title) {
//   // Пиши код ниже этой строки
//   const titleToLowerCase = title.toLowerCase();
//   const titleToArray = titleToLowerCase.split(' ');
//   const slug = titleToArray.join('-');
 
//  return slug
//   // Пиши код выше этой строки
// }

// //_____________ЗАДАЧА 14
// /*Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.*/

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);


// //_____________ЗАДАЧА 15
// /*Дополни код так, чтобы в переменной allClients получился 
// массив всех элементов массивов oldClients и newClients.*/

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку


// //_____________ЗАДАЧА 16
// /*Напиши функцию makeArray(firstArray, secondArray, maxLength) для 
// создания нового массива со всеми элементами двух исходных 
// firstArray и secondArray. 
// Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция 
// должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.*/

// function makeArray(firstArray, secondArray, maxLength) {
//   // Пиши код ниже этой строки
//   const newArray = firstArray.concat(secondArray);
//   const newArrayToMaxLength = newArray.slice(0, maxLength);
  
//   return newArrayToMaxLength;
// }


//   //_____________ЗАДАЧА 17
//   /*Функция logNumbersInRange(start, end) логирует все целые 
//   числа в диапазоне от start до end включительно. 
//   Дополни тело функции так, чтобы она работала правильно.*/
  
//   const start = 3;
//   const end = 7;
  
//   for (let i = start; i <= end; i += 1) { // Дополни эту строку
//     console.log(i);
//   }
  
  
//   //_____________ЗАДАЧА 18
//   /*Напиши функцию calculateTotal(number), которая принимает 
//   целое число (параметр number) и возвращает сумму всех целых 
//   чисел от единицы и до этого числа. 
//   Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.*/
  
//   function calculateTotal(number) {
//     // Пиши код ниже этой строки
//     let result = 0;
//     for (let i = 1; i <= number; i += 1) {
//       result += i;
//     }
//   return result;
// }


// //_____________ЗАДАЧА 19
// /*Дополни код цикла for так, чтобы он последовательно логировал 
// все элементы массива fruits.*/

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }


// //_____________ЗАДАЧА 20
// /*Напиши функцию calculateTotalPrice(order), которая принимает один 
// параметр order - массив чисел, и рассчитывает общую сумму его элементов. 
// Общая сумма элементов должна сохраняться в переменной total, которая 
// возвращается, как результат работы функции.*/

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// 	for (let item of order) {
//     total += item;
//     }
//     // Пиши код выше этой строки
//     return total;
// }

// console.log(calculateTotalPrice([5, 12, 35, 14])); //Проверка


//_____________ЗАДАЧА 21
/*Напиши фукцнию findLongestWord(string) которая принимает произвольную 
строку состоящую только из слов разделённых пробелом (параметр string) 
и возвращает самое длинное слово в этой строке.*/
function findLongestWord(string) {
  
  const stringToArray = string.split(' ');
  let longestWord = '';
  
  for (let word of stringToArray) {     
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }  
  return longestWord;
}

//_____________ЗАДАЧА 22
/*Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она 
возвращала массив всех целых чисел от значения min до max.*/
function createArrayOfNumbers(min, max) {
  let numbers = [];
  // Пиши код ниже этой строки
  // - написать цикл перебора от min до max
  for (let i = min; i <= max; i++) {
    // - на каждой итерации добавлять число в массив
    numbers.push(i);
  }
    // Пиши код выше этой строки
    return numbers;
  }
console.log(createArrayOfNumbers(5, 15));


//_____________ЗАДАЧА 23
/*Напиши функцию filterArray(numbers, value), которая принимает 
массив чисел (параметр numbers) и возвращает новый массив, в котором 
будут только те элементы массива numbers, которые больше чем значение 
параметра value (число).*/
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  let result = [];
  for (const number of numbers) {
    if (number > value) {
      result.push(number);
    }
  }
  return result;
  // Пиши код выше этой строки
}
console.log(filterArray([1, 2, 3, 4, 5], 3));


//_____________ЗАДАЧА 24
/*Функция checkFruit(fruit) принимает строку с названием фрукта 
(параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.*/

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  
  return fruits.includes(fruit); // Дополни эту строку
}


//_____________ЗАДАЧА 25
/*Напиши функцию getCommonElements(array1, array2) которая получает 
два массива произвольной длины в параметры array1 и array2, и 
возвращает новый массив, состоящий из тех элементов, которые 
присутствуют в обоих исходных массивах.*/

function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  let newArray = [];
  for (const item of array1) {
    if (array2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;  
  // Пиши код выше этой строки
}
console.log(getCommonElements([8,15,23,20],[23,5,41,8]));


//_____________ЗАДАЧА 26
/*Выполни рефакторинг кода функции calculateTotalPrice(order) 
заменив цикл for на for...of.
function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}
*/

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let item of order) {
    total += item;
  }
  // Пиши код выше этой строки
  return total;
}

//_____________ЗАДАЧА 27
/*Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}
*/

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];
  
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  
  return filteredNumbers;
  // Пиши код выше этой строки
}

//_____________ЗАДАЧА 28
/*Дополни выражения остатка от деления так, чтобы код проходил тесты.*/

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;


//_____________ЗАДАЧА 29
/*Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.*/

function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let result = [];
  for (let i =  start; i <= end; i++) {
    if (i % 2 === 0) {
      result.push(i);
   }
  }
  return result
  // Пиши код выше этой строки
}


//_____________ЗАДАЧА 30
/*Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.*/
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}


  //_____________ЗАДАЧА 31
  /*Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
  
  возвращала первое число от start до end, которое делится на divisor без остатка;
  не использовала оператор break;
не использовала переменную number.

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }
  return number;
  // Пиши код выше этой строки
}
*/

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
  // Пиши код выше этой строки
}


//_____________ЗАДАЧА 32
/*Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).*/

function includes(array, value) {
  // Пиши код ниже этой строки
 for (const item of array) {
   if (item === value) {
     return true;
   }
 }
  return false
  // Пиши код выше этой строки
}