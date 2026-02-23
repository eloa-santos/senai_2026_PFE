var prompt = require('prompt-sync')();
var idade = Number(prompt('Digite a sua idade: '));
if(idade>=16 && idade<18){
    console.log('Você tem idade suficiente para pegar livros.');
}else if(idade>=18){
    console.log('Você é maior de idade, pode pegar livros.');
}else{
    console.log('Você é muito novo, não pode pegar livros');
}