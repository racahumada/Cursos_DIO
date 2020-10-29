//###################################
//DESTRUCTURING ASSIGNMENT
//
//###################################

// var arr = ['apple', 'banana', 'orange', ['tomato']];

// var apple = arr[0];
// var banana = arr[1];
// var orange = arr[2];
// var tomato = arr[3][0];

// console.log(apple);

// //Destructuring Assignment
// var [apple2, banana2, orange2, [tomato2]] = [
//   'apple',
//   'banana',
//   'orange',
//   ['tomato'],
// ];
// //Buscar sempre se preocupar se existem se existem os indices que serão relacionados as variaveis, em relação a indices multidimensionais
// console.log(apple, apple2, tomato2);

//###################################
// //Modo comum de se passar o valor de uma propriedade a uma variavel
// var obj = {
//   name: 'celso',
//   props: {
//     age: 31,
//     favColors: ['black', 'blue'],
//   },
// };
// var arr = ['apple', 'orange'];
// // var name = obj.name;

// //Quebrando um objeto ou arrays em variaveis
// var [apple, orange] = arr;
// var { name } = obj;
// var {
//   props: {
//     age,
//     favColors: [color1, color2],
//   },
// } = obj; //Desestruturando dentro de uma desestruturação

// //Quebrando o obejto e definindo um novo nome a variavel
// var { name: name2 } = obj;

// console.log(age);
// console.log(apple);
// console.log(orange);
// console.log(name);
// console.log(name2);
// console.log(color1);
// console.log(color2);

//###################################
// //Destructuring de um array de objetos
// var arr = [{ name: 'Apple', type: 'fruit' }];

// var [{ name, type }] = arr;
// console.log(name);
// console.log(type);

//###################################
//Array
function sum([a, b] = []) {
  //Possivel usar default values tambem sum([a, b] = [0,0])
  return a + b;
}

console.log(sum([5, 5]));

//Objects
function sum2({ a, b }) {
  //Possivel usar default values tambem sum([a, b] = [0,0])
  return a + b;
}

console.log(sum2({ a: 5, b: 10 }));
