const numbers = [10, 20, 30, 40, 50, 60];


const newNumbers = numbers.map((num) => {
	return num + 1;
});
console.log(newNumbers);


const total = numbers.reduce((acc, num) => {
	return acc + num;
}, 0);
console.log(total);

// ######################################################

const toDos = [
	{ text: 'lavar a louça', done: false },
	{ text: 'apanhar o lixo', done: true },
	{ text: 'dobrar as roupas', done: true },
];

const doneTodos = toDos.filter((obj) => {
	return obj.done === false;
});
console.log(doneTodos);


const find = toDos.find((obj) => {
	return obj.text === "dobrar as roupas";
});
console.log(find);

const indexTodos = toDos.findIndex((value) => {
	return value.text === "lavar a louça"
});
console.log(indexTodos);


// ######################################################
//.some se a condição for verdadeira retorna "true" 

const cars = ['fusca', 'civic', 'gol', 15];

const hasFusca = cars.some((car) => {
	return car === 'fusca';
});
console.log(hasFusca);

// ######################################################

const showProduct = (product, price) => {
	console.log(`O valor de ${product} é R$${price.toFixed(2)}, pode comprar!`)
}

showProduct('Camisa', 59.95);



// ######################################################
// Desestruturação de Array

const fruits = ['Laranja', 'Morango', 'Maça', 'Banana', 'Uva'];

const [a, , c, , e] = fruits;
console.log(a, c, e);


// ######################################################
// Desestruturação de Objeto

const person = {
	firstName: 'Keidson',
	secondName: 'Roby',
	age: 25,
	address:	{
		city: 'Manaus',
		region: 'AM',
	},
};

const {firstName, secondName, address: { city, region }} = person;
console.log(firstName, secondName, city, region);


const showFullName = ({firstName, secondName, address: { city, region }}) => {
	console.log(`${firstName} ${secondName} ${city} ${region}`);
};

showFullName(person);


// ######################################################
// rest 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const [primeiro, segundo, ...rest] = numeros;
console.log(primeiro, segundo);
console.log(rest)




const pessoa = {
	name: 'Arthur',
	age: 11,
	height: 1.75,
	company: 'Cataline',
};

const { name, ...restante } = pessoa;
console.log(name);
console.log(restante);





const sum = (...params) => {
	return params.reduce((acc, num) => {
		return acc + num;
	});
};
console.log(sum(5, 5, 10, 10));



// ######################################################
// spread


const person1 = {
	name: 'Karol',
	age: 19,
	height: 1.75,
	company: 'Google',
};

const personCompany = {
	...person1,
	age: 25,
	company: 'Facebook',
};
console.log(personCompany);





// ######################################################
// Classes - Função construtora



function Car(brand, price) {
	this.brand = brand;
	this.price = price;
};

const civic = new Car('honda', 130);
const hb20 = new Car('hyundai', 90);

console.log(civic);
console.log(hb20);


// ######################################################
// Classes

class Carro {
	constructor(brand, price) {
		this.brand = brand;
		this.price = price;
	}

	acelerar() {
		console.log('Carro em movimento!!!');
	}
};


const fiat = new Carro('Uno', 150);
fiat.acelerar();