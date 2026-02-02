/*6 - Dada a idade de uma pessoa, classifique:	
•	< 12: “criança”
•	>= 12 && < 18: “adolescente”
•	>= 18 && < 60: “adulto”
•	>= 60: “idoso”*/

var prompt = require('prompt-sync')();
var idade = Number(prompt('Digite sua idade: '));
if(idade<12){
    console.log('criança');
}else if(idade>= 12 && idade<18){
    console.log('adolescente');
}else if(idade>= 18 && idade<60){
    console.log('adulto');
}else{
     console.log('idoso');
}