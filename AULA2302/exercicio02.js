class Bicicleta{
    #modelo;
    #marca;
    #cor;
    #velocidadeMaxima;

    //metodos gretter e setter
    setModelo(valor){
        this.#modelo= valor;
    }
    getModelo(){
        return this.#modelo;
    }
    setMarca(valor){
        this.#marca= valor;
    }
    getMarca(){
        return this.#marca;
    }
    setCor(valor){
        this.#cor= valor;
    }
    getCor(){
        return this.#cor;
    }
    setvelocidadeMaxima(valor){
        if(valor>35){
            console.log('Não é possivel inserir acima de 35');
        }else{

        
        this.#velocidadeMaxima= valor;
        }
    }
    getvelocidadeMaxima(){
        return this.#velocidadeMaxima;
    }
}
const caloi= new Bicicleta();
caloi.setMarca('caloi');
console.log(caloi.getMarca());
caloi.setCor('preto');
console.log(caloi.getCor());
caloi.setModelo('velox');
console.log(caloi.getModelo());
caloi.setvelocidadeMaxima(36);
console.log(caloi.getvelocidadeMaxima());
