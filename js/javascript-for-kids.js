// // Обидные фразы
// // Создайте свой собственный генератор случайных обидных фраз со своим собственным набором слов

// /*  - создать три массива: с глаголами, прилагательными, существительными. +
//     - написать гениратор случайных чисел округлением до целого числа
//     - настроить генераор таким образом, чтобы он выдавал числа в диапазоне от первого, до последнего индекса массива.
//     - вывести в консоль финальное предложение со случайными обзывательствами "You are (глагол) like a (прилагательное) (существительное)!!!"*/

// const verbs = ['jumping', 'smiling', 'eating', 'laughting', 'running', 'yelling', 'thinking', 'speaking'];
// const adjectives = ['smelly', 'stupid', 'old', 'fat', 'small', 'red', 'magical', 'space', 'ancient'];
// const noun = ['gorilla', 'beaver', 'shark', 'tarantula', 'snake', 'dragon', 'wizard', 'ant', 'turtle', 'sparrow', 'mosquito', 'octopus'];


// console.log(`You are ${verbs[Math.floor(Math.random() * verbs.length)]} like a ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${noun[Math.floor(Math.random() * noun.length)]}!!!`);
// console.log(verbs[Math.floor(Math.random() * verbs.length)]);


// Счетчик очков
/* Представьте, что вы играете в игру с друзьями и хотите отслеживать результат. Создайте объект с названием scores. Ключами будут имена ваших товарищей, а значениями - результаты каждого из них (исходным значением которых будет 0). Во время того, как игроки будут набирать очки, вам нужно будет увеличивать их счёт. Каким образом вы будете увеличивать счёт игрока в объекте scores?*/

let scores = {
  Olga: 0,
  Mary: 0,
  Alex: 0,
  Victor: 0,
  Anna: 0
}


for (let i = 1; i < Math.floor(Math.random() * 10); i++) {
  scores.Olga += Math.floor(Math.random() * 10);
  scores.Mary += Math.floor(Math.random() * 10);
  scores.Alex += Math.floor(Math.random() * 10);
  scores.Victor += Math.floor(Math.random() * 10);
  scores.Anna += Math.floor(Math.random() * 10);
  // console.log(`Результат ${i} тура ${scores}`);
  console.log("Результат " + i + " тура " + scores);
  console.log(scores);
}



// Выясняем суть объектов и массивов
/* Предположим, что у вас был такой объект:

  let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "Banana Shark"
  }

  Каким образом можно добыть из этого объекта число 123, используя один изтекстовых строк в данном JavaScript-коде?
  */  

   let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "Banana Shark"
}
  console.log(myCrazyObject["some array"][2].number);