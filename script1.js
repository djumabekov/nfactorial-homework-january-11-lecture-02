// ### Создать свой *Ресторан / Магазин / Футбольную команду* используя:

// 1. Переменные - let, const
// 2. Типы данных - string, number, boolean, null, undefined
// 3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже)

//create object
const barcelona = {
  clubName: 'Barcelona',
  countVictory: 18,
  isChampion: true,
  webSite: null,
  rating: undefined,
  coach: 'Xavi',
  forward: 'Raphinha',
  goalkeeper: 'Pena',
};

console.log('Current data in object: ');
for (let key in barcelona) {
  console.log(barcelona[key]);
}

//add to object
barcelona.defender = 'Alonso';
barcelona['midfierder'] = 'Roberto';

console.log('After add to object: ');
for (let key in barcelona) {
  console.log(barcelona[key]);
}

//delete from object
delete barcelona.defender;
delete barcelona['midfierder'];

console.log('After delete from object: ');
for (let key in barcelona) {
  console.log(barcelona[key]);
}
