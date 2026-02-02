/*10 - Dado peso (kg) e altura (m), calcule o IMC peso / (altura ** 2) e classifique:
•	< 18.5: Abaixo do peso
•	>= 18.5 && < 25: Normal
•	>= 25 && < 30: Sobrepeso
•	>= 30: Obesidade */

var prompt = require('prompt-sync')();
var peso = Number(prompt('Digite seu peso: '));
var altura = Number(prompt('Digite sua altura: '));
let imc;
imc= peso/(altura*altura);
if(imc< 18.5){
    console.log('Abaixo do peso');
}else if(imc>= 18.5 && imc<25){
    console.log('Peso normal');
}else if(imc>= 25 && imc<30){
    console.log('Sobrepeso');
}else{
    console.log('Obesidade');
}