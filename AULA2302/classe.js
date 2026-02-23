class Carro{
    //atributos
    modelo= 'S10 cabine dupla';
    marca= 'Chevrolet';
    ano= 2025;
    preco= 200000;

    //métodos
    mover(){
        console.log('Estou me movendo!');
    }
    mostrar(){
        console.log('O carro é do modelo:'+ this.modelo + ' marca '+ this.marca + ' ano '+ this.ano+' preço '+ this.preco);
    }
}

const caminhonete= new Carro();//instanciar a classe= criar o objeto
caminhonete.mover();//utilizar métodos
caminhonete.mostrar();
