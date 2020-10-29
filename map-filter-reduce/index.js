//Esta sendo mostrado um exemplo de manipulação de array com for  para mostrar a complexidade da execução
// const array = [1,2,3,4,5,6,7,8,9];
// const models = [];
// for(var i = 0; i < array.length; i++){
//     if(array.indexOf(array[i]) === i){
//         models.push(array[i]);
//     }
// }
// console.log(models);

const pets = [
    {
        name: 'olivia',
        type: 'dog',
        age: 4,
        weight: 8
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 4
    },
    {
        name: 'joaquim',
        type: 'pdi',
        age: 0.9,
        weight: 0.800
    },
    {
        name: 'tobias',
        type: 'pdi',
        age: 0.6,
        weight: 0.700
    },
]

// const menorQueUm = (valor) => {
//     return valor < 1;
// } 

// const newPets2 = pets.filter(pet => menorQueUm(pet.age));
// console.log(newPets2);


// const newPets = pets.filter(pet => {
//     return pet.type === 'pdi';
// });

// console.log(newPets);

// console.log(pets);

// const newArray = pets.map(pet => {
//     return {
//         name: pet.name,
//         type: pet.type,
//     };
// });

// console.log(newArray);

// const forEachPetNames = [];
// pets.forEach(pet => {
//     forEachPetNames.push(pet.name);
// });

// console.log(forEachPetNames);

// const totalIdades = pets.reduce((total, pet) => {
//     return total += pet.age;
// }, 0);
// console.log(totalIdades);
// const totaisObj = pets.reduce((total, pet) => {
//     return {
//         totalAge: total.totalAge + pet.age,
//         totalWeight: total.totalWeight + pet.weight
//     }
// }
// ,{totalAge: 0, totalWeight: 0})
// console.log(totaisObj);
// const totalAgePdi = pets.reduce((total, pet) => {
//     if (pet.type !== 'pdi') return total
//     return total += pet.age;
// }, 0);
// console.log(totalAgePdi);


// const totalIdades = pets.filter(pet => {
//     return pet.type === 'pdi';
// }).reduce((total, pet) => {
//     return total += pet.age;
// }, 0);
// console.log(totalIdades);


//ESTUDAR MAIS PROMISES
const items = ['a', 'b', 'c', 'd', 'e'];

(async function() {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - Promise`);
        })
    }

    const itemsMappedPromises = items.map(promiseFunction);
    console.log(itemsMappedPromises)
    const itemsMapped = await Promise.all(itemsMappedPromises);

    console.log(itemsMapped)
})()