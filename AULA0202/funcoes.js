function cumprimento(nome){//função padrão
    console.log('Seja bem-vindo(a)!', nome)
}

//cumprimento('Eloá');

//função anônima
const somar = function(num1 , num2){
    console.log('A soma dos números é: ', (num1 + num2));
}

//somar(5, 10);

const subtrair = (num1, num2)=>{
    console.log('A subtração dos números é: ', (num1- num2));
}

subtrair(30, 20);