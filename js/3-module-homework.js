// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys);

//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//       console.log(key);
//     }
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// console.log(countProps({ name: 'Mango', age: 2 }));


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     } 
//   }
//   return null;
  
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар'));  /*1300*/
// console.log(getProductPrice('Захват')); /*1200*/
// getProductPrice('Сканер') /*2700*/
// getProductPrice('Дроид') /*400.*/
// getProductPrice('Двигатель') /*null*/


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   // Пиши код ниже этой строк
//   const arr = [];
 
//   for (const item of products) {
//     let keys = Object.keys(item);
//     console.log('keys', keys);
//     console.log(keys.includes(propName));
  
//     if (Object.keys(item).includes(propName)) {
//       arr.push(item[propName]);
      
//     }
//     // console.log(Object.keys(item));
//   }
  
//   return arr;
  
//   // Пиши код выше этой строки
// }
 

// console.log(getAllPropValues('price'));



// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const { books } = bookShelf;
// 	for (const book of books) {
//       if (book === oldName) {
//         books.splice(books.indexOf(book), 1, newName)
//       }
//     }
	
	
//     // Пиши код выше этой строки
//   },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.books);
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));
// console.log(bookShelf.books);

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
    
//     for (const book of this.books) {
//       if (book === oldName) {
//         const bookIndex = this.books.indexOf(book);
//         this.books.splice(bookIndex, 1, newName);
//       }
//     }
//     // Пиши код выше этой строки
//   },
// };

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions
//   }
//   // Пиши код выше этой строки
// };

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     for (const potion of this.potions) {
//       if (potion === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1)
//       }
//     }
//     // Пиши код выше этой строки
//   },
// };


// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPosion) {
//     for (const potion of this.potions)
//     if (Object.keys(this.potions.posion).includes(newPosion.name)) {
//       return `Зелье ${newPosion.name} уже есть в инвентаре!`;
//     }
    
//     this.potions.push(newPosion);
//   },
//   removePotion(potionName) {

//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         return;
//       }
//     }
//     return `Зелья ${potionName} нет в инвентаре!`;
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Зелья ${potionName} нет в инвентаре!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };


const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPosion) {
    for (const potion of this.potions)
    if (Object.keys(potion).includes(newPosion.name)) {
      return `Зелье ${newPosion.name} уже есть в инвентаре!`;
    }
    
    this.potions.push(newPosion);
  },
  removePotion(potionName) {
        for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(this.potions.indexOf(potion), 1);
        return;
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },

  // НЕ РАБОТАЕТ ПРИ ДЕСТРУКТУРИЗАЦИИ
  // updatePotionName(oldName, newName) {
  //   for (let potion of this.potions) {
  //     let { name } = potion;
  //        console.log(name);
  //     if (name === oldName) {
  //       name = newName;
  //       console.log(atTheOldToad.getPotions());
  //       return;
  //     }
  //   }
  //   return `Зелья ${oldName} нет в инвентаре!`;
  // },

    // НЕ РАБОТАЕТ ПРИ ДЕСТРУКТУРИЗАЦИИ
  // updatePotionName(oldName, newName) {
  //   for (let { name } of this.potions) {
  //       if (name === oldName) {
  //       name = newName;
  //       console.log(atTheOldToad.getPotions());
  //       return;
  //     }
  //   }
  //   return `Зелья ${oldName} нет в инвентаре!`;
  // },


  // РАБОЧИЙ КОД
  // updatePotionName(oldName, newName) {
  //   for (let potion of this.potions) {
  //        console.log(potion.name);
  //     if (potion.name === oldName) {
  //       potion.name = newName;
  //       console.log(atTheOldToad.getPotions());
  //       // return;
  //     }
  //   }
  //   return `Зелья ${oldName} нет в инвентаре!`;
  // },
};


// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 })
// console.log(atTheOldToad.getPotions());
// atTheOldToad.removePotion('Дыхание дракона');
// console.log(atTheOldToad.getPotions());
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.getPotions());


