// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const array2 = new Array(1, 2, 3);
// const array3 = Array.of(1, 2, 3);
// const array4 = Array(3); //Neste caso foi criado um array com 3 espaços
// const array5 = Array(3, 2);
// console.log(array);
// console.log(array2);
// console.log(array3);
// console.log(array4);
// console.log(array5);
// /**
//  * Neste caso estaremos criando um array com base nos itens do nodelist gerado pela querySelectorAll
//  */
// // const divs = document.querySelectorAll('div');
// // const divArray = Array.from(divs);

// //inserir elementos no fim da lista - push()
// const frutas = ['maça', 'uva', 'banana'];
// console.log(frutas);
// frutas.push('laranja');
// console.log(frutas);

// //remover item
// const removeItem = frutas.pop();
// console.log(removeItem);

// //insere item no inicio da lista - unshift()
// const arrlen = frutas.unshift('amora'); //retorna tamanho da lista

// console.log(arrlen);
// console.log(frutas);

// //remover primeiro elemento do array
// const arrRem = frutas.shift(); //Retorna item removido

// console.log(arrRem);
// console.log(frutas);

// //concatenar listas de objetos
// const salgados = ['coxinha', 'kibe', 'empada'];
// const alimentos = frutas.concat(salgados);
// console.log(alimentos);

// //fatiar um array, ou seja, mostrar de que indice a que indice retornar
// const arrFatia = array.slice(0, 3);
// console.log(arrFatia);
// const arrFatia2 = array.slice(3);
// console.log(arrFatia2);

// //Altera array  adicionando novos elementos enquanto remove elementos antigos (mutavel)
// const arraySplice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arraySplice);
// arraySplice.splice(5);
// console.log(arraySplice);
// arraySplice.splice(0, 0, 'first');
// console.log(arraySplice);
// arraySplice.splice(3, 0, 20);
// console.log(arraySplice);

// //foreach() - itera cada item dentro do array, apenas executa uma funçao sem manipular dentro
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((value, index) => {
//   console.log(`${value} e ${index}`);
// });

// //map() - retorna um novo array -
// const pares = arr.map((data) => {
//   return data * 10;
// });
// console.log(pares);

// //flat() - retorna novo array
// const idades = [20, 34, [35, 60, [70, 40]]];
// console.log(idades);
// const novo = idades.flat(1);
// console.log(novo);

//flatmap() - retorna flat de 1 posição
// const arr = [1, 2, 3, 4, 5];
// const flatMap = arr.flatMap((value) => [value * 2]);
// console.log(flatMap);
// const flatMap2 = arr.flatMap((value) => [[value * 2]]);
// console.log(flatMap2);
// const idades = [20, 34, [35, 60, [70, 40]]];
// const flatMap3 = idades.flatMap((value) => [value * 2]);
// console.log(flatMap3);

//keys() - retorna um array iterator que contém as chaves para cada elemento
// const arr = [1, 2, 3, 4, 5];
// const arrIt = arr.keys();
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());

//values() - retorna um array iterator que contém os valores  para cada elemento
// const arr = [1, 2, 3, 4, 5];
// const arrIt = arr.values();
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());

//values() - retorna um array iterator que contém o par chave/valor  para cada elemento
// const arr = ['maça', 'laranja', 'pera'];
// const arrIt = arr.entries();
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());

//find - retorna o primeiro item de um array que satisfaz a condição
// const arr = [1, 2, 3, 4, 5];
// const arrFind = arr.find((value) => value > 2);
// console.log(arrFind);

//findIndex - retorna o primeiro indice do primeiro item de um array que satisfaz a condição
// const arr = [1, 2, 3, 4, 5];
// const arrFind = arr.findIndex((value) => value > 2);
// console.log(arrFind);

//filter() - retorna todos os itens que satisfazem uma determinada condição
// const arr = [1, 2, 3, 4, 5];
// const arrFind = arr.filter((value) => value > 2);
// console.log(arrFind);

//indexOf - retorna primeiro indice em que um elemento pode ser encontrado no array
// const arr = [1, 2, 3, 4, 3];
// const arrFind = arr.indexOf(3);
// console.log(arrFind);

//lastIndexOf - retorna ultimo indice em que um elemento pode ser encontrado no array
// const arr = [1, 2, 3, 4, 3];
// const arrFind = arr.lastIndexOf(3);
// console.log(arrFind);

//includes - retorna um booleano verificando se determinado elemento existe no array
// const arr = [1, 2, 3, 4, 3];
// const arrFind = arr.includes(3);
// console.log(arrFind);

//some - retorna um booleano verificando se algum elemento satisfaz a condição
// const arr = [1, 2, 3, 4, 3];
// const arrFind = arr.some((value) => value % 2 === 0);
// console.log(arrFind);

//every() retorna um booleano verificando se todos elemento satisfaz a condição
const arr = [1, 2, 3, 4, 3];
const arrFind = arr.every((value) => value % 2 === 0);
console.log(arrFind);

//sort - ordenar elementos
const arrSort = arr.sort((a, b) => {
  return a - b;
});
console.log(arrSort);

//reverse - inverter posições do array
arr.reverse();
console.log(arrSort);

//join - junta todos os elementos de um array separadaos por um delimitador e retorna uma string
const arrJoin = arr.join('/');
console.log(arrJoin);

//reduce - retorna um novo tipo de dado iterando cada posição de um array
const total = arr.reduce((total, value) => {
  return (total += value);
}, 0);
console.log(total);
