<<<<<<< HEAD
var prompt = require('prompt-sync')();
var ano =prompt('Digite o seu ano de nascimento: ');
let dataAtual= new Date;
let resultado= dataAtual.getFullYear()- ano;
=======
var prompt = require('prompt-sync')();
var ano =prompt('Digite o seu ano de nascimento: ');
let dataAtual= new Date;
let resultado= dataAtual.getFullYear()- ano;
>>>>>>> eb6472d38a6c7c41c70a964f9c62e3666f430637
console.log("Você tem", resultado, "anos");