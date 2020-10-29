/** ######################### DEU ERRO MAS QUERO TESTAR OUTRA COISA################################## */

// import { promises as fs } from 'fs';
// import path, { resolve } from 'path';
// const basePath = './assets/';

// const readFileAsync = (path, options) => {
//   return new Promise(async (resolve, reject) => {
//     console.log('dentro da promise');
//     console.log(path, options);
//     const teste = await fs.readFile(path, options);
//     return teste;
//     // console.log(teste);
//     // await fs.readFile(path, options, (err, data) => {
//     //   if (err) {
//     //     console.log(err);
//     //     return reject(err);
//     //   }
//     //   console.log('dentro da read', resolve(data));
//     //   // return resolve(data);
//     // });
//   });
// };

// console.log('Begin');
// function read(index) {
//   console.log('Entrou no read');
//   return readFileAsync(path.resolve(`${basePath}s${index}.txt`), {
//     encoding: 'utf-8',
//   });
// }

// async function start(index, max) {
//   console.log('Entrou no start');

//   const teste = await read(index);
//   console.log(teste);
// }

// start(1, 4);
/** #################### FIM DO ERRO ####################################### */
/** ########################################################### */
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject('End'), 2000);
// });

// console.log('Begin');

// //Primeira forma
// // promise
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log('oops', err));

// //Segunda forma
// //promise.then(console.log);

// //Terceira forma
// promise.then(
//   (res) => {},
//   (rej) => {}
// );
// //Equivalentes
// promise.then((res) => {});
// promise.catch((rej) => {});

// const coinFlip = new Promise((resolve, reject) =>
//   Math.random() > 0.5 ? resolve('Yay') : reject('Ooops')
// );

// //Uma promise houver um erro vai executar o primeiro catch que encontrar
// coinFlip
//   .then((data) => console.log(data, 1))
//   .then(() => console.log('End1'))
//   .catch((err) => console.log('Erro 1'));

// //Nesta chamada caso haja um erro ele vai executar no primeiro then,
// //vai chamar o catch, mas vai executar o proximo then mesmo assim
// coinFlip
//   .then((data) => console.log(data, 1))
//   .catch((err) => console.log('Erro 1'))
//   .then(() => console.log('End1'));

/** ########################################################### */

// //Catch não tranca a execução do codigo caso haja erro
// console.log('begin');

// coinFlip
//   .then((data) => console.log(data))
//   .catch((err) => {
//     throw err;
//   })
//   .then(() => console.log('End1'));

// new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() =>
//   console.log('yay')
// );

/** ########################################################### */
//Demonstrando que o throw vai interromper o código
// function start() {
//   throw new Error('An error');
// }

// console.log('Begin');
// start();
// console.log('end');

/** ########################################################### */

// coinFlip
//   .then((data) => console.log('yay 1'))
//   .then(() => console.log('Result'))
//   .then(() => console.log('End1'));

// coinFlip
//   .catch(() => console.log('first catch'))
//   // .catch(() => {
//   //   throw new Error('First catch');
//   // })
//   .catch((err) =>
//     console.error('error in first case, next then will not execute')
//   );

/** ########################################################### */
// const coinFlip = new Promise((resolve, reject) =>
//   setTimeout(() => (Math.random() > 0.5 ? resolve('yay') : reject('ops')), 2000)
// );

// const p = Promise.resolve('resolve').then(coinFlip);

// p.then(console.log).catch(() => console.log('error'));

/** ########################################################### */
const coinFlip = (n) =>
  new Promise((resolve, reject) =>
    Math.random() > 0.5 ? resolve(true) : reject(false)
  );

console.log('begin');
const promiseArray = [];
for (let i = 0; i < 4; i++) {
  promiseArray[i] = coinFlip(Math.random());
}

console.log(promiseArray);
//no Promise.all quando uma promise da erro ele para tudo
Promise.all(promiseArray).then((arr) => console.log(arr));
