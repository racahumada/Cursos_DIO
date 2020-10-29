//###################################
//GENERATORS, SYMBOLS E OPERADORES
//

//SYMBOLS -> É uma maneira de gerar um identificador unico, independente se você atribuir um mesmo valor

// const uniqueId = Symbol('Hello');
// const uniqueId2 = Symbol('Hello');
// // console.log(uniqueId === uniqueId2);

//Symbol permite criar propriedades inacessivel de maneira acidental;
// const obj = {
//   [uniqueId]: 'Hello',
// };

// console.log(obj);

//No caso abaixo é demonstrado que a propriedade não é acessivel
//Lembrando que o keys serve para visualizar as chaves de um objeto (nome de propriedades)
// Object.keys(obj); //Não acessivel
// Object.getOwnPropertySymbols(obj); //Retorna um array de todas as propriedades symbols encontrada no objeto fornecido

//###################################

//WELL KNOWN SYMBOLS
Symbol.iterator;
Symbol.split;
Symbol.toString;

//um objeto “iterável”,  é qualquer tipo de coisa que você consegue realizar um laço sobre, por exemplo, um array, um objeto, uma sequencia de números, uma stream, ou qualquer coisa

// é possivel aplicar o spread e o for of em propriedades com iterator

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

// for (let value of arr) {
//   console.log(value);
// }

// for (let value of str) {
//   console.log(value);
// }

//
// const obj = {
//   values: [1, 2, 3, 4], //Propriedade literal
//   [Symbol.iterator]() {
//     //Propriedade computada
//     let i = 0;
//     return {
//       next: () => {
//         i++;
//         return {
//           value: this.values[i - 1],
//           done: i > this.values.length,
//         };
//       },
//     };
//   },
// };

// const it = obj[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (let value of obj) {
//   console.log(value);
// }

//GENERATORS
// function* hello() {
//   console.log('Hello');
//   yield 1;

//   console.log('From');
//   const value = yield 2;

//   console.log(value);
// }

// const it = hello();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next('Outside!'));

// function* naturalNumbers() {
//   let number = 0;
//   while (true) {
//     yield number;
//     number++;
//   }
// }

// const it = naturalNumbers();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//Podemos usar generators para construir a interface de iteraçã de objs
const obj = {
  values: [1, 2, 3, 4], //Propriedade literal
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  },
};

for (let value of obj) {
  console.log(value);
}
