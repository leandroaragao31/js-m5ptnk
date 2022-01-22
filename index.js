//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let number = 18;
if (number >= 18) {
  console.log('você pode passar');
} else {
  console.log('você não pode passar');
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let human = true;

if (number >= 18 && human) {
  console.log('parabéns, você é humano e maior de 18 ');
} else {
  console.log('você não pode passar pois não humano nem tem mais de 18');
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let month = 'julho';
let birthday = 'dezembro';
if (month == 'Janeiro' || birthday == 'dezembro') {
  console.log('parabéns você é do signo de capricornio');
} else {
  console.log('você não é do signo de capricornio');
}
//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let name = 'Ronaldo';
if (name.substring(0, 1) == 'R') {
  console.log('seu nome começa com a letra R');
} else {
  console.log('seu nome não começa com a letra R');
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let lastName = 'Euclides';

if (lastName.length > 6 || lastName.substring(0, 1) == 'E') {
  console.log('que sobrenome elegante você tem');
} else {
  console.log('seu sobrenome não é tão elegante assim');
}
