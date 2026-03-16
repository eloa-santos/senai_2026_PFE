<<<<<<< HEAD
class Caneta{
    //atributos publicos
    cor= 'Preto'
    marca= 'Faber Castel';
    ponta= 'Fina';
    qtdTinta= 5;
    tampa= false;

    //metodo tem parenteses
    escrever(){
        return 'Começou a escrever';
    }
    sublinhar(valor){
        if(this.qtdTinta>valor){
        this.qtdTinta-=valor;//subitrai o valor da quantidade de tinta
        return  'Quantidade restante de tinta: ' +this.qtdTinta;
    }else{
        console.log('A quantidade estabelecida é maior que a quantidade de tinta da caneta!!!')
    }
    }
}
const canetaFina= new Caneta();
console.log(canetaFina.escrever());
=======
class Caneta{
    //atributos publicos
    cor= 'Preto'
    marca= 'Faber Castel';
    ponta= 'Fina';
    qtdTinta= 5;
    tampa= false;

    //metodo tem parenteses
    escrever(){
        return 'Começou a escrever';
    }
    sublinhar(valor){
        if(this.qtdTinta>valor){
        this.qtdTinta-=valor;//subitrai o valor da quantidade de tinta
        return  'Quantidade restante de tinta: ' +this.qtdTinta;
    }else{
        console.log('A quantidade estabelecida é maior que a quantidade de tinta da caneta!!!')
    }
    }
}
const canetaFina= new Caneta();
console.log(canetaFina.escrever());
>>>>>>> eb6472d38a6c7c41c70a964f9c62e3666f430637
console.log(canetaFina.sublinhar(7));//2 é o q  quanto foi gasto de tinta