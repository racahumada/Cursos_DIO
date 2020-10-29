// //Retorna tamanho de uma string
// const textSize = 'Texto'.length;
// console.log(`Quantidade de letras: ${textSize}`);

// //Retorn um array quebrando a string por um delimitador
// const splittedText = 'Texto'.split('x');
// console.log(
//   `\nArray com as posições separadas pelo delimitador: ${splittedText}`
// );

// //Busca por um valor e substitui por outro
// const replacedText = 'Texto'.replace('Text', 'txet');
// console.log(`Substituição de valor: ${replacedText}`);

// //Retorna a "Fatia" de um valor
// const lastChar = 'Text'.slice(-1);
// console.log(`\nÚltima letra de uma string: ${lastChar}`);

// const allWithoutLastChar = 'Texto'.slice(0, -1);
// console.log(
//   `\nValor da string da primeira letra menos a ultima: ${allWithoutLastChar}`
// );

// const secondToEnd = 'Texto'.slice(1);
// console.log(`\nValor da string da segunta letra até a ultima: ${secondToEnd}`);

// //Retorna N caracters a partir de uma posição
// const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
// console.log(`\nAs Duas letras primeiras letras são: ${twoCharsBeforeFirstPos}`);

// console.log('---------------------------------');

// const myNumber = 12.4032;

// //Transformar numero para string
// const numberAsString = myNumber.toString();
// console.log('Número transformado em string ', typeof numberAsString);

// //Retorna número com um número de casas decimais
// const fixedTwoDecimals = myNumber.toFixed(2);
// console.log('\nNúmero com duas casas decimais ', fixedTwoDecimals);

// //Transforma uma string em float
// console.log('\nString parseada para float:', parseFloat('13.20'));

// //Transforma uma string em int
// console.log('\nString parseada para int:', parseInt('13.22'));

// console.log('---------------------------------');

// const nullVariable = null;

// console.log(typeof nullVariable);
// console.log(nullVariable);
// console.log('---------------------------------');

// let undefinedVariable;

// console.log('Tipo da variavel:', typeof undefinedVariable);
// console.log(nullVariable);
// console.log('---------------------------------');

// const isActive = true;
// const isAuthenticated = false;

// console.log('Tipo da variavel:', typeof isActive);
// console.log('---------------------------------');

// let user = {
//   name: 'Ricardo',
// };
// console.log(user);
// //Alterando a propriedade de um objeto
// user.name = 'Outro Nome 1';
// console.log(user);
// user['name'] = 'Outro Nome 2';
// console.log(user);
// const prop = 'name';
// user[prop] = 'Outro Nome 3';
// console.log(user);

// //Criando uma propriedade
// user.lastName = 'Cabrini da Silva';
// console.log(user);
// //Deletando uma propriedade
// delete user.name;
// console.log(user);
// console.log('---------------------------------');

// let user2 = {
//   name: 'Ricardo',
//   lastName: 'Castro Ahumada',
// };

// //Recupera as chaves do objeto user
// console.log('Propriedades do objeto user:', Object.keys(user2));

// //Recupera os valores das chaves do objeto
// console.log('\nValores das Propriedades do objeto user:', Object.values(user2));

// //Retorna um array de arrays contendo [nome_prop, valor_prop]
// console.log('\nLista de propriedades e valores: ', Object.entries(user2));

// //Mergear Propriedades de objetos
// Object.assign(user2, { fullName: 'Ricardo Castro Ahumada' });
// console.log('\nAdiciona a propriedades fullName no objeto user2: ', user2);
// console.log(
//   '\nRetorna um novo objeto mergeando dois ou mais objetos: ',
//   Object.assign({}, user2, { age: 26 })
// );

// //Previne todas as alterações em um objeto
// const newObj = { foo: 'bar' };
// // Object.freeze(newObj);

// newObj.foo = 'Changes';
// delete newObj.foo;
// newObj.bar = 'foo';

// console.log('\nVariavel newObj após as alterções: ', newObj);

// //Permite apenas a alteração de propriedades existentes em um objeto
// const person = { name: 'Ricardo' };
// Object.seal(person);

// person.name = 'Ricardo Castro';
// delete person.name;
// person.age = 26;

// console.log('\nVariavel person após as alterções: ', person);
// console.log('---------------------------------');

// const symbol1 = Symbol();
// const symbol2 = Symbol();

// //Symbols são únicos
// console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

// //Previnir conflito entre nomes de propriedades
// const nameSymbol1 = Symbol('name');
// const nameSymbol2 = Symbol('name');

// const user3 = {
//   [nameSymbol1]: 'Ricardo',
//   [nameSymbol2]: 'Outro Nome',
//   lastName: 'Castro',
// };

// console.log(user3);

// //Symbols criam propriedades que não são enumberables
// for (const key in user3) {
//   if (user3.hasOwnProperty(key)) {
//     console.log(`\nValor da chave ${key}: ${user3[key]}`);
//   }
// }

// console.log('Propriedades do objeto user: ', Object.keys(user3));
// console.log('Valores das propriedades do objeto user3:', Object.values(user3));

// //Exibir symbols de um objeto
// console.log(
//   'Symbols registrados no objeto user3:',
//   Object.getOwnPropertySymbols(user3)
// );

// //Acessando todas as propriedades do objeto
// console.log('Todas propriedades do objeto user3: ', Reflect.ownKeys(user3));

