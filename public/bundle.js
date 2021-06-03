"use strict";

var numbers = [10, 20, 30, 40, 50, 60];
var newNumbers = numbers.map(function (num) {
  return num + 1;
});
console.log(newNumbers);
var total = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(total); // ######################################################

var toDos = [{
  text: 'lavar a louça',
  done: false
}, {
  text: 'apanhar o lixo',
  done: true
}, {
  text: 'dobrar as roupas',
  done: true
}];
var doneTodos = toDos.filter(function (obj) {
  return obj.done === false;
});
console.log(doneTodos);
var find = toDos.find(function (obj) {
  return obj.text === "dobrar as roupas";
});
console.log(find);
var indexTodos = toDos.findIndex(function (value) {
  return value.text === "lavar a louça";
});
console.log(indexTodos); // ######################################################
//.some se a condição for verdadeira retorna "true" 

var cars = ['fusca', 'civic', 'gol', 15];
var hasFusca = cars.some(function (car) {
  return car === 'fusca';
});
console.log(hasFusca); // ######################################################

var showProduct = function showProduct(product, price) {
  console.log("O valor de ".concat(product, " \xE9 R$").concat(price.toFixed(2), ", pode comprar!"));
};

showProduct('Camisa', 59.95); // ######################################################
// Desestruturação de Array

var fruits = ['Laranja', 'Morango', 'Maça', 'Banana', 'Uva'];
var a = fruits[0],
    c = fruits[2],
    e = fruits[4];
console.log(a, c, e); // ######################################################
// Desestruturação de Objeto

var person = {
  firstName: 'Keidson',
  secondName: 'Roby',
  age: 25,
  address: {
    city: 'Manaus',
    region: 'AM'
  }
};
var firstName = person.firstName,
    secondName = person.secondName,
    _person$address = person.address,
    city = _person$address.city,
    region = _person$address.region;
console.log(firstName, secondName, city, region);

var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
      secondName = _ref.secondName,
      _ref$address = _ref.address,
      city = _ref$address.city,
      region = _ref$address.region;
  console.log("".concat(firstName, " ").concat(secondName, " ").concat(city, " ").concat(region));
};

showFullName(person);
