//Tipos e Variáveis
//Var - let - const

// {
//   //Escopo de Bloco
// }

// function test() {
//   //Escopo de Função
// }
//Exemplo com VAR
// var test = 'example';

// (() => {
//   console.log(`Valor dentro da função "${test}"`);
//   if (true) {
//     var test = 'example';
//     console.log(`Valor dentro do if "${test}"`);
//   }
//   console.log(`Valor após a execução do if "${test}"`);
// })();
//Exemplo com LET

// (() => {
//   let test = 'valor função';
//   console.log(`Valor dentro da função "${test}"`);

//   if (true) {
//     let test = 'valor if';
//     console.log(`Valor dentro do if "${test}"`);
//   }

//   if (true) {
//     let test = 'valor outro if';
//     console.log(`Valor de outro if "${test}"`);
//   }

//   console.log(`Valor após a execução do if "${test}"`);
// })();

console.log('---------');
//Imutabilidade / Spread / Literal String
// const user = {
//   name: 'Ricardo',
//   lastName: 'Castro',
// };

// function getUserFullName(user) {
//   return {
//     ...user,
//     fullName: `${user.name} ${user.lastName}`,
//   };
// }

// const userWithFullName = getUserFullName(user);
// console.log(userWithFullName);

console.log('---------');
//Hoisting Função
// function fn2() {
//   log('Hoisting de função');
//   /* Uma boa prática é sempre declarar a função antes de usar  */
//   function log(value) {
//     console.log(value);
//   }
// }

// fn2();
console.log('---------');
//Hoisting Variavel
// function fn() {
//   console.log(text);
//   var text = 'Exemplo';
//   console.log(text);
// }

// fn();
console.log('---------');
//Currynig
// function soma(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const soma2 = soma(2);

// console.log(soma2(2));
// console.log(soma2(3));
// console.log(soma2(4));
// console.log(soma2(5));
// console.log('---------');

//Closure
// function makeFunc() {
//   var name = 'Mozilla';
//   function displayName() {
//     alert(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();
