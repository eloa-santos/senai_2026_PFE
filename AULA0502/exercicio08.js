var prompt = require('prompt-sync')();
var num =Number(prompt('Digite um número: '));
let numAleatorio= Math.random();
if(num==numAleatorio){
    console.log('Os números são iguais!!!!');
}else{
    console.log('Os números são diferentes, o número sorteado era:',numAleatorio);
}