//Promises
//Quando uma promise é instanciada, se tudo ocorrer corretamente é retornado 'resolve', caso aja algum erro retorna reject
const doSomeThingPromises = () =>
  new Promise((resolve, reject) => {
    //Throw par testar catch e reject
    // throw new Error('Something went wrong');
    setTimeout(function () {
      //did someThing
      resolve('First Data');
    }, 1500);
  });

const doOtherThingPromises = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      //did other Thing
      resolve('Second Data');
    }, 1000);
  });

//Promises Sequencial
// doSomeThingPromises()
//   .then((data) => {
//     console.log(data.split(''));
//     return doOtherThingPromises();
//   })
//   .then((data2) => console.log(data2.split('')))
//   .catch((error) => {
//     //Se qualquer error ocorrer dentro das duas promises será tratado diretamente pelo catch
//     console.log('estou aqui');
//     console.log(error);
//   });

//Promises em paralelo
// Promise.all([doSomeThingPromises(), doOtherThingPromises()])
//   .then((data) => {
//     console.log(data[0].split(''));
//     console.log(data[1].split(''));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Promise que resolver primeiro retorna o valor
Promise.race([doSomeThingPromises(), doOtherThingPromises()])
  .then((data) => {
    console.log(data.split(''));
  })
  .catch((error) => {
    console.log(error);
  });

//Status das Promises
//1 - Pendding - Esta em execução
//2 - Fulfilled - Quando conclui a execução
//3 - Rejected - Quando retorna algum erro

//#################################################
//Callbacks
// function doSomeThing(callback) {
//   setTimeout(function () {
//     //did someThing
//     callback('First Data');
//   }, 1000);
// }
// function doOtherThing(callback) {
//   setTimeout(function () {
//     //did someThing
//     callback('Second Data');
//   }, 1000);
// }

// function doAll() {
//   try {
//     doSomeThing(function (data) {
//       var processedData = data.split('');
//       try {
//         doOtherThing(function (data2) {
//           var processedData2 = data2.split('');
//           try {
//             setTimeout(function () {
//               console.log(processedData, processedData2);
//             }, 1000);
//           } catch (error) {
//             //handle error
//           }
//         });
//       } catch (error) {
//         //handle error
//       }
//     });
//   } catch (err) {
//     //handle error
//   }
// }

// doAll();
