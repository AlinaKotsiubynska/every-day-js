//Написати ф-ю яка приймає рік Повертає століття.

// const transformToCenture = function (year) {

//   return Math.floor(year / 100) + 1;
// }

// const transformToCenture = year => Math.floor(year / 100) + 1;


// console.log(transformToCenture(1648));
// console.log(transformToCenture(745));
// console.log(transformToCenture(1400));

// /*Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// Всі роки які вводить користувач записується в масив years
// Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// */

// const arr = [1, 2, 3, 4];
// [arr[arr.length - 1], arr[0], ...newArr] = arr;

// const newArr = [arr[arr.length - 1], arr[0], ...newArr]

// console.log(newArr);


// Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// Функція повертає true якщо рік високосний і false якщо ні

// const showYear = function (year) {
//   return `${year} ${year % 4 === 0}`; 
// }

// const consLog = function (...args) {
//   for (const arg of args) {
//     console.log(arg);
//   }
// }

// consLog(showYear(2004), showYear(1955));


// let money = 85;
// ______________________
// Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
/* Напиши функцию, которая принимает параметр money и возвращает список 
доступных автомобилей в рамках бюджета money. Если нет ни одной доступной 
по цене машины, функция возвращает оповещение о недостатке средств.

const buyCar = function(money) {
  const cars = [
    { name: 'ferrari', cost: 100 },
    { name: 'lambo', cost: 90 },
    { name: 'bmw', cost: 80 },
    { name: 'subaru', cost: 60 }
  ];
}

*/


// const buyCar = function(money) {
//   const cars = [
//     { name: 'ferrari', cost: 100 },
//     { name: 'lambo', cost: 90 },
//     { name: 'bmw', cost: 80 },
//     { name: 'subaru', cost: 60 }
//   ];
//   const ableToBuy = [];
//   const prices = [];
//   for (const car of cars) {
//     prices.push(car.cost);
//   }
//   console.log(`Доступно средств ${money}`);
//   console.log(`самая дешевая машина стоит ${Math.min(...prices)}`);
//   for (const car of cars) {
//     if (money < Math.min(...prices)) {
//       return 'Недостаточно средств';
//     }
//     if (car.cost <= money) {
//       ableToBuy.push(car.name);
//     }
//   }
//   return `Доступные авто ${ableToBuy}`;
// }
// consLog(buyCar(50), buyCar(60), buyCar(500));


/*Добыть из объекта число 123*/
// const myCrazyObject = {
//     'name': 'A ridiculous object',
//     'some array': [7, 9, {purpuse: 'confusion', number: 123}, 3.3],
//     'random animal': 'Banana Shark'
// };

// let { ['some array']: [,, { number }] } = myCrazyObject;
// console.log(number);



// const scores = {
//   Emma: 0,
//   Robert: 0,
//   Lily: 0,
// }



// scores.addScore = function (name) {
//   this[name] += Math.floor(Math.random() * 10);

// };

// console.log(scores);
// scores.addScore('Emma');
// console.log(scores);
// scores.addScore('Emma');
// console.log(scores);

/*Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space. Кто решит? Начальная ф-я function songDecoder(song){ };*/

// const farm = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];
// const farmLastWolf = ["ship", "ship", "ship", "ship", "ship", "ship", "ship", "wolf"];
// const warnSheep = function (arrQue) {
//     let array = arrQue.reverse();
//     let wolf = array.indexOf("wolf") + 1;
//     if (wolf === 1) {
//         return `волк последний`;
//     } else {
//         return `овца ${wolf - 1} тебя съедят`
//     }
// };
// console.log(warnSheep(farm));
// console.log(warnSheep(farmLastWolf));
// function warnTheSheep(queue) {
//   for (let i = 0; i < queue.length; i++) {
//     console.log('object', i, queue[i]);
//     console.log(queue[i] === 'sheep');
//     if (queue.indexOf('wolf') === queue.length - 1) {
//       return "Pls go away and stop eating my sheep";
//     }
//     let n = 0;
//     if (queue[i] === 'sheep') {
//       n = queue.length -i;
//     }
//     if (queue.indexOf('wolf')+1 === i) {
//       return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
//     }
//   }
// }
// console.log(warnTheSheep(farm));
// // console.log(warnTheSheep(farmLastWolf));

