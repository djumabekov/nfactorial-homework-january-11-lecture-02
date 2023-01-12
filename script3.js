// ### Работа с перебором свойств в объектах

// 1. Создайте объект `salaries`, где ключом(свойстовом) является имя, a значением зарплата.

let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

//С помощью for .. in  просуммируйте все значения и выведите в консоли.
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log('Sum = ', sum);
