//###################################
//REST E SPREAD
//Funcionam em strings, arrays, literals objects e objetos iteraveis
//###################################
// function sum(a, b) {
//   var values = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     values += arguments[i];
//   }

//   return values;
// }
// //'arguments' -> é uma variavel utilizada para recuperar dentro de um objeto os valores passados como parametro dentro de uma função
// console.log(sum(5, 5, 5, 2, 3));

//arguments não funcionam em arrow functions
//###################################
// function sum(...args) {
//   return args.reduce((acc, value) => acc + value, 0);
// }

// console.log(sum(5, 5, 5, 2, 3));
//###################################
// function sum(a, b, ...rest) {
//   //o rest pode ser utilizado para pegar o restante de parametros além dos desejados
//   console.log(a, b, rest);
// }

// function multiply(...args) {
//   return args.reduce((acc, value) => acc * value, 1);
// }

// const sum = (...rest) => {
//   return multiply(...rest);
// };

// console.log(sum(5, 5, 5, 2, 3));
//###################################
// const str = 'Digital Innovation One';

// const LogArgs = (...args) => {
//   console.log(args);
// };

// LogArgs(str);
// //O spread vai basicamente quebrar o em varias partes dentor de um array
// LogArgs(...str);

// const str = 'Digital Innovation One';
// const arr = [1, 2, 3, 4];

// const LogArgs = (...args) => {
//   console.log(args);
// };

// LogArgs(...arr);

// //Pode ser usados para concatenar array, ou clona-los tbm
// const arr2 = [...arr, 5, 6, 7];
// const arrClone = [...arr2];
// console.log(arr2);
// console.log(arrClone);

//Também posso passar propriedades de um objeto para outro
const obj = {
  test: 123,
};

const obj2 = {
  ...obj,
  test2: 'hello',
};

console.log(obj2);