// //Criar em enum
// const directions = {
//   UP: Symbol('UP'),
//   DOWN: Symbol('DOWN'),
//   LEFT: Symbol('LEFT'),
//   RIGHT: Symbol('RIGHT'),
// };

//FUNÇÕES
// function fn() {
//   return 'Code here';
// }

// const arrowFn = () => 'Code Here';
// const arrowFn2 = () => {
//   //Mais de uma expressão
//   return 'Code Here';
// };

// //Funções também são objetos
// fn.prop = 'Posso criar propriedades';

// console.log(fn());
// console.log(fn.prop);

// //Receber parâmetros
// const logValue = (value) => console.log(value);
// const logFnResult = (fnParam) => console.log(fnParam());

// logFnResult(fn);

// // Receber e retornar funções
// const controlFnExec = (fnParam) => (allowed) => {
//   if (allowed) {
//     fnParam();
//   }
// };

// const handleFnExecution = controlFnExec(fn);

// handleFnExecution(true); //Executará a função fn
// handleFnExecution(); //Não executará fn

// controlFnExec como função
// function controlFnExec(fnParam) {
//   return function (allowed) {
//     if (allowed) {
//       fnParam();
//     }
//   };
// }
// (() => {
//   // "this" - se for chamado por uma função do tipo arrow
//   // o this retornado vai ser o declarado antes de da function,
//   //Se for através de uma função comum será chamado de acordo de
//   //onde a função é chamada

//   this.name = 'arrow function';
//   const getNameArrowFn = () => this.name;

//   function getName() {
//     return this.name;
//   }

//   const user = {
//     name: 'Nome no Objeto de execução',
//     getNameArrowFn,
//     getName,
//   };

//   console.log(user.getNameArrowFn());
//   console.log(user.getName());
// })();

//ARRAYS

// const users = ['Ricardo', 'Emily', 'Joaquim', 'Tobias'];

// const gender = {
//   MAN: Symbol('M'),
//   WOMAN: Symbol('W'),
// };

// const persons = [
//   {
//     name: 'Ricardo',
//     age: 31,
//     gender: gender.MAN,
//   },
//   {
//     name: 'Emily',
//     age: 25,
//     gender: gender.WOMAN,
//   },
//   {
//     name: 'Joaquim',
//     age: 0.8,
//     gender: gender.MAN,
//   },
//   {
//     name: 'Tobias',
//     age: 0.5,
//     gender: gender.MAN,
//   },
// ];

// //Retorna a quantidade de itens de um array
// console.log('Items: ', persons.length);

// //Verificar se é array
// console.log('A variável persons é um array:', Array.isArray(persons));

// //Iterar os itens do array
// persons.forEach((person) => {
//   console.log(`Nome: ${person.name}`);
// });

// // Filtrar array
// const mens = persons.filter((person) => person.gender === gender.MAN);

// console.log('\n Nova lista apenas com homens:', mens);

// //Retornar um novo
// const personWithCourse = persons.map((person) => {
//   person.course = 'Introdução ao Javascript';
//   return person;
// });

// console.log('\n Pessoas com a adição do course:', personWithCourse);

// //Transformar um array em outro tipo
// const totalAge = persons.reduce((age, person) => {
//   age += person.age;
//   return age;
// }, 0);

// console.log('\n Soma de idade das pessoas:', totalAge);

// //Juntando operações
// const totalEvenAges = persons
//   .filter((person) => person.age % 2 === 0)
//   .reduce((age, person) => {
//     age += person.age;
//     return age;
//   }, 0);

// console.log(
//   '\n Soma de idade das pessoas que possuem idade par:',
//   totalEvenAges
// );

//OPERADORES
//Módulo (%)
//Operador binário. Retorna o iterador restante da divisão dos dois operadores.

// 12 % 5; //Retorna 2

// //Incremento (++) e Decremento (--)
// ++x;
// x++;

// const a = ++2; //3
// const b = 2++; //2

// --x;
// x--;

// //Negação (-) e Adição (+)
// -3;
// +'3'; //retorna 3
// +true; //retorna 1
// +false; //retorna 0
// -true; // retorna -1

// //Operador de exponenciação (**)
// 2 ** 3; //retorna 8
// 10 ** -1; //retorna 0.1

// //Operador de agrupamento ()
// 2 * (3 + 2);

// SPREAD
// var partes = ['ombro', 'joelhos'];
// var musica = ['cabeca', ...partes, 'e', 'pés'];

// function fn(x, y, z) {}
// var args = [0, 1, 2];
// fn(args);

// //Deletar algo
// delete something;

// //Determinar algo
// typeof something;

//in
//something in somethingItens;

var arvores = new Array(
  'pau-brasil',
  'loureiro',
  'cedro',
  'carvalho',
  'sicômoro'
);

0 in arvores; //retorna true
3 in arvores; //retorna true
6 in arvores; //retorna false
'cedro' in arvores; //retorna false (você deve especificar o numero do indice,
//não o valor naquele indice)
'length' in arvores; //retorna true (length é uma propriedade de array)

//OBJETOS PREDEFINIDOS
'PI' in Math; //retorna true
var minhaString = new String('coral');
'length' in minhaString; //retorna true

//OBJETOS PERSONALIZADOS
var meuCarro = { marca: 'Honda', modelo: 'Accord', ano: 1998 };
'marca' in meuCarro; //retorna true
'modelo' in meuCarro; //retorna true

//instanceof
objeto instanceof tipoObjeto;

var dia = new Date(2018, 12, 17);
if (dia instanceof Date) {
  console.log('ok');
}
