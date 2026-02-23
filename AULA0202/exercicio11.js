/*9 - Dado um preco e um cupom ("BRONZE", "PRATA", "OURO"), aplique:
•	BRONZE: 5%
•	PRATA: 10%
•	OURO: 15%
Caso cupom inválido, sem desconto.*/


var prompt = require('prompt-sync')();
var preco = Number(prompt('Digite o preco: '));
let resultado;
var cupom = prompt('digite o seu cupom: ');
if(cupom == 'bronze'){
   resultado= preco*(5/100);
   console.log('seu desconto é de: ', preco-resultado);
}else if(cupom== 'prata'){
    resultado= preco*(10/100);
   console.log('seu desconto é de: ', preco-resultado);
}else if(cupom=='ouro'){
    resultado= preco*(15/100);
   console.log('seu desconto é de: ', preco-resultado);
}else{
    console.log('cupom invalido');
}