import assert from 'assert';
import Math from '../src/math.js';
import pkg from 'chai';
import sinon from 'sinon';
const { expect } = pkg;
//COMANDO PARA EXECUTAR TESTE COM MOCHA
//npm run test

// //é usado para criar uma suite de teste
// describe('Math class', function () {
//   //Descrevendo o teste a ser executado
//   it('Sum two numbers', function () {
//     //instanciando classe Math
//     const math = new Math();
//     //Testando se resultado do metodo é igual ao  valor experado
//     assert.strictEqual(math.sum(5, 5), 10);
//   });
// });

let value = 5;
//############### TESTE ASSINCRONO
// describe('Math class', function () {
//   //####### HOOKS
//   beforeEach(function () {
//     //Este serve para retornar o valor de uma variavel ao que foi inicializado a cada teste feito;
//     value = 0;
//   });

//   it('Sum two numbers', function (done) {
//     //Mocha aconselha o uso da palavra reservada 'function', para que o teste tenha um escopo proprio. Podendo assim usar o 'this'. O que permite chamar o timeout deste escopo e alterar o tempo limite. como no 'this.timeout' abaixo
//     const math = new Math();
//     //Obs.: Mocha tem um limite de tempo para os teste é de 2000ms
//     this.timeout(3000);
//     value = 5;
//     math.sum(value, 5, (value) => {
//       assert.strictEqual(value, 10);
//       done();
//       // 'done' é passado como parametro, pois nas chamadas assincronas o mocha considera como 'ok' o funcionamento mesmo antes de ter o retorno. Neste caso é colocado o para done(), para que só dê o resultado quando concluir o teste
//     });
//   });
//   //criar um teste mesmo sem existir, ele resultará como pendding
//   // it('Multiply two numbers');

//   //.skip -> posso deixar um teste em modo pendente
//   //it.skip('Multiply two numbers', function () {
//   //.only -> permite a execução de apenas um teste
//   it.only('Multiply two numbers', function () {
//     const math = new Math();
//     assert.strictEqual(math.multiply(value, 5), 10);
//   });
// });

// //################## USANDO CHAI
// describe('Math class', function () {
//   //####### HOOKS
//   beforeEach(function () {
//     value = 2;
//   });

//   it('Sum two numbers', function (done) {
//     const math = new Math();

//     this.timeout(3000);
//     math.sum(value, 5, (value) => {
//       //chai
//       expect(value).to.equal(7);
//       done();
//     });
//   });
//   it('Multiply two numbers', function () {
//     const math = new Math();
//     //chai
//     expect(math.multiply(value, 5)).to.equal(10);
//   });

//   it('Teste de propriedade', function () {
//     const obj = {
//       name: 'Ricardo Castro',
//     };
//     const obj2 = {
//       name: 'Ricardo Castro',
//     };
//     //Verificando se existe propriedade
//     expect(obj).to.have.property('name');
//     //Verificando valor da propriedade
//     expect(obj).to.have.property('name').equal('Ricardo Castro');
//     //comparando objs (vai compara as propriedades)
//     expect(obj).to.deep.equal(obj2);
//   });
// });

//################## USANDO SINON
describe('Math class', function () {
  //####### HOOKS
  beforeEach(function () {
    value = 2;
  });

  it('Sum two numbers', function (done) {
    const math = new Math();

    this.timeout(3000);
    math.sum(value, 5, (value) => {
      //chai
      expect(value).to.equal(7);
      done();
    });
  });
  it('Multiply two numbers', function () {
    const math = new Math();
    //chai
    expect(math.multiply(value, 5)).to.equal(10);
  });

  it('Teste de propriedade', function () {
    const obj = {
      name: 'Ricardo Castro',
    };
    const obj2 = {
      name: 'Ricardo Castro',
    };
    expect(obj).to.deep.equal(obj2);
  });

  it('Calls res with sum and index values', function () {
    const req = {};
    const res = {
      load: sinon.spy(),
    };
    const math = new Math();
    math.printSum(req, res, 5, 5);
    //verificando se a função foi invocada da maneira correta
    expect(res.load.calledOnce).to.be.true;
    //verificando se primeiro argumento da função ´e index
    expect(res.load.args[0][0]).to.equal('index');
    //verificando se segundo argumento da função ´e resultado da soma
    expect(res.load.args[0][1]).to.equal(10);
  });

  it.only('Calls res with sum and index values', function () {
    const req = {};
    const res = {
      load: function () {
        console.log('Called');
      },
    };
    sinon.spy(res, 'load');
    const math = new Math();
    math.printSum(req, res, 5, 5);
    //verificando se a função foi invocada da maneira correta
    expect(res.load.calledOnce).to.be.true;
  });
});
