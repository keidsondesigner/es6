"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

showFullName(person); // ######################################################
// rest 

var numeros = [1, 2, 3, 4, 5, 6, 7, 8];
var primeiro = numeros[0],
    segundo = numeros[1],
    rest = numeros.slice(2);
console.log(primeiro, segundo);
console.log(rest);
var pessoa = {
  name: 'Arthur',
  age: 11,
  height: 1.75,
  company: 'Cataline'
};

var name = pessoa.name,
    restante = _objectWithoutProperties(pessoa, ["name"]);

console.log(name);
console.log(restante);

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (acc, num) {
    return acc + num;
  });
};

console.log(sum(5, 5, 10, 10)); // ######################################################
// spread

var person1 = {
  name: 'Karol',
  age: 19,
  height: 1.75,
  company: 'Google'
};

var personCompany = _objectSpread(_objectSpread({}, person1), {}, {
  age: 25,
  company: 'Facebook'
});

console.log(personCompany); // ######################################################
// Classes - Função construtora

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}

;
var civic = new Car('honda', 130);
var hb20 = new Car('hyundai', 90);
console.log(civic);
console.log(hb20); // ######################################################
// Classes

var Carro = /*#__PURE__*/function () {
  function Carro(brand, price) {
    _classCallCheck(this, Carro);

    this.brand = brand;
    this.price = price;
  }

  _createClass(Carro, [{
    key: "acelerar",
    value: function acelerar() {
      console.log('Carro em movimento!!!');
    }
  }]);

  return Carro;
}();

;
var fiat = new Carro('Uno', 150);
fiat.acelerar(); // ######################################################
// Classes - set   &    get
// Depois que um usuário for criado não pode mas alterar seu nome
// '_' underline aponta que a propriedade é privada, que só pode ser acessada dentro da class
// para acessar a propriedade privada _name é necessário usar o método 'get'
// para manipular a propriedade privada _name é necessário usar o método 'set'

var Pessoa = /*#__PURE__*/function () {
  function Pessoa(name) {
    _classCallCheck(this, Pessoa);

    this._name = name;
  }

  _createClass(Pessoa, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      return this._name = newName;
    }
  }]);

  return Pessoa;
}();

var newPerson = new Pessoa('Keidson'); // manipulando a class com 'set' e atribuindo um novo nome

newPerson.name = 'Novo nome';
console.log(newPerson.name); // ######################################################
// Class - Métodos estáticos

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Calculator;
}();

;
console.log(Calculator.sum(10, 60));

var UmaPessoa = /*#__PURE__*/function () {
  function UmaPessoa(firstName, secondName) {
    _classCallCheck(this, UmaPessoa);

    this.firstName = firstName;
    this.secondName = secondName;
  }

  _createClass(UmaPessoa, [{
    key: "fullName",
    get: function get() {
      return UmaPessoa.joinNames(this.firstName, this.secondName);
    }
  }], [{
    key: "joinNames",
    value: function joinNames(firstName, secondName) {
      return "".concat(firstName, " ").concat(secondName);
    }
  }]);

  return UmaPessoa;
}();

;
var novaPessoa = new UmaPessoa('Joel', 'Lima');
console.log(novaPessoa.fullName); // ######################################################
// Class - Herança

var Veiculo = /*#__PURE__*/function () {
  function Veiculo(rodas) {
    _classCallCheck(this, Veiculo);

    this.rodas = rodas;
  }

  _createClass(Veiculo, [{
    key: "acelerar",
    value: function acelerar() {
      console.log('Acelerou!!!');
    }
  }]);

  return Veiculo;
}();
