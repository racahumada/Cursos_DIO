//Retorna tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorn um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(
  `\nArray com as posições separadas pelo delimitador: ${splittedText}`
);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txet');
console.log(`Substituição de valor: ${replacedText}`);

//Retorna a "Fatia" de um valor
const lastChar = 'Text'.slice(-1);
console.log(`\nÚltima letra de uma string: ${lastChar}`);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(
  `\nValor da string da primeira letra menos a ultima: ${allWithoutLastChar}`
);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunta letra até a ultima: ${secondToEnd}`);

//Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`\nAs Duas letras primeiras letras são: ${twoCharsBeforeFirstPos}`);

console.log('---------------------------------');

const myNumber = 12.4032;

//Transformar numero para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string ', typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais ', fixedTwoDecimals);

//Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.20'));

//Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.22'));

console.log('---------------------------------');

const nullVariable = null;

console.log(typeof nullVariable);
console.log(nullVariable);
console.log('---------------------------------');

let undefinedVariable;

console.log('Tipo da variavel:', typeof undefinedVariable);
console.log(nullVariable);
console.log('---------------------------------');

const isActive = true;
const isAuthenticated = false;

console.log('Tipo da variavel:', typeof isActive);
console.log('---------------------------------');

let user = {
  name: 'Ricardo',
};
console.log(user);
//Alterando a propriedade de um objeto
user.name = 'Outro Nome 1';
console.log(user);
user['name'] = 'Outro Nome 2';
console.log(user);
const prop = 'name';
user[prop] = 'Outro Nome 3';
console.log(user);

//Criando uma propriedade
user.lastName = 'Cabrini da Silva';
console.log(user);
//Deletando uma propriedade
delete user.name;
console.log(user);
console.log('---------------------------------');

let user2 = {
  name: 'Ricardo',
  lastName: 'Castro Ahumada',
};

//Recupera as chaves do objeto user
console.log('Propriedades do objeto user:', Object.keys(user2));

//Recupera os valores das chaves do objeto
console.log('\nValores das Propriedades do objeto user:', Object.values(user2));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user2));

//Mergear Propriedades de objetos
Object.assign(user2, { fullName: 'Ricardo Castro Ahumada' });
console.log('\nAdiciona a propriedades fullName no objeto user2: ', user2);
console.log(
  '\nRetorna um novo objeto mergeando dois ou mais objetos: ',
  Object.assign({}, user2, { age: 26 })
);

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
// Object.freeze(newObj);

newObj.foo = 'Changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj após as alterções: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Ricardo' };
Object.seal(person);

person.name = 'Ricardo Castro';
delete person.name;
person.age = 26;

console.log('\nVariavel person após as alterções: ', person);
console.log('---------------------------------');

const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user3 = {
  [nameSymbol1]: 'Ricardo',
  [nameSymbol2]: 'Outro Nome',
  lastName: 'Castro',
};

console.log(user3);

//Symbols criam propriedades que não são enumberables
for (const key in user3) {
  if (user3.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user3[key]}`);
  }
}

console.log('Propriedades do objeto user: ', Object.keys(user3));
console.log('Valores das propriedades do objeto user3:', Object.values(user3));

//Exibir symbols de um objeto
console.log(
  'Symbols registrados no objeto user3:',
  Object.getOwnPropertySymbols(user3)
);

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user3: ', Reflect.ownKeys(user3));

//Criar em enum
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT'),
};
