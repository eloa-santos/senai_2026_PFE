var prompt = require('prompt-sync')();
var ano =prompt('Digite o seu ano de nascimento: ');
let dataAtual= new Date;
let resultado= dataAtual.getFullYear()- ano;
console.log("Você tem", resultado, "anos");