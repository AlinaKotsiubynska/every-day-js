/*Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
Вот так должен работать наш класс:
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31*/

/*Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 310 - то есть 10*31

Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
var worker = new Worker('Иван', 'Иванов', 10, 31);
worker.getRate; //выведет 10
worker.getDays; //выведет 31
worker.getSalary; //выведет 310 - то есть 10*31
//Теперь используем сеттер:
worker.setRate = 20; //увеличим ставку
worker.setDays = 10; //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
*/

// class Worker {
//   #name;
//   #surname;
//   #rate;
//   #days;
//   constructor({ name, surname, rate, days }) {
//     this.#name = name;
//     this.#surname = surname;
//     this.#rate = rate;
//     this.#days = days;
//   }
//   getSalary() {
//     return this.#rate * this.#days
//   }
//   get name() {
//     return this.#name
//   }
//   get surname() {
//     return this.#surname
//   }
//   get rate() {
//     return this.#rate
//   }
//   set rate(num) {
//     this.#rate = num
//   }
//   get days() {
//     return this.#days
//   }
//   set days(num) {
//     this.#days = num
//   }
// }

// var worker = new Worker({ name:'Иван', surname:'Иванов', rate:10, days:31});
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// worker.rate = 20; //увеличим ставку
// worker.days = 10; //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Пример использования:
let calc = new Calculator();
alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.*/

class Calculator {
  calculate(str) {
    const [a, operatorStr, b] = str.split(' ');
    switch (operatorStr) {
      case '+':
        return Number(a) + Number(b);
      case '-':
        return Number(a) - Number(b);
      default:
        for (const method of this.methods) {
          if (operatorStr === method.operator) {
            return method.func(Number(a), Number(b))
          }
        }
        
    }
  }
    
    addMethod(operator, func) {
      if (!this.methods) {
        this.methods = [];
      }
      this.methods.push({
        operator,
        func,
      })
    }
  }


console.log(new Calculator().calculate('1 - 2'));
const newCalc = new Calculator();
newCalc.addMethod("*", (a, b) => a * b);
console.log(newCalc);
console.log(newCalc.calculate('5 / 8'));
newCalc.addMethod("/", (a, b) => a / b);
console.log(newCalc.calculate('5 / 8'));