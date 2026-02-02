var prompt = require('prompt-sync')();
var n1 = Number(prompt('Digite um número: '));
var n2 = Number(prompt('Digite outro número: '));
var sinal = prompt('Digite o simbolo da operação obs(-+*/): ');

function operacao(n1,n2,op){
    if(op == '+'){
        console.log('O resultado da soma é: ', (Number(n1 + n2)));
    }else if(op == '-'){
         console.log('O resultado da subtração é: ', (Number(n1 - n2)));
    }else if(op == '*'){
         console.log('O resultado da multiplição é: ', (Number(n1 * n2)));
    }else{
         console.log('O resultado da divisão é: ', (Number(n1 / n2)));
    }
}

operacao(n1,n2,sinal);