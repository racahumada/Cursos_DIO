/**
 
if (condition) {
  //code 
}

 */

// const array = [0, 1, 2, 3, 4, 5];

// array.forEach((item) => {
//   if (item % 2 === 0) {
//     console.log(`O número ${item} é par.`);
//   } else {
//     console.log(`O número ${item} é impar.`);
//   }
// });

// const array1 = [2, 3, 4, 5, 6, 8, 10, 15];

// array1.forEach((item) => {
//   if (item % 2 === 0) {
//     console.log(`O numero ${item} é divisivel por 2.`);
//   } else if (item % 3 === 0) {
//     console.log(`O numero ${item} é divisivel por 3.`);
//   } else if (item % 5 === 0) {
//     console.log(`O numero ${item} é divisivel por 5.`);
//   }
// });

// array1.forEach((item) => {
//   if (item % 2 === 0) {
//     console.log(`O numero ${item} é divisivel por 2.`);
//   }
//   if (item % 3 === 0) {
//     console.log(`O numero ${item} é divisivel por 3.`);
//   }
//   if (item % 5 === 0) {
//     console.log(`O numero ${item} é divisivel por 5.`);
//   }
// });

//FOR IN E FOR OF
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}
