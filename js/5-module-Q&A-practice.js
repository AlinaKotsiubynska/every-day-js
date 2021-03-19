/* 1. Напиши класс User для создания пользователя со следующим свойствами:
a. username - имя, строка
b. age - возраст, число
c. numberOfPosts - кол-во постов, число
d. Класс ожидает 1 параметр - объект настроек с одноимёнными свойствами.
Добавь метод getInfo(), который, возвращает строку: User ${имя} is ${возраст} years old 
and has ${кол-во постов} posts. */

// class User {
//   constructor({ username = 'User', age = 0, numberOfPosts = 0 } = {}) {
//     this.username = username,
//     this.age = age,
//     this.numberOfPosts = numberOfPosts
//   }

//   getInfo() {
//     return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//   }
// }
// const alina = new User({ username: 'Alina', numberOfPosts: 3, age: 89 })
// console.log('alina :>> ', alina);
// console.dir(alina);
// console.log(alina.getInfo());

// -----------------

/* 2. Напиши класс Storage который создаёт объекты для управления складом товаров. 
При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
Добавь методы класса:
a. getItems() - возвращает массив товаров.
b. addItem(item) - получает новый товар и добавляет его к текущим.
c. removeItem(item) - получет товар и, если он есть, удаляет его из текущих. */

// class Storage {
//   constructor(goods) {
//     this.items = goods
//   }
//   getItems() {
//     return this.items
//   }
//   addItem(item) {
//     this.items.push(item)
//   }
//   removeItem(item) {
//     const itemIndx = this.items.indexOf(item);
//     this.items.splice(itemIndx, 1)
//   }
// }

// const coffeeShop = new Storage(['espresso', 'capuchino', 'latte'])
// console.log('coffeeShop.getItems() :>> ', coffeeShop.getItems());
// coffeeShop.addItem('Irish coffee');
// console.log('coffeeShop.getItems() :>> ', coffeeShop.getItems());
// coffeeShop.removeItem('capuchino');
// console.log('coffeeShop.getItems() :>> ', coffeeShop.getItems());
// -----------------

/* 3. Напиши класс Client который создаёт объект со свойствами login и email. 
Объяви приватные свойства #login и #email, доступ к которым сделай 
через геттер и сеттер login и email. */
// class Client {
//   #login;
//   #email;
//   constructor() {
//     this.#login,
//     this.#email
//   }
//   get login() {
//     return this.#login
//   }
//   set login(newLogin) {
//     this.#login = newLogin
//   }
//   get email() {
//     return this.#email
//   }
//   set email(newEmail) {
//     this.#email = newEmail
//   }
// }

// const mango = new Client;
// console.log('mango :>> ', mango);
// console.log(mango.login);
// mango.login = 'mango1';
// console.log(mango.login);
// mango.email = 'mango@mail.com'
// console.log('mango :>> ', mango);

// -----------------

/* 4. Напиши класс Notes который управляет коллекцией заметок в свойстве items. 
Заметка это объект со свойствами text и priority. 
Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами. 
Добавь методы addNote(note), removeNote(text) и updateNotePriority(text, newPriority). */
// class Notes {
//   static Priority = {
//     URGENT: 'urgent',
//     HIGH: 'heigh',
//     MEDIUM: 'medium',
//     LOW: 'low',
//   };

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//     return this
//   }

//   removeNote(noteText) {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].text = noteText) {
//         this.items.splice(i, 1)
//         return this
//       }
//     }
//     return `Заметка с текстом "${noteText}"  не найдена` 
//   }
// }

// const note = new Notes;
// console.log('note :>> ', note.items);
// note.addNote({ text: 'do me', priority: Notes.Priority.HIGH})
// note.addNote({ text: 'and me', priority: Notes.Priority.MEDIUM})
// console.log('note :>> ', note.items);
// console.log(note.removeNote('do me to'));
// console.log('note :>> ', note.items);
// note.removeNote('do me to');
// console.log('note :>> ', note);


// -----------------

/*
  5. Создать класс Worker у которого есть свойства name, surname, age, position, salary.
     У класса Worker есть метод getSalary.
     Создать класс TopLevelWorker у которого есть свойство hierarchyLevel и который 
     наследует класс Worker, добавляя метод getHierarchyLevel
     Реализовать задачу с помощью ES5 прототипов и ES6 классов
*/

class Worker {
  constructor(name, surname, age, position, salary) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary
  }
}

class TopLevelWorker extends Worker{
  constructor(hierarchyLevel, name, surname, age, position, salary) {
    super(name, surname, age, position, salary);
    this.hierarchyLevel = hierarchyLevel;
  }

  getHierarrchyLevel() {
    return this.hierarchyLevel
  }
}

const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom"
};

const tonny = new Worker('Tonny', 'Laska', 23, 'manager', '2000');
console.log('Tonny :>> ', tonny);
console.log(tonny.getSalary());