/*8 - Receba uma nota (0–100) e transforme em conceito:
•	>= 90: A
•	>= 80: B
•	>= 70: C
•	>= 60: D
•	< 60: F */

var prompt = require('prompt-sync')();
var nota = Number(prompt('Digite sua nota: '));
if(nota>= 90){
    console.log('A');
}else if(nota>= 80){
    console.log('B');
}else if(nota>= 70){
    console.log('C');
}else if(nota>= 60){
    console.log('D')
}else{
    console.log('F');
}