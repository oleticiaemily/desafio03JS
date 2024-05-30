/*
//DESAFIO 1

alert("Hello World!")

//DESAFIO 2

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

let sum = (Number(firstNumber) + Number(secondNumber))

alert("A soma dos valores é " +sum)

//DESAFIO 3

let value = prompt("Digite um valor:");

if (!isNaN(value) && value.trim() !== '') {
  alert("É um número");
} else {
  alert("Não é um número");
}


//DESAFIO 4


let firstValue = prompt("Digite um valor:");

if (typeof firstValue === 'string' && isNaN(Number(firstValue))) {
  alert("É uma string");
} else {
  alert("Não é uma string");
}



//DESAFIO 6

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

let sum = (Number(firstNumber) - Number(secondNumber))

alert("A subtração dos valores é " +sum)



//DESAFIO 7

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

let sum = (Number(firstNumber) * Number(secondNumber))

alert("A multiplicação dos valores é " +sum)



//DESAFIO 8

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

let sum = (Number(firstNumber) * Number(secondNumber)) /2

alert("A divisão dos valores é " +sum)



let value = prompt("Digite um valor:");


let num = Number(value);

if (!isNaN(num) && num % 2 === 0) {
  alert("É um número par");
} else {
  alert("Não é um número par");
}


*/

//DESAFIO 10


let value = prompt("Digite um valor:");

let num = Number(value);

if (!isNaN(num) && num % 2 !== 0) {
  alert("É um número ímpar");
} else {
 alert("Não é um número ímpar");
}
