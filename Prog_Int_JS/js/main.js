let btn = document.querySelectorAll("button");
let divInfo = document.querySelector("#info");

console.log(btn);


function botao() {
    divInfo.textContent = "Ricardo Acertou";
    //alert("Obrigado por clicar!");
}

function goto() {
    //abre nova aba
    window.open("http://www.google.com.br");
    //abre na mesma aba
    window.location.href = "http://www.google.com.br";
}

function cor() {
    divInfo.style.width = "100px";
    divInfo.style.height = "100px";
    divInfo.style.backgroundColor = "#00f";
}

function load() {
    alert("Teste");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

btn[0].onclick = botao;
btn[1].onclick = goto;
btn[2].onmouseover = cor;

// function soma(n1, n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome);
// }

// function validaIdade(idade) {
//     let validar;
//     if (idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }

//     return validar;
// }

// let idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade));

// alert(setReplace("vai japão", "japão", "brasil"));
// alert(soma(2, 2));

// let d = new Date();
// const dia = Array();

// dia[0] = 'Domingo';
// dia[1] = 'Segunda';
// dia[2] = 'Terça';
// dia[3] = 'Quarta';
// dia[4] = 'Quinta';
// dia[5] = 'Sexta';
// dia[6] = 'Sábado';

// console.log(dia[d.getDay()]);
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count += 1;
// }

// let idade = prompt('Qual a sua idade:');

// if (idade > 18) {
//     console.log('Maior de Idade');
// } else {
//     console.log('Menor de Idade');
// }

// let fruta = {
//     nome: "Maça",
//     cor: "Vermelho"
// };

// console.log(fruta.nome);

// let frutas2 = [
//     {cor: "vermelho", nome: "maçã"},
//     {cor: "roxa", nome: "uva"}
// ];

// console.log(frutas2[1]);


// let lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// lista.pop();


// console.log(lista[0]);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString()[0]);
// console.log(lista[1]);
// console.log(lista.join(" - "));
// console.log(lista);