// function noSpace(x) {
//   console.log(x);
//   let x1 = x.split('');
//   for (let i = 0; i < x1.lenath; i++) {
//     if (x1[i] === " ") {
//       x1.splice(i, 1);
      
//     }
//   }
//   console.log(x1);
//   return x1
// };

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));;

// function DNAStrand(dna){
//   let complSide = '';
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[1] === 'A') {
//       complSide += 'T';
//     } 
//     else
//     if (dna[1] === 'T') {
//       complSide += 'A';
//     } else
//     if (dna[1] === 'C') {
//       complSide += 'G';
//     } else
//     if (dna[1] === 'G') {
//       complSide += 'C';
//     } 
//   }
//   return complSide;
// }

// console.log(DNAStrand("AAAA"));
// console.log(DNAStrand("ATTGC"));

// function validatePIN (pin) {
//   const length = pin.length === 4 || pin.length === 6;
//   let isNumber = false;
//   const isPositive = Number(pin) >= 0;

//   for (let i = 0; i < pin.length; i++) {
//     if (!Number.isNaN(pin[i])) {
//       isNumber = true;
//     }
//   }
//   return length && isNumber && isPositive;
// }

// function validatePIN (pin) {
//   const length = pin.length === 4 || pin.length === 6;
//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//   let isNumber = true;
//   const isPositive = Number(pin) >= 0;

//   for (let i = 0; i < pin.length; i++) {
//     if (!numbers.includes(pin[i])) {
//      isNumber = false;
//     }
//   }
//   return length && isNumber && isPositive;
// }

// console.log(validatePIN("-1.234"));
// console.log(Number.isNaN('.234'));
// console.log(validatePIN("1234"));
// console.log(validatePIN);


// function stray(numbers) {
//   // let temp = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === numbers[i + 1]) {
//       continue;
//     } else {
//       let temp = numbers[i + 1];
//       numbers[i + 1] = numbers[i];
//       numbers[i] = temp;
//     }
//   }
//   return numbers;
// }

// console.log(stray([1, 1, 2]));

// function getGrade (s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;
//   console.log(score);
//   if (90 <= score <= 100) {
//     return 'A';
//   }
//   if (80 <= score < 90) {
//     return 'B';
//   }
//   if (70 <= score < 80) {
//     return 'C';
//   }
//   if (60 <= score < 70) {
//     return 'D'
//   }
//   if (0 <= score < 60) {
//     return 'F'
//   }
//   // Code here
// }

// console.log(getGrade(70,70,100));

// function shifter(s) {
//   if (s === '') return 0;
//   const shifterLetters =  ["H", "I", "N", "O", "S", "X", "Z", "M", "W"];
//   const sArr = s.toUpperCase().split(' ');
//   const shifters = [];
//   for (let word of sArr) {
//     const testResults = [];
//     for (let letter of word) {
//       testResults.push(shifterLetters.includes(letter));
//     };
//     if (!testResults.includes(false) && !shifters.includes(word)) {
//       shifters.push(word);
//     }
//   }
//   return shifters.length
// };

// console.log(shifter("ON"));
// console.log(shifter(""));
// console.log(shifter("I III I III"));

// const a = {};
// const b = { key: "b" };
// const c = { kay: "c" };
// // a[b];
// // console.log(a[b]);

// a[{ key: "b" }] = 123;
// // a[c] = 456;
// console.table(a)

// const a = {};
// const b = [{key: "b"}]
// const c = [{ key: "c" }]
// a[b] = 123;
// a[c] = 456;
// console.table(a)
// Задача: Нужно сделать функцию которая принимает любое слово. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.

// агтсешщт
//        assertEquals(getMiddle("test"),"es");
//     assertEquals(getMiddle("testing"),"t");
//     assertEquals(getMiddle("middle"),"dd");
//     assertEquals(getMiddle("A"),"A");

// const ferm = function (num) {
//   let fruit = num;
   
//   return function (amount) {
//     fruit += amount;
//     return fruit
//   }
// }
// const collect = ferm(10);////collectFruits(amount)
// console.log(collect(5));
// console.log(collect(-8));
// console.log(collect(5));
// console.log(collect(5));
// console.log(collect(5));
// console.log(collect(5));
// console.log(collect(5));
// console.log(collect(5));
// console.log(collect(5));


/*№8 
Написати гру Камінь Ножиці Папір.
Варіанти вибору потрібно зберігати в масиві
Користувач вводить свій варіант
Компютер вибирає свій рандомний варівант з масиву
Первіряємо вибір користувача і вибір компютера. 
Опрацювати всі варіанти:
1) Варіанти де виграє користувач
2) Варіанти де виграє компютер
3) Варіанти де виходить нічия.*/
// function game() {
//   const options = ['Камень', 'Ножиницы', 'Бумага']
//   const user = prompt();
//   console.log('user', user);
//   const computer = options[Math.floor(Math.random() * 3)];
//   console.log('computer', computer);
//   const resalt = [user, computer];
//   if (resalt.includes('Камень') && resalt.includes('Ножницы')) return (`Победил ${resalt[resalt.indexOf('Камень')]}`);
//   if (resalt.includes('Камень') && resalt.includes('Бумага')) return(`Победил ${resalt[resalt.indexOf('Бумага')]}`);
//   if (resalt.includes('Ножницы') && resalt.includes('Бумага')) return(`Победил ${resalt[resalt.indexOf('Ножницы')]}`);
//   return "Ничья";
// }
// console.log(game());

// function domainName(url){
//   let newUrl = url.split('');
//     if(url.includes('www.')) {
//     newUrl.splice(newUrl.indexOf('w'), 4);
//     newUrl.join('');
//   }
//     if (url.includes('//')) {
//     newUrl = newUrl.slice(newUrl.indexOf('/') + 2);
//   }
//   return  newUrl.slice(0, newUrl.indexOf('.')).join('');
// }

// console.log(domainName("www.xakep.ru"));

// function wallpaper(l, w, h) {
//   const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
//   const raws = (l + w) * 2 / 0.52;
//   const hInRoll = 10/h;
//   console.log(l, w,h, 'raws', raws, 'hInRoll', hInRoll);
//   const totalRolls = (raws/hInRoll) + (raws/hInRoll)*0.15;
//   return numbers[Math.ceil(totalRolls)]
//   // your code
// };
// console.log(wallpaper(6.3, 4.5, 3.29));
// complete the function
// function solution(string) {
//   const arr = string.split('');
//   console.log(arr);
//   let newString = '';
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()){
//       newString += ` ${arr[i]}`;
//     } else {
//       newString += arr[i];
//     }
//   }
//   return newString;
// }
// console.log(solution('camelCasing'));

// const a = {
//   name: "Alla",
//   age: 18,
//   getName() {
//     return this.name
//   }
// }

// console.log(a.getName());
// console.log(a.hasOwnProperty('name'));
// console.log(a.hasOwnProperty('age'));
// console.log(a.hasOwnProperty('hasOwnProperty'));
// console.log(a.keys());
// console.log(Object.keys(a));

// const Car = function ({ name, price, color } = {}) {
//   // const { name, price, color } = config;
//   this.name = name;
//   this.price = price;
//   this.color = color;
// };

// Car.prototype.changeColor = function (newColor) {
//   this.color = newColor;
// };
// // const newCar = new Car({ name: 'audi', price: 20000 });
// // console.dir(Car);
// // console.log(newCar);
// console.log(Number.__proto__);
// console.dir(Car.__proto__);
var number = function(array){
  if (array.length === 0) return array;
  let newArr= [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(i + 1 + ': ' + array[i])
  }
  return newArr;

}

console.log(number(["a", "b", "c"]));

console.log(new number(["a", "b", "c"]));
console.dir(number);