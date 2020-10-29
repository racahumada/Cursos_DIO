//fetch() - API que permite buscar recursos de maneira assincrona na rede

// fetch('./data.json').then((responseStream) => {
//   // console.log(responseStream);
//   responseStream.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch('./data.json')
//   .then((responseStream) => {
//     if (responseStream.status === 200) {
//       return responseStream.json();
//     } else {
//       throw new Error('Request Error');
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     //Somente será retorna algum erro se for de rede
//     console.log(err);
//   });

//ASYNC / AWAIT

const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123456);
    }, 1000);
  });

const simpleFunc = async () => {
  const data = await asyncTimer();
  const dataJson = await fetch('./data.json');
  const json = dataJson.json();
  return json;
};

simpleFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
