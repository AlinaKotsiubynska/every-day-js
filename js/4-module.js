// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

// №9
// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки, а пiсля - вартiсть покупки, та кiлькiсть
// 4) Ці назву, цiну та кiлькiсть зберігати в обектi
// 5) Вивести обект з масивом покупок, вартiстю покупок, а також кiлькiстю товарiв по закінченю цикла в консоль.

// const getShopingList = function () {
//   const goodsNumber = prompt('Введите количесво наимениваний товаров');
//   const shopingList = [];
//   for (let i = 0; i < goodsNumber; i++) {
//     const name = prompt('Введите название товара');
//     const price = prompt('Введите цену товара');
//     const quantity = prompt('Введите количество товара');
//     shopingList.push({ name, price, quantity });
//   }
//   return shopingList;
// }
// console.log(getShopingList());

// #5
// Напишите ф-цию которая принимает массив чисел  и возвращает массив в котором останутся только уникальные числа

// const getUnicNumbs = function (arr) {
//   const newArr = [];
//   for (const el of arr) {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }

// console.log(getUnicNumbs([1, 1, 2, 3, 3, 4, 4]));

// №4
// Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
// console.log('16px'); // 1rem
// console.log('24px'); // 1.5rem
// console.log('0px'); // 0rem

// const convertToRem = px => `${Number.parseFloat(px) / 16}rem`;
// console.log(convertToRem('16px'));
// console.log(convertToRem('24px'));
// console.log(convertToRem('0px'));