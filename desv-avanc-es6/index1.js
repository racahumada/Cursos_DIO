//###################################
//ARROW FUNCTIONS
//###################################
// //Arrow function de return implicito
// var func1 = (a, b) => a + b;

// //Arrow de retorno implicito de objeto
// var func2 = () => {
//   {
//     teste: '123';
//   }
// };

//Função construtora
//Obs.: não é possivel usar arrow function para funções construtoras
// function Car() {
//     this.type = 'Rach';
// }

// console.log(new Car());

//Hoisting não funciona com arrow functions
//Lembrando que hoisting é o ato de  chamar um função de ela existir;
// log('teste');
// var log = value => {
//     console.log(value);
// };

//####################################################
//Contexto de invocação
//O 'this' do metodo esta referenciando ao proprio metodo
// var obj = {
//     showContent: function showContent(){
//         console.log(this);
//     },
//     log: function log(value) {
//         console.log(value)
//     }
// }
// obj.showContent();

//No exemplo abaixo usamos o contexto de invocação para usar um método do objeto
// var obj = {
//     showContent: function showContent(){
//         this.log('teste');
//     },
//     log: function log(value) {
//         console.log(value);
//     }
// }
// obj.showContent();

//Algumas funções do JS trabalham no contexto global ex.: setTimeOut()
// var obj = {
//     showContent: function showContent(){
//         this.log('teste');

//         //Então o contexto de invocação não vai funcionar, pois o setTimeOut tem contexto global.
//         setTimeout(function(){
//             // this.log('depois de 1000ms');
//             console.log(this);
//             //Utilizando o .bind() podemos apontar o a função para o objeto onde esta sendo chamado
//         }.bind(this), 1000);
//     },
//     log: function log(value) {
//         console.log(value);
//     }
// }
// obj.showContent();

// var obj = {
//     showContent: function showContent(){
//         //this = obj
//         //as arrows functions tem uma propriedade que é ter o contexto do bloco {} que envolve ela.
//         //Sem necessidade de se usar o bind()
//         setTimeout(() => {
//             this.log('after 1000ms')
//         }, 1000)
//     },
//     log: function log(value) {
//         console.log(value);
//     }
// }
// obj.showContent();

//###################################
//DEFAULT FUNCTION ARGUMENTS
//###################################

//valor padrão para argumentos
//para caso algum parametro não for passado ou for undefined
// function multiply(a = 1, b = 1) {
//   return a * b;
// }
// console.log(multiply(5));

//lazy evaluation
// function randomNumber() {
//   return Math.random() * 10;
// }

// function multiply(a = 1, b = randomNumber()) {
//   return a * b;
// }

// console.log(multiply(5).toFixed(2));

//###################################
//ENHANCED OBJECT LITERALS
//###################################
// var prop1 = 'teste 1';
// function method() {
//   console.log('method 1');
// }

// var obj = {
//   //caso o nome da propriedade seja o mesmo da variavel, basta apenas deixar o nome da propriedade
//   prop1,
//   //também funciona para métodos
//   method,
// };

// console.log(obj);
// obj.method();

// //Possivel atribuir uma função a uma propriedade
// var obj = {
//   sum: function (a, b) {
//     return a + b;
//   },
// };

// console.log(obj.sum(2, 3));

//Possivel atribuir uma função a uma propriedade,
//com ES6 não preciso atribuir a propriedade, nem usar a palavra reservada function
// var obj = {
//   sum(a, b) {
//     return a + b;
//   },
// };
// console.log(obj);
// console.log(obj.sum(2, 3));

// var propName = 'test';

// var obj = {};
// //Aqui esta sendo atribuido uma propriedade ao objeto, onde o nome será o valor da variavel propName.
// //E tambem esta sendo atribuido um valor
// obj[propName] = 'Prop value';
// console.log(obj);

//Com ES6 é possivel fazer direto na criação do objeto
var propName = 'test';

var obj = {
  [propName]: 'Prop value',
};
console.log(obj);
