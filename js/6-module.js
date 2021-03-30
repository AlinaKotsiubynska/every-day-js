const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
console.log('tweets :>> ', tweets);

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log('tags :>> ', tags);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
console.log("🚀 ~ file: 6-module.js ~ line 52 ~ sortedByAuthorName", sortedByAuthorName)

const sortedByReversedAuthorName = [...books].sort(({ author: a}, { author: b }) => b.localeCompare(a));
console.log("🚀 ~ file: 6-module.js ~ line 55 ~ sortedByReversedAuthorName", sortedByReversedAuthorName)

const sortedByAscendingRating = [...books].sort(({ rating: a}, { rating: b }) => a - b);
console.log("🚀 ~ file: 6-module.js ~ line 58 ~ sortedByAscendingRating", sortedByAscendingRating)

const sortedByDescentingRating = [...books].sort(({ rating: a}, { rating: b }) => b - a);
console.log("🚀 ~ file: 6-module.js ~ line 60 ~ sortedByDescentingRating", sortedByDescentingRating)


const test = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
];

// const sortByAscendingBalance = users => {
//   return users.map(user => user.balance).sort() 
// };
// console.log(sortByAscendingBalance(test), test.map(user => user.balance));

const sortByAscendingBalance = users => {
  return [...users].sort(({ balance:a }, {balance: b}) => a - b) 
};


function highAndLow(numbers){
  const newArr = numbers.split(' ')
    .sort((a, b) => b - a);
    // newArr.splice(1, newArr.length - 2);                
    return newArr.splice(1, newArr.length - 2).join(' ')                
}
console.log('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));



