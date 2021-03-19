/*Пользователь вводит диапазон нужно вывести на экран все простые числа из этого диапазона. Простыми числами называются числа, которые имеют всего 2 делителя, то есть
делятся только на 1 и на самого себя!*/

/*Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.*/


/*Дано произвольное целое число n. Написать программу, которая
разбивает число n на цифры и выводит их на экран; 
подсчитывает сколько цифр в числе n; +
находит сумму цифр числа n;+
меняет порядок цифр числа n на обратный.+
Пример: ввожу число 123
цифр в числе = 3
сумма = 6(это значение получили следующим образом 1+2+3)
обратный порядок = 321
*/

/*Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет
*/

/*Требуется написать код, который выводит в консоль числа от 1 до n, где n — это целое число, с такими условиями:
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*/

/*Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем строку из дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case.

"пн, вт, ср, чт, пт, сб, вс"
"mn, ts, wd, th, fr, st, sn"
*/


// const n = 389542;
// const nStr = n.toString();
// const nStrLength = nStr.length;
// let total = 0;
// let reverse = '';

// // console.log(nStrLength);
// // console.log(typeof nStr);

// for (let i = 0; i < nStrLength; i += 1) {
//   console.log(nStr[i]);
//   // console.log('r', nStr[nStrLength - 1 - i]);
//   total = total + Number(nStr[i]);
// }

// for (let i = nStrLength - 1; i >= 0; i -= 1) {
//   reverse += nStr[i];
// }
// console.log('total', total);
// console.log('reverse', reverse);

// function removeChar(str){
//  //You got this!
//   const shortStr = str.slice(1, str.length() - 1);

  
//   return shortStr;
// };

// console.log(removeChar('memories'));

// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   for (let i = 0; p0 < p; i += 1) {
//     p0 = p0 * (percent/100) + p0 + aug;
      
//     years+=1;
//   }
//   return years
// }

// function flo() {
//   const days = 31;
//   let flovers = 1;

//   for (let i = 0; i < days; i += 1) {
//     flovers *= 2;
//   }
//   return flovers
// }

// console.log(flo());
// //____________________________________________________

// // Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// //____________________________________________________

// /*
//  * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
//  * и управление передаётся на следующую итерацию.
//  */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// //____________________________________________________

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9
// //____________________________________________________

// const matrix1 = [
//   [1, 2, 3, 4],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix1.length; i += 1) {
//   console.log('Подмассив матрицы matrix1[i]: ', matrix1[i]);
  
//   for (let j = 0; j < matrix1[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix1[i][j]: ', matrix1[i][j]);
//     total += matrix1[i][j];
//   }
// }

// console.log(total); // 45
// //____________________________________________________

// // split
// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]
//____________________________________________________

// // Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push('a');
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); // [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // Удаляем элементы из конца массива
// console.log(stack.pop()); //  3
// console.log(stack); // [1, 2]

// console.log(stack.pop()); //  2
// console.log(stack); // [1]

// console.log(stack.pop()); //  1
// console.log(stack); // []

// console.log(stack.pop()); //  undefined
// //____________________________________________________

// // Предположим, что у вас есть массив с названиями цветов в виде строк.
// const colors = ['red', 'green', 'blue'];

// // Следующая операция помещает один новый элемент перед вторым элементом.
// colors.splice(2, 1, 'purple');

// // Теперь массив цветов содержит четыре элемента
// // с новым элементом, вставленным во вторую позицию.
// console.log(colors); // ["red", "green", "purple", "blue"]

// // // Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
// // colors.splice(1, 0, 'yellow', 'pink');
// //____________________________________________________

// // const fnA = function() {
// //   console.log('Начала выполняться [fnA]');
// //   fnB();
// //   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// // };

// // const fnB = function() {
// //   console.log('Выполняется [fnB]');
// // };

// // console.log('Начал выполнение [main]');
// // fnA();
// // console.log('Продолжил выполняться [main] после выхода из [fnA]');

// // /*
// //  * Начал выполнение [main]
// //  * Начала выполняться [fnA]
// //  * Выполняется [fnB]
// //  * Продолжила выполняться [fnA] после выхода из [fnB]
// //  * Продолжил выполняться [main] после выхода из [fnA]
// //  */


