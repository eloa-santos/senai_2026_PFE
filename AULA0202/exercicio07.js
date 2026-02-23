//5 – Solicite um número ao usuário, e depois um segundo, verifique qual deles é o maior e caso seja zero, informe.
//var prompt = require('prompt-sync')();
//var n1 = Number(prompt('Digite um número: '));

var prompt = require('prompt-sync')();
var n1 = Number(prompt('digite um numero: '));
var n2 = Number(prompt('digite outro numero: '));
if(n1<n2){
    console.log("O maior numero é: ", n2);
}else{
    console.log("O maior numero é: ", n1);
}