// // //____________________________________________________
// // add(1, 2, 3); // 6
// // print('text'); // text

// // function add(a, b, c) {
// //   return console.log( a + b + c);;
// // }

// // function print(str) {
// //   console.log(str);
// // }
// // //____________________________________________________
// // const add1 = (...args) => {
// //   console.log(args);
// // };

// // add1(add, print, 3); // [1, 2, 3]

// // //____________________________________________________

// // function getExtremeElements(array) {
// //   const lastIndex = array.length - 1;
// //   console.log(array.length);
// //   const result = [array[0], array[lastIndex]];
// //   return result
// // }
  
// // console.log(getExtremeElements([1, 5, 9, 8]));


// // function findLongestWord(string) {
// //   let words = string.split(' ');
// //   let longestWord=words[0];
// //   for (let word of words) {
// //     if (word.length > longestWord.length) {
// //       word=longestWord;
// //     }
// //   }
// //     return longestWord;
// //   // Пиши код выше этой строки
// // }
// // console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // findLongestWord('Google do a roll');
// // findLongestWord('May the force be with you');

// /*Закодировать слово алфавит, поставив в соответствие букве её номер в алфавите.
// - "алфавит" - сделать массивом строку +
// - перебор букв + 
// - сравнение и замена буквы на цифру +
// - сделать массив строкой
//  - вывести в консоль результат
//  */
// const word = 'алфовит';
// const wordToArray = word.split('');
// console.log('алфавит', wordToArray);

// for (const letter of wordToArray) {
//   if (letter === 'а') {
//     wordToArray.splice(wordToArray.indexOf(letter), 1, '1')
//   } else if (letter === 'л') {
//     wordToArray.splice(wordToArray.indexOf(letter), 1, '13')
//  } else if (letter === 'ф') {
//     wordToArray.splice(wordToArray.indexOf(letter), 1, '22')
//  } else if (letter === 'в') {
//     wordToArray.splice(wordToArray.indexOf(letter), 1, '3')
//  } else if (letter === 'и') {
//     wordToArray.splice(wordToArray.indexOf(letter), 1, '10')
//  } else if (letter === 'т') {
//     wordToArray.splice(wordToArray.indexOf(letter), 1, '20')
//  }
// }
// const puzzledWord = wordToArray.join(',')
// console.log(puzzledWord);

// console.log(wordToArray);
 

// const key = 'person';
// const getKey = function() {
//   return 'age';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

const ex4 = [100, 89, 33, 504, 3, 96, 65];

/*
//большой .1  маленький .1     504, 100, 33, 89
                        .2      89,  33, 100,504
                        .3      89,  33, 100,504
                        .4      89,  33, 100,504
 большой .2   маленикий .1        89,  33, 100,504
                        .2      33, 89,100,504
                        .3      33, 89,100,504
                        .4       33, 89,100,504
большой .2   маленикий .1        89,  33, 100,504
                        .2      33, 89,100,504
                        .3      33, 89,100,504
                        .4       33, 89,100,504
                             




*/

// // 1. Перебрать каждый элемент массива;
// // 2. сравнение каждого элемента с последующим;
// // 3. поменять местами;


const bubbleSort = function (allElements){ 

  // 1. Перебрать каждый элемент массива;
   for (let i = 0; i < allElements.length; i += 1)  //большой
   {
       
   for (let j = 0; j < allElements.length; j += 1) // маленький
   { 
      // 2. сравнение каждого элемента с последующим;

      console.log('Итерация', j)
      console.table(allElements);

      if (allElements[j] > allElements[j + 1]) {

        let tmp /*желтый*/ = allElements[j] /*мячик из зеленой*/; //100
         allElements[j] /*зел кор*/ /*100*/ = allElements[j + 1]; /*из красной*//*89*/
         /*allElements[j] 89*/
        allElements[j + 1] /*кр кор*//*89*/ = tmp; /*мячик из зеленой*//*100*/
                
      }
    }
  }

  return 
}

bubbleSort(ex4